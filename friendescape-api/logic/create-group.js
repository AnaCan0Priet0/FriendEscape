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
    
    return ( async () =>{ 

    const newGroup = new Group({date, time, state, escapeRoom: escaperoomId} )
    
    newGroup.subevents.push(userId)

    const user = await User.findById(userId)

    user.pubevents.push(newGroup._id.toString())

    newGroup.id = newGroup._id.toString()

    await user.save()
    await newGroup.save()

    const group = await Group.findById(newGroup.id).populate('escapeRoom', 'title location theme difficulty duration price minplayers maxplayers')

    const {date: groupDate, time: groupTime, escapeRoom : escapeRoom_} = group
    const {title, location, theme, difficulty, duration, price, minplayers, maxplayers} = escapeRoom_
            const {email} = user
            const body = `Hi friend, 
            Here do you have the information about your next appointment:
            Escape Room: ${title},
            Theme: ${theme},
            Date: ${groupDate},
            Time: ${groupTime},
            Location: ${location},
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
        subject: 'Congrats, your group has been created successfully',
        text: body
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('E-mail sent: ' + info.response)
        }
    })

    return newGroup

        
})()
}
