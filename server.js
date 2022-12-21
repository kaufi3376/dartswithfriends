const express = require("express")
const app = express()

const PORT = process.env.PORT || 5500
app.use(express.static("public"));
const http = require("http").Server(app);

/*
const io = require("socket.io")(3000, {
    cors: {
      origin: "*"
    }
  });
*/

const io = require("socket.io")(http);
  const users = {}
  const userswithroom= {}

  http.listen(PORT, ()=>{
    console.log("Listening on "+ PORT)
  })

app.get("/", (req,res)=> res.sendFile(__dirname+"/index.html"));

io.on("connection", socket =>{
    //socket.emit("chat", "Hello World")
    //console.log("User logged in with id"+ socket.id)

    //Getting data on the playerdata socket.


    socket.on("disconnect", function(){

      let roomnum= userswithroom[socket.id]
      delete userswithroom[socket.id]

      io.to(roomnum).emit("leaveThisRoom")
    })

    socket.on("wantToJoinRoom", data =>{
      
      userswithroom[socket.id]= data.roomnumber

      let pid=0
      if(users[data.roomnumber]!= null){

        if(users[data.roomnumber].length <2){
          users[data.roomnumber].push({"username":data.username, "socketid": socket.id, "playerid":2})
          pid=2
        }
        else{
          //TODO: Warning ! Raum ist voll
        }
       
      }
      else{
        users[data.roomnumber]=[]
        users[data.roomnumber].push({"username":data.username, "socketid": socket.id, "playerid":1})
        pid=1
      }

      socket.join(data.roomnumber)

        io.to(socket.id).emit("getmyid", pid)

        io.to(data.roomnumber).emit("roomlist", users[data.roomnumber])

      })


    socket.on("showwinner", winnerid =>{

        const myarray = [...socket.rooms];

        io.to(myarray[1]).emit("receivewinner", winnerid)


    })

    socket.on("thowData", data =>{

      const myarray = [...socket.rooms];

      io.to(myarray[1]).emit("receivedata", data)
  })


    socket.on("endRoom", () =>{

      const roomNumber = [...socket.rooms][1];
      users[roomNumber]=null
      delete userswithroom[socket.id]

      io.to(roomNumber).emit("leaveThisRoom")
    })

    socket.on("liveHistory", (data) =>{
      const roomNumber = [...socket.rooms][1];
      io.to(roomNumber).emit("updatehistory", data)
    })


    socket.on("leaveRoom", () =>{

      const roomNumber = [...socket.rooms][1];
      delete userswithroom[socket.id]
      socket.leave(roomNumber);


  })


  

})