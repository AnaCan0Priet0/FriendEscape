const { models: { Group, User } } = require('friendescape-data')
const { validate } = require('friendescape-utils')
const { NotFoundError} = require('friendescape-errors')
const nodemailer = require('nodemailer')

module.exports = (userId, groupId) => {

    validate.string(userId, 'userId')
    validate.string(groupId, 'groupId')

    return Promise.all([User.findById(userId), Group.findById(groupId)])
        .then(([user, group]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)
            if (!group) throw new NotFoundError(`group with id ${groupId} does not exist`)

            return Promise.all([User.findByIdAndUpdate(userId, { $addToSet: { subbedTo: groupId } }), Group.findByIdAndUpdate(groupId, { $addToSet: { subevents: userId } })])
        })
        .then(() => { })
        .then(() => {
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'programadoraenapuros@gmail.com',
                    pass: 'SkyLabProyecto'
                }
            })
            
                mailOptions = {
                    from: 'FriendEscape',
                    to: `anacano1985@gmail.com`,
                    subject: 'Te has añadido a un grupo',
                    text: `You have booked`,
              }
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
              
            })
        })
        .then(() => {})
}
