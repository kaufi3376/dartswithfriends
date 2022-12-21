const socket = io("http://localhost:3000")
//const socket = io()


let roomNum=0
//Receive data                        



socket.on("receivedata", data =>{
    setplayserscores(data)
    setup()
})





socket.on("getmyid", id =>{
    setplayerid(id)
})

socket.on("leaveThisRoom", () =>{
    socket.emit("leaveRoom");
    closeseassion();
})

socket.on("updatehistory", (data) =>{
    setthrow(data.playerid, data.history, data.avg)
    
})


socket.on("receivewinner", (winnerid) =>{
    
    showwinnerfront(winnerid)
})

socket.on("roomlist", roomlist =>{
    //...calculation etc...
    //send to server
    let firstusername= roomlist[0].username
    setusername(firstusername,1)



    let secusername= ""
    if (roomlist.length >1){
        secusername=roomlist[1].username
        setusername(secusername,2)

    }
    
})





const joinroomHandler = (roomnumber, username)=>{
    roomNum=roomnumber
    socket.emit("wantToJoinRoom", {"roomnumber": roomnumber,
                                    "username": username
    });

}

const leaveromHandler = ()=>{
    socket.emit("endRoom");

}

const liveHistory = (playerid, history, avg)=>{
    socket.emit("liveHistory", {"playerid":playerid, "history":history, "avg":avg});

}

const showwinner =(winnerid)=>{
    socket.emit("showwinner", winnerid);

}


const pushThrowdata = (data)=>{

    socket.emit("thowData", data)
}


