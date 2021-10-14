import { useState } from 'react';
import { useRouter } from 'next/router'

export default function CropCard({ crop }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Publish crop data
    const publishCrop = async (cropId) => {
        // change publishing state
        setPublishing(true);

        try {
            // Update crop data
            await fetch('/api/crops', {
                method: 'PUT',
                body: cropId,
            });

            // reset the publishing state
            setPublishing(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // Stop publishing state
            return setPublishing(false);
        }
    };
    // Delete crop post
    const deleteCrop = async (cropId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete crop data
            await fetch('/api/crops', {
                method: 'DELETE',
                body: cropId,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <h3>{crop.cropName}</h3>
                <p>{crop.content}</p>
                <small>{new Date(crop.createdAt).toLocaleDateString()}</small>
                <br />
                <div className="field is-grouped">
                    {!crop.published ? (
                        <div className="control">
                            <button className="button is-link" type="button" onClick={() => publishCrop(crop._id)}>
                                {publishing ? 'Publishing' : 'Publish'}
                            </button>
                        </div>
                    ) : null}
                    <div className="control">
                        <button className="button is-link" type="button" onClick={() => deleteCrop(crop['_id'])}>
                            {deleting ? 'Deleting' : 'Delete'}
                        </button>
                    </div>
                </div>

            </li>
        </>
    );
}