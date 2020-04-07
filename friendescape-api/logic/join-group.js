const { models: { Group, User } } = require('friendescape-data')
const { validate } = require('friendescape-utils')
const { NotFoundError, NotAllowedError } = require('friendescape-errors')

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
}