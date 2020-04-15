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
            if (group.subevents.includes(userId))throw new NotFoundError (`this user is already on the group`)
            console.log(group)
            return Promise.all([User.findByIdAndUpdate(userId, { $addToSet: { subbedTo: groupId } }), Group.findByIdAndUpdate(groupId, { $addToSet: { subevents: userId } }).populate('subevents', 'name surname email')
            
            ])
        
        //.then(() => { })
        .then(([user, group]) => {
            //TODO modify group subevents. palabra del profesor
            const {date, time, escapeRoom :{title, location, theme, difficulty, duration, price, minplayers, maxplayers}} = group
            const {email} = user
            let members = ''
            for (let i = 0; i < group.subevents.length; i++) members += `\n\t\t${i+1}: ${group.subevents[i].name}, ${group.subevents[i].surname}, ${group.subevents[i].email}\n`;
            const body = `Hi friend, 
            Here do you have the information about your next appointment:
            Escape Room: ${title},
            Theme: ${theme},
            Date: ${date},
            Time: ${time},
            Location: ${location},
            Group Members: ${members},
            Aditional information: 
            Difficulty: ${difficulty}, 
            Duration: ${duration}, 
            Price: ${price},
            Min-players:${minplayers},
            Max-players:${maxplayers},
            If you have any issue please, don't hesitate to contact us:
            Email: friendescape@friendescape.com
            Office: 9 Land Street Toowong, Brisbane (8-18h)`
            
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'programadoraenapuros@gmail.com',
                    pass: 'SkyLabProyecto'
                }
            })
            
                mailOptions = {
                    from: 'FriendEscape',
                    to: `${email}`,
                    subject: 'Congrats, you joined a group',
                    text: body
                    // attachments: [
                    //     { filename: 'fear.jpg',
                    //     path: './fear.jpg'}
                    // ]

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
    })
}
