const { validate } = require('friendescape-utils')
const { models: { Group, User}, } = require('friendescape-data')
const { NotFoundError } = require('friendescape-errors')
const nodemailer = require('nodemailer')

module.exports = (escaperoomId, userId, date, time, state ) => {
    date = new Date(date)
    validate.string(escaperoomId, 'escaperoomId')
    validate.string(userId, 'userId')
    validate.string(time, 'time')
    validate.string(state, 'state')
    
    return ( async() =>{ 

    const newGroup = new Group({date, time, state, escapeRoom: escaperoomId} )
    
    newGroup.subevents.push(userId)

    const user = await User.findById(userId)

    user.pubevents.push(newGroup._id.toString())

    newGroup.id = newGroup._id.toString()

    await user.save()
    await newGroup.save()
    
    return newGroup

        
})()
}

// const { validate } = require('friendescape-utils')
// const { models: { Group, User}, } = require('friendescape-data')
// const { NotFoundError } = require('friendescape-errors')
// const nodemailer = require('nodemailer')

// module.exports = (escaperoomId, userId, date, time, state ) => {
    
//     date = new Date(date)
//     debugger
//     validate.string(escaperoomId, 'escaperoomId')
//     validate.string(userId, 'userId')
//     validate.string(time, 'time')
//     validate.string(state, 'state')
    
//     return Promise.all(new Group({date, time, state, escapeRoom: escaperoomId} ))
//     .then(([user, group])=> {
//         if(!escapeRoom) throw new NotFoundError(`you didn't selected a escape room`)
//         if (!time) throw new NotFoundError(`you didn't select a time`)
//     })
    
//     .then(([user, group]) => {
//     newGroup.subevents.push(userId)

//     User.findById(userId)

//     user.pubevents.push(newGroup._id.toString())

//     newGroup.id = newGroup._id.toString()
//      user.save()
//    newGroup.save()
    
//  (([user, group]) => {
//         const {date, time, escapeRoom :{title, location, theme, difficulty, duration, price, minplayers, maxplayers}} = group
//         const {email} = user
//         const body = `Hi friend, 
//         Here do you have the information about the group that you just created:
//         Escape Room: ${title},
//         Theme: ${theme},
//         Date: ${date},
//         Time: ${time},
//         Location: ${location},
//         Aditional information: 
//         Difficulty: ${difficulty}, 
//         Duration: ${duration}, 
//         Price: ${price},
//         Min-players:${minplayers},
//         Max-players:${maxplayers},
//         If you have any issue please, don't hesitate to contact us:
//         Email: friendescape@friendescape.com
//         Office: 9 Land Street Toowong, Brisbane (8-18h)`
        
//         transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'programadoraenapuros@gmail.com',
//                 pass: 'SkyLabProyecto'
//             }
//         })
        
//             mailOptions = {
//                 from: 'FriendEscape',
//                 to: `${email}`,
//                 subject: 'Congrats, you created',
//                 text: body

//           }
//             transporter.sendMail(mailOptions, function (error, info) {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log('Email sent: ' + info.response);
//                 }
          
//         })
//     })

    
//     return newGroup

        
// })()
// }