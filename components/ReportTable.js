import { useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { server } from '../config'


export default function CropTable({ report }) {
    const [deleting, setDeleting] = useState(false)
    const router = useRouter()

    // Delete crop post
    const deleteReport = async (reportId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete crop data
            await fetch(`/api/reports`, {
                method: 'DELETE',
                body: reportId,
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

    const editReport = async (reportId) => {
        try {
            // Update crop data
            let response = await fetch(`/api/editCrop`, {
                method: 'POST',
                body: reportId,
            })
            let reportResponse = await response.json()

            // reload the page
            return router.push({
                pathname: '/editReport',
                query: reportResponse.report[0]
            })
        } catch (error) {
            return console.log("Error:", error)
        }
    }

    return (
        <>
            <tr key={report._id}>
                <td data-label="Name">{report.reportName}</td>
                <td data-label="Hydration">40%</td>
                <td data-label="Infestation">10%</td>
                <td data-label="Created">
                    <small className="has-text-grey is-abbr-like" title="Oct 25, 2020">Oct 25, 2020</small>
                </td>
                <td className="is-actions-cell">
                    <div className="buttons is-right">
                        <button className="button is-small is-link" href="/" onClick={() => editReport(report['_id'])}>
                            <span>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                        </button>
                        <button className="button is-small is-link" type="button" onClick={() => deleteReport(report['_id'])}>
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
