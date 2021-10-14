import { useState } from 'react';


export default function AddCrop() {
    const [cropName, setCropName] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!cropName || !content) return setError('All fields are required');

        // cropPost structure
        let crop = {
            cropName,
            content,
            published: false,
            createdAt: new Date().toISOString(),
        };
        // save the post
        let response = await fetch('/api/crops', {
            method: 'POST',
            body: JSON.stringify(crop),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setCropName('');
            setContent('');
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
    };

    return (
        <section className="section">
            <div className="container">
                <form onSubmit={handlePost}>
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
                    <div className="field">
                        <label className="label">Crop Name</label>
                        <input
                            className="input"
                            type="text"
                            name="cropName"
                            onChange={(e) => setCropName(e.target.value)}
                            value={cropName}
                            placeholder="Name the Crop"
                        />
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <textarea
                            className="textarea"
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder="testing crop form content"
                        />
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                        <div className="control">
                            <a className="button is-link is-light" href="/cropAnalytics">Cancel</a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}