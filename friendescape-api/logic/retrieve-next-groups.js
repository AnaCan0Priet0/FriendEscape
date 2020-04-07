const { validate } = require('friendescape-utils')

const { models: { Group, User, Escaperoom } } = require('friendescape-data')
const { NotFoundError, NotAllowedError } = require('friendescape-errors')

module.exports = () => {

    return (async ()=> {

        const newdate= new Date
        const groups = await Group.find({"date" : { "$gt" : newdate}}).populate('subevents', 'name').populate('escapeRoom', 'title location punctuation theme difficulty duration price img minplayers maxplayers')
        
        if (!groups) throw new NotFoundError(`No groups defined`)

        const retrievedGroups = []

        groups.map(group => {
            const element = {}
            element.id = group.id
            element.date = group.date
            element.time = group.time
            element.subevents = group.subevents
            element.escapeRoom = group.escapeRoom
            
            retrievedGroups.push(element)
        })
        
    //     retrievedGroups.forEach(group => {
    //     group.subevents.forEach(async id => {
    //         const user = await User.findById(id)
    //         retrievedGroups.subevents.push(name)

    //     })
    // });

        return retrievedGroups

    })()

}


    // return Group.find({"date" : { "$gt" : newdate}})
    //     .then(res => {
    //         if (!res) throw new NotFoundError(`No groups defined`)



    //     })  
 