
import clientPromise, { connectToDatabase } from "../../lib/mongodb";

//const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getCrops(req, res)
        }

        case 'GETONE': {
            return getOneCrop(req, res)
        }

        case 'POST': {
            return addCrop(req, res)
        }

        case 'PUT': {
            return updateCrop(req, res)
        }

        case 'DELETE': {
            return deleteCrop(req, res)
        }
    }
}

async function getCrops(req, res) {
    const MONGODB_DB = process.env.DB_NAME
    try {
        // connect to the database
        let { db } = await connectToDatabase()


        // fetch the posts
        let crops = await db
            .collection('cropTest')
            .find({})
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

async function addCrop(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase()
        // add the crop
        await db.collection('cropTest').insertOne(JSON.parse(req.body))
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

async function deleteCrop(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase()

        // Deleting the crop
        await db.collection('cropTest').deleteOne({
            _id: new ObjectId(req.body),
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