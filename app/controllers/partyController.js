const Party = require('../models/party')

module.exports.list = (req, res) => {
    Party.find({ user:req.user._id})
        .then((party) => {
            res.json(party)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Party.findOne({_id:id,user:req.user._id})
        .then((party) => {
            if (party) {
                res.json(party)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const party = new Party(body)
    // party.symbol = req.files[0].destination + req.files[0].filename
    party.user=req.user._id
    party.save()
        .then((party) => {
            res.json(party)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Party.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((party) => {
            res.json(party)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Party.findOneAndDelete({_id:id,user:req.user._id})
        .then((party) => {
            res.json(party)
        })
        .catch((err) => {
            res.json(err)
        })
}