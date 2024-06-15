const EdulabListing = require('../../service/edulab');


class EdulabController {
    constructor() {
        this.edulabListing = new EdulabListing();

    }

    health = (req, res) => {
        return res.status(200).json({ statusCode: 200, data: "ok" });
    }

    updateByEdulabData = (req, res) => {
        let payload = {
          id: req.params.id,
        };
        this.edulabListing
          .updateEdulabData(payload, req.body)
          .then((data) => {
            console.log("here data", data)
            return res.status(200).json(data);
          });
      };
}

module.exports = EdulabController