
//const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getReports(req, res)
        }

        case 'POST': {
            return addReport(req, res)
        }

        case 'PUT': {
            return updateReport(req, res)
        }

        case 'DELETE': {
            return deleteReport(req, res)
        }
    }
}

async function getReports(req, res) {
    const MONGODB_DB = process.env.DB_NAME
    try {
        // connect to the database
        let { db } = await connectToDatabase()


        // fetch the posts
        let reports = await db
            .collection('cropReports')
            .find({})
            .toArray()
        // return the crops

        return res.json({
            message: JSON.parse(JSON.stringify(reports)),
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

async function addReport(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase()
        // add the crop
        await db.collection('cropReports').insertOne(JSON.parse(req.body))
        // return a message
        return res.json({
            message: 'Report added successfully',
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

async function deleteReport(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase()

        // Deleting the crop
        await db.collection('cropReports').deleteOne({
            _id: new ObjectId(req.body),
        })

        // returning a message
        return res.json({
            message: 'Report deleted successfully',
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