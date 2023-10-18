const express = require('express')
const db = require('../db')
const router = express.Router()


//get /users
router.get('/',(request,response)=>{
    const statement = `select * from user`
    db.query(statement,(error,data)=>{
        if(error){
            response.send(error)
        }
        response.send(data)
    })
})

//get-  /users/id with error handling
router.get('/:id',(request,response)=>{
    const id = request.params.id
    const statement = `select * from user where id = '${id}'`
    db.query(statement,(error,data)=>{
        if(error){
            response.send(error)
        }
        if(data.length==0){
            response.send("Data not found")
        }
        if(data.length!=0){
            response.send(data)
        }
    })
})

//post-  /users
router.post('/',(request,response)=>{
    const Name = request.body.Name
    const Email = request.body.Email
    const Password = request.body.Password
    const statement = `insert into user(Name,Email,Password) values('${Name}','${Email}','${Password}')`
    db.query(statement,(error,data)=>{
        if(error){
            response.send(error)
        }
        response.send(data)
    })  
})



//put-  /users/id
router.put('/:id',(request,response)=>{
    const id = request.params.id
    const Name = request.body.Name
    const Email = request.body.Email
    const Password = request.body.Password
    const statement = `UPDATE user SET Name = '${Name}', Email = '${Email}',Password = '${Password}' WHERE id = '${id}'`

    db.query(statement,(error,data)=>{
        if(error){
            response.send(error)
        }
        response.send(data)
    })
})


//delete-  /users/id
router.delete('/:id',(request,response)=>{
    const id = request.params.id
    const statement = `delete from user where id = '${id}'`
    db.query(statement,(error,data)=>{
        if(error){
            response.send(error)
        }
        response.send(data)
    })
})

module.exports = router