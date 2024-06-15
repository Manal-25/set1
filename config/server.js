const express = require("express")
const bodyParser = require("body-parser")
require('../config/mongo')

class Server {
    constructor() {
        this.app = express();
        this.setup();
    }

    setup = () => {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        const router = require('../routes/route');
        this.app.use('/', router);

    }

    run = (port) => {
        this.server = this.app.listen(port, () => {
            console.log(`Server started. Listening on port ${port}`)
        });
    }
}
module.exports = Server;