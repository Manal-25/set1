const mongoose = require('mongoose');

class Mongo {
    constructor() { }

    add = (payload, modelName) => {
        let Model = mongoose.model(modelName)
        let model = new Model(payload);
        return new Promise((resolve, reject) => {
            model.save().then(result => {
                resolve({ data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }

    // update = (query, payload, modelName) => {
    //     let Model = mongoose.model(modelName);
    //     return new Promise((resolve, reject) => {
    //         Model.updateOne(query, payload).then(result => {
    //             resolve({ data: result });
    //         }).catch(err => {
    //             reject(err);
    //         });
    //     });
    // }

    update = (query, payload, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.updateOne(query, payload).then(result => {
                resolve({ data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }

    delete = (query, modelName, schema) => {
        let Model = !mongoose.models[modelName] ? mongoose.model(modelName, schema) : mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.deleteOne(query).then(result => {
                resolve({ data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }

    find = (query, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.find(query).then(result => {
                resolve({ identifier: 'mongo', data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }
    findPagenation = (query, skip, limit, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.find(query)
                .skip(skip)
                .limit(limit)
                .then((result) => {
                    resolve({ identifier: "mongo", data: result });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
}

module.exports = Mongo;



