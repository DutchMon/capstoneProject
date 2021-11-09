const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getReport(req, res)
        }
        case 'POST': {
            return matchReport(req, res)
        }

        case 'PUT': {
            return updateReport(req, res)
        }

        case 'DELETE': {
            return deleteReport(req, res)
        }
    }
}

async function matchReport(req, res) {
    const MONGODB_DB = process.env.DB_NAME
    try {
        // connect to the database
        let { db } = await connectToDatabase()

        // fetch the matched
        let report = await db
            .collection('cropReports')
            .find(
                { _id: ObjectId(req.body) }
            )
            .toArray()
        // return the crop
        return res.json({
            report
        })

    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

async function updateReport(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase()

        let report = JSON.parse(req.body)

        // update the hydration or infestation level
        await db.collection('cropReports').updateOne(
            {
                _id: new ObjectId(report.cropId)
            },
            { $push: {
                   hydrationArray : report.hydration,
                   hydrationDateArray: report.hydrationDate,
                   infestationArray: report.infestation,
                   infestationDateArray: report.infestationDate
                }
            }

        )
        // return a message
        return res.json({
            message: 'Report updated successfully',
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
