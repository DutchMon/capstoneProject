import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/router'


export default function AddCrop() {
    const [reportName, setReportName] = useState('')
    const [description, setDescription] = useState('')
    const [expectedYield, setExpectedYield] = useState(0)
    const [expectedYieldDate, setExpectedYieldDate] = useState(new Date())
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter()

    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('')
        setMessage('')

        // fields check
        if (!reportName) return setError('You must enter a name for the crop')

        // cropPost structure
        let report = {
            reportName,
            description,
            expectedYieldArray: [
                expectedYield
            ],
            expectedYieldDateArray: [
                expectedYieldDate
            ],
            initialCreation: new Date().toISOString()
        }
        // save the post
        let response = await fetch('/api/reports', {
            method: 'POST',
            body: JSON.stringify(report),
        })

        // get the data
        let data = await response.json()

        if (data.success) {
            // reset the fields
            setReportName('')
            setDescription('')
            setExpectedYield(0)
            setExpectedYieldDate(new Date())
            // set the message
            return (
                setMessage(data.message),
                router.push({
                    pathname: '/reports'
                })
            )
        } else {
            // set the error
            return setError(data.message)
        }
    }



    return (
        <div className="column is-full is-centered">
            <form className="sliderForm" onSubmit={handlePost}>
                {error ? (
                    <div className="field">
                        <h3 className="help is-danger">{error}</h3>
                    </div>
                ) : null}
                {message ? (
                    <div className="field">
                        <h3>{message}</h3>
                    </div>
                ) : null}
                <div className="column is-full is-vcentered has-text-centered">
                    <h1 className="title is-2 is-spaced">Add a New Report</h1>
                    <h2 className="subtitle is-6">This form adds a new report to the log.</h2>
                </div>
                <hr />
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Report Name</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded">
                                <input
                                    className="input"
                                    type="text"
                                    name="reportName"
                                    onChange={(e) => setReportName(e.target.value)}
                                    value={reportName}
                                    placeholder="Name the Report"
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Notes</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <div className="control is-expanded">
                                <textarea
                                    className="textarea"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    placeholder="Include a note here"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Expected Yield</label>
                    </div>
                    <div className="field-body">
                        <div className="field has-addons">
                            <div className="control">
                                <output className="slider sliderOutput" htmlFor="sliderWithValue">{expectedYield}%</output>
                            </div>
                            <div className="control is-expanded">
                                <input
                                    id="ExpectedYield"
                                    className="slider has-output is-fullwidth"
                                    onChange={(e) => setExpectedYield(e.target.valueAsNumber)}
                                    min="0"
                                    max="100"
                                    value={expectedYield}
                                    step="1"
                                    type="range"
                                />
                            </div>
                            <div className="control">
                                <label className="label slider">Recorded on</label>
                            </div>
                            <div className="control">
                                <DatePicker
                                    className="slider sliderCalendar"
                                    selected={expectedYieldDate}
                                    onChange={(date) => setExpectedYieldDate(date)}
                                    monthsShown={2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-link" type="submit">Submit</button>
                    </div>
                    <div className="control">
                        <a className="button is-dark" href="/reports">Cancel</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
