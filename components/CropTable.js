import { useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { server } from '../config'
import { hydrate } from 'react-dom'


export default function CropTable({ crop }) {
    const [deleting, setDeleting] = useState(false)
    const router = useRouter()


    //let hydrationArrayLastVal = crop.hydrationArray[crop.hydrationArray.length-1]
    //let infestationArrayLastVal = crop.infestationArray[crop.infestationArray.length-1]
    let created =  new Date(crop.creationDate).toDateString()

    // Delete crop post
    const deleteCrop = async (cropId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete crop data
            await fetch(`/api/crops`, {
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
        //console.log('--------- testing ------- ', cropId)
        try {
            // Update crop data
            let response = await fetch(`/api/editCrop`, {
                method: 'POST',
                body: cropId,
            })
            let cropResponse = await response.json()

            let cropNameQuery = cropResponse.crop.find(x => x.crop_id === cropId)

            //console.log('------- I checked this already...--------', cropResponse.crop[3])

            // reload the page
            return router.push({
                pathname: '/editCrop',
                query: cropNameQuery
            })
        } catch (error) {
            return console.log("Error:", error)
        }
    }

    return (
        <>
            <tr className="has-text-centered" key={crop.crop_id}>
                <td data-label="Name">{crop.cropName}</td>
                <td data-label="Hydration">{crop.hydrationLevel}</td>
                <td data-label="Infestation">{crop.infestationLevel}</td>
                <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Date">{created}</small>
                </td>
                <td className="is-actions-cell">
                    <div className="buttons is-right">
                        <button className="button is-small is-link" href="/" onClick={() => editCrop(crop['crop_id'])}>
                            <span>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                        </button>
                        <button className="button is-small is-link" type="button" onClick={() => deleteCrop(crop.cropName)}>
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

