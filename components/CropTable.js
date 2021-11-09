import { useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { server } from '../config'


export default function CropTable({ crop }) {
    const [deleting, setDeleting] = useState(false)
    const router = useRouter()

    // Delete crop post
    const deleteCrop = async (cropId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete crop data
            await fetch(`${server}/api/crops`, {
                method: 'DELETE',
                body: cropId,
            })

            // reset the deleting state
            setDeleting(false)

            // reload the page
            return router.push(router.asPath)
        } catch (error) {
            // stop deleting state
            return setDeleting(false)
        }
    }

    const editCrop = async (cropId) => {
        try {
            // Update crop data
            let response = await fetch(`/api/editCrop`, {
                method: 'POST',
                body: cropId,
            })
            let cropResponse = await response.json()

            // reload the page
            return router.push({
                pathname: '/editCrop',
                query: cropResponse.crop[0]
            })
        } catch (error) {
            return console.log("Error:", error)
        }
    }

    return (
        <>
            <tr key={crop._id}>
                <td data-label="Name">{crop.cropName}</td>
                <td data-label="Hydration">40%</td>
                <td data-label="Infestation">10%</td>
                <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Oct 25, 2020">Oct 25, 2020</small>
                </td>
                <td className="is-actions-cell">
                    <div className="buttons is-right">
                        <button className="button is-small is-link" href="/" onClick={() => editCrop(crop['_id'])}>
                            <span>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                        </button>
                        <button className="button is-small is-link" type="button" onClick={() => deleteCrop(crop['_id'])}>
                            {deleting ? 'Deleting' : (
                                <span>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </span>)}
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}


/*


<button className="button is-small is-link" type="button" onClick={() => editCrop(crop['_id'])}>
    <span>
        <FontAwesomeIcon icon={faPenToSquare} />
    </span>
</button>

    <li key={crop._id}>
        <h3>{crop.cropName}</h3>
        <p>{crop.content}</p>
        <small>{new Date(crop.createdAt).toLocaleDateString()}</small>
        <br />
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" type="button" onClick={() => editCrop(crop['_id'])}>
                    {editing ? 'Editing' : 'Edit'}
                </button>
            </div>
            <div className="control">
                <button className="button is-link" type="button" onClick={() => deleteCrop(crop['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>
            </div>
        </div>

    </li>
*/