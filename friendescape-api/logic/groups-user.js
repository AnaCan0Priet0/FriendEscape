const { validate } = require('friendescape-utils')
const { models: { User, Group} } = require('friendescape-data')
const { NotFoundError } = require('friendescape-errors')

module.exports = (userId) => {

    validate.string(userId, 'userId')

    return (async()=> {
        const newdate= new Date
        const groups = await Group.find({"date" : { "$gt" : newdate}}, {subevents : userId}).populate('subevents', 'name').populate('escapeRoom', 'title location punctuation theme difficulty duration price img minplayers maxplayers')
        
       


    return groups
    })()
}