const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sonal:sonal@mern-crud.j3no7.mongodb.net/todo?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })