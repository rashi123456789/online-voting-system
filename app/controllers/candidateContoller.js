const Candidate = require('../models/candidate')

module.exports.list = (req, res) => {
    Candidate.find({ user:req.user._id}).populate('party')
        .then((candidate) => {
            res.json(candidate)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Candidate.findOne({_id:id,user:req.user._id}).populate('party')
        .then((candidate) => {
            if (candidate) {
                res.json(candidate)
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
    const candidate = new Candidate(body)
    candidate.user=req.user._id
    candidate.save()
        .then((candidate) => {
            res.json(candidate)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Candidate.findOneAndUpdate({_id:id,user:req.user._id}, body, { new: true, runValidators: true })
        .then((candidate) => {
            res.json(candidate)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Candidate.findOneAndDelete({_id:id,user:req.user._id})
        .then((candidate) => {
            res.json(candidate)
        })
        .catch((err) => {
            res.json(err)
        })
}