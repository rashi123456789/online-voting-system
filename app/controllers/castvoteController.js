const Castvote = require('../models/castvote')

module.exports.list = (req, res) => {
    Castvote.find({ user:req.user._id}).populate('party').populate('candidate')
        .then((castvote) => {
            res.json(castvote)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Castvote.findOne({_id:id,user:req.user._id}).populate('party').populate('candidate')
        .then((castvote) => {
            if (castvote) {
                res.json(castvote)
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
    const castvote = new Castvote(body)
    castvote.user=req.user._id
    castvote.save()
        .then((castvote) => {
            res.json(castvote)
        })
        .catch((err) => {
            res.json(err)
        })
}

