const { validate } = require('friendescape-utils')
const { models: { User} } = require('friendescape-data')
const { NotFoundError } = require('friendescape-errors')

module.exports = (userId) => {

    validate.string(userId, 'userId')

    return (async()=> {
        const user = await (await User.findById( userId ))
        const {subbedTo} = user
       


    return subbedTo
    })()
}