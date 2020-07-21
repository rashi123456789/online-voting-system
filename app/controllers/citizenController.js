const Citizen = require('../models/citizen')

module.exports.list = (req, res) => {
    Citizen.find({ user:req.user._id})
        .then((citizen) => {
            res.json(citizen)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Citizen.findOne({_id:id,user:req.user._id})
        .then((citizen) => {
            if (citizen) {
                res.json(citizen)
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
    const citizen = new Citizen(body)
    citizen.user=req.user._id
    citizen.save()
        .then((citizen) => {
            res.json(citizen)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Citizen.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((citizen) => {
            res.json(citizen)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Citizen.findOneAndDelete({_id:id,user:req.user._id})
        .then((citizen) => {
            res.json(citizen)
        })
        .catch((err) => {
            res.json(err)
        })
}