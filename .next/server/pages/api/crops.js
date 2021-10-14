"use strict";
(() => {
var exports = {};
exports.id = "pages/api/crops";
exports.ids = ["pages/api/crops"];
exports.modules = {

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectToDatabase": () => (/* binding */ connectToDatabase)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME; // check the MongoDB URI

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environmental variable');
} // check the MongoDB DB


if (!MONGODB_DB) {
  throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb
    };
  } // set the connection options


  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }; // Connect to cluster

  let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);
  await client.connect();
  let db = client.db(MONGODB_DB); // set cache

  cachedClient = client;
  cachedDb = db;
  return {
    client: cachedClient,
    db: cachedDb
  };
}

/***/ }),

/***/ "./pages/api/crops.js":
/*!****************************!*\
  !*** ./pages/api/crops.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ "./lib/mongodb.js");
 //const { connectToDatabase } = require('../../lib/mongodb');

const ObjectId = __webpack_require__(/*! mongodb */ "mongodb").ObjectId;

async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET':
      {
        return getCrops(req, res);
      }

    case 'POST':
      {
        return addCrop(req, res);
      }

    case 'PUT':
      {
        return updateCrop(req, res);
      }

    case 'DELETE':
      {
        return deleteCrop(req, res);
      }
  }
}

async function getCrops(req, res) {
  try {
    // connect to the database
    let {
      db
    } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)(); // fetch the posts

    let crops = await db.collection('crops').find({}).sort({
      published: -1
    }).toArray(); // return the crops

    return res.json({
      message: JSON.parse(JSON.stringify(crops)),
      success: true
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

async function addCrop(req, res) {
  try {
    // connect to the database
    let {
      db
    } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)(); // add the crop

    await db.collection('crops').insertOne(JSON.parse(req.body)); // return a message

    return res.json({
      message: 'Crop added successfully',
      success: true
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

async function updateCrop(req, res) {
  try {
    // connect to the database
    let {
      db
    } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)(); // update the published status of the crop

    await db.collection('crops').updateOne({
      _id: new ObjectId(req.body)
    }, {
      $set: {
        published: true
      }
    }); // return a message

    return res.json({
      message: 'Crop updated successfully',
      success: true
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

async function deleteCrop(req, res) {
  try {
    // Connecting to the database
    let {
      db
    } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)(); // Deleting the crop

    await db.collection('crops').deleteOne({
      _id: new ObjectId(req.body)
    }); // returning a message

    return res.json({
      message: 'Crop deleted successfully',
      success: true
    });
  } catch (error) {
    // returning an error
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/crops.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtBQUZHLEtBQVQsQ0FBUDtBQUlIO0FBQ0o7Ozs7Ozs7Ozs7QUMxSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY3JvcHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuREJfTkFNRTtcblxuLy8gY2hlY2sgdGhlIE1vbmdvREIgVVJJXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50YWwgdmFyaWFibGUnKTtcbn1cblxuLy8gY2hlY2sgdGhlIE1vbmdvREIgREJcbmlmICghTU9OR09EQl9EQikge1xuICAgIHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSBNT05HT0RCX0RCIGVudmlyb25tZW50YWwgdmFyaWFibGUnKTtcbn1cblxubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2FjaGVkRGIgPSBudWxsO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gICAgLy8gY2hlY2sgdGhlIGNhY2hlZC5cbiAgICBpZiAoY2FjaGVkQ2xpZW50ICYmIGNhY2hlZERiKSB7XG4gICAgICAgIC8vIGxvYWQgZnJvbSBjYWNoZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50OiBjYWNoZWRDbGllbnQsXG4gICAgICAgICAgICBkYjogY2FjaGVkRGIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgLy8gQ29ubmVjdCB0byBjbHVzdGVyXG4gICAgbGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSwgb3B0cyk7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBsZXQgZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XG5cbiAgICAvLyBzZXQgY2FjaGVcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2FjaGVkRGIgPSBkYjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudDogY2FjaGVkQ2xpZW50LFxuICAgICAgICBkYjogY2FjaGVkRGIsXG4gICAgfTtcbn0iLCJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XG5cbi8vY29uc3QgeyBjb25uZWN0VG9EYXRhYmFzZSB9ID0gcmVxdWlyZSgnLi4vLi4vbGliL21vbmdvZGInKTtcbmNvbnN0IE9iamVjdElkID0gcmVxdWlyZSgnbW9uZ29kYicpLk9iamVjdElkO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgLy8gc3dpdGNoIHRoZSBtZXRob2RzXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDcm9wcyhyZXEsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdQT1NUJzoge1xuICAgICAgICAgICAgcmV0dXJuIGFkZENyb3AocmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnUFVUJzoge1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZUNyb3AocmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnREVMRVRFJzoge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZUNyb3AocmVxLCByZXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDcm9wcyhyZXEscmVzKXtcbiAgICB0cnkge1xuICAgICAgICAvLyBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgICAgICBsZXQgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgLy8gZmV0Y2ggdGhlIHBvc3RzXG4gICAgICAgIGxldCBjcm9wcyA9IGF3YWl0IGRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbignY3JvcHMnKVxuICAgICAgICAgICAgLmZpbmQoe30pXG4gICAgICAgICAgICAuc29ydCh7IHB1Ymxpc2hlZDogLTEgfSlcbiAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIC8vIHJldHVybiB0aGUgY3JvcHNcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY3JvcHMpKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGUgZXJyb3JcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZENyb3AocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgICAgICBsZXQgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgLy8gYWRkIHRoZSBjcm9wXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2Nyb3BzJykuaW5zZXJ0T25lKEpTT04ucGFyc2UocmVxLmJvZHkpKTtcbiAgICAgICAgLy8gcmV0dXJuIGEgbWVzc2FnZVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0Nyb3AgYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIHJldHVybiBhbiBlcnJvclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3JvcChyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIGxldCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcHVibGlzaGVkIHN0YXR1cyBvZiB0aGUgY3JvcFxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdjcm9wcycpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6IG5ldyBPYmplY3RJZChyZXEuYm9keSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAkc2V0OiB7IHB1Ymxpc2hlZDogdHJ1ZSB9IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyByZXR1cm4gYSBtZXNzYWdlXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnQ3JvcCB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIC8vIHJldHVybiBhbiBlcnJvclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3JvcChyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIENvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIGxldCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgICAgIC8vIERlbGV0aW5nIHRoZSBjcm9wXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2Nyb3BzJykuZGVsZXRlT25lKHtcbiAgICAgICAgICAgIF9pZDogbmV3IE9iamVjdElkKHJlcS5ib2R5KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmV0dXJuaW5nIGEgbWVzc2FnZVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0Nyb3AgZGVsZXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAvLyByZXR1cm5pbmcgYW4gZXJyb3JcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RCIiwiREJfTkFNRSIsIkVycm9yIiwiY2FjaGVkQ2xpZW50IiwiY2FjaGVkRGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImRiIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJPYmplY3RJZCIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0Q3JvcHMiLCJhZGRDcm9wIiwidXBkYXRlQ3JvcCIsImRlbGV0ZUNyb3AiLCJjcm9wcyIsImNvbGxlY3Rpb24iLCJmaW5kIiwic29ydCIsInB1Ymxpc2hlZCIsInRvQXJyYXkiLCJqc29uIiwibWVzc2FnZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJlcnJvciIsImluc2VydE9uZSIsImJvZHkiLCJ1cGRhdGVPbmUiLCJfaWQiLCIkc2V0IiwiZGVsZXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==