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
            .collection('cropTest')
            .find(
                { _id: ObjectId(req.body) }
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


/*
async function updateCrop(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase()

        // update the hydration or infestation level
        await db.collection('crops').updateOne(
            {
                _id: new ObjectId(req.body.cropId)
            },
            { $push: {storedHydrationLevel: { hydrationArray: { req.body.hydration } }
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
*/