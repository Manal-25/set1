const Mongo = require("./mongo/mongo");

class Edulab {
    constructor() {
        this.mongo = new Mongo();
    }
    updateEdulabData = (query,content) => {
        return new Promise((resolve, reject) => {
            this.mongo.update(query, content, 'edulabDbDownload').then((result) => {
                console.log("here result data",result)
                return resolve({ result: result, statuscode: 200 })
            }).catch(err => {
                return reject(err)
            })
        })
    }
}

module.exports = Edulab

