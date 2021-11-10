const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getCrop(req, res)
        }
        case 'POST': {
            return matchCrop(req, res)
        }

        case 'PUT': {
            return updateCrop(req, res)
        }

        case 'DELETE': {
            return deleteCrop(req, res)
        }
    }
}

async function matchCrop(req, res) {
    const MONGODB_DB = process.env.DB_NAME
    try {
        // connect to the database
        let { db } = await connectToDatabase()

        // fetch the matched
        let crop = await db
            .collection('crops')
            .find(
                { crop_id: new Object(req.body) },
            )
            .toArray()
        // return the crop
        return res.json({
            crop
        })

    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

async function updateCrop(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase()

        let crop = JSON.parse(req.body)

        // update the hydration or infestation level
        await db.collection('cropTest').updateOne(
            {
                _id: new ObjectId(crop.cropId)
            },
            { $push: {
                   hydrationArray : crop.hydration,
                   hydrationDateArray: crop.hydrationDate,
                   infestationArray: crop.infestation,
                   infestationDateArray: crop.infestationDate
                }
            }

        )
        // return a message
        return res.json({
            message: 'Crop updated successfully',
            success: true,
        })
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}
