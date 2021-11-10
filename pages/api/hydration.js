
import clientPromise, { connectToDatabase } from "../../lib/mongodb";

//const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getHydration(req, res)
        }

        case 'POST': {
            return addLevels(req, res)
        }

        case 'PUT': {
            return updateHydration(req, res)
        }

        case 'DELETE': {
            return deleteHydration(req, res)
        }
    }
}

async function getHydration(req, res) {
    const MONGODB_DB = process.env.DB_NAME
    try {
        // connect to the database
        let { db } = await connectToDatabase()


        // fetch the posts
        let crops = await db
            .collection('crops')
            .find({
                hydrationLevel: {$exists: true}
            })
            .toArray()
        // return the crops

        return res.json({
            message: JSON.parse(JSON.stringify(crops)),
            success: true,
        })
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

async function addLevels(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase()

        let cropId = new ObjectId()

        let crop = JSON.parse(req.body)

        // add the crop
        await db.collection('crops').insertMany([
            {crop_id: cropId, hydrationLevel: crop.hydrationLevel, hydrationDate: crop.hydrationDate },
            {crop_id: cropId, infestationLevel: crop.infestationLevel, infestationDate: crop.infestationDate}
        ])
        // return a message
        return res.json({
            message: 'Crop added successfully',
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

async function deleteHydration(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase()

        // Deleting the crop
        await db.collection('crops').deleteMany({
            _id: new ObjectId(req.body),
            crop_id: new ObjectId(req.body)
        })

        // returning a message
        return res.json({
            message: 'Crop deleted successfully',
            success: true,
        })
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}