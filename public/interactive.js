let maxleg= 1;
let maxset = 1;
let maxscore= 501;
let playerid=1;
let throws=3;
let togglecolor= "violet";
let white = "#F7E9CD";
let black = "#000000";
let green="#4F9962";
let red = "#ED3737";
let playerthrows=0;
let playeroverallscore=0;

let playerscore= {"player1":maxscore,
                    "player2":maxscore,
                    "player1leg":0,
                    "player1set":0,
                    "player2leg":0,
                    "player2set":0,
                    "currentplayerid":1,
                    "lastplayer1score":0,
                    "lastplayer2score":0,
                    "history": [],
                    "avg":{"player1":{"throws":0,
                                   "sumscore":0},
                            "player2":{"throws":0,
                                   "sumscore":0}},

                    
                }
let setplayerid= function(id){
    playerid=id
}

let setplayserscores = function(data){
        playerscore.player1= data.player1score
        playerscore.player2= data.player2score
        playerscore.player1leg= data.player1leg
        playerscore.player2leg= data.player2leg
        playerscore.player1set= data.player1set
        playerscore.player2set= data.player2set
        playerscore.currentplayerid= data.currentplayerid
        playerscore.lastplayer1score = data.lastplayer1score
        playerscore.lastplayer2score = data.lastplayer2score
        playerscore.history = data.history
        playerscore.avg = data.avg

}



let start = function(){

    if(document.getElementById("inlineRadio1").checked){
        maxscore=301
        playerscore.player1=maxscore
        playerscore.player2=maxscore
    }
    else if(document.getElementById("inlineRadio2").checked){
        maxscore=501
        playerscore.player1=maxscore
        playerscore.player2=maxscore
    }
    else{
        maxscore=701
        playerscore.player1=maxscore
        playerscore.player2=maxscore
    }

    let firstplayer= document.getElementById("inputEmail1").value
    let secplayer= document.getElementById("inputEmail2").value

    document.getElementById("namePlayer2").innerHTML= secplayer
    document.getElementById("namePlayer1").innerHTML=firstplayer

    let spanid= "p"+1+"darts"

    document.getElementById(spanid+1).style.display="inline"
    document.getElementById(spanid+2).style.display="inline"
    document.getElementById(spanid+3).style.display="inline"

    spanid= "p"+2+"darts"

    document.getElementById(spanid+1).style.display="inline"
    document.getElementById(spanid+2).style.display="inline"
    document.getElementById(spanid+3).style.display="inline"


    document.getElementById("currenthrowpoints2").innerHTML=0
    document.getElementById("currenthrowpoints1").innerHTML=0

    playerscore.currentplayerid=1

    document.getElementById("playercards").style.display="block"
    document.getElementById("menu").style.display="none"

    setup()
}


let setup = function(){

    if(playerid == playerscore.currentplayerid){
        document.getElementById("readyButton").disabled =false;

    }else{
        document.getElementById("readyButton").disabled =true;
    }

    let spanid= "p"+playerscore.currentplayerid+"darts"

    document.getElementById(spanid+1).style.display="inline"
    document.getElementById(spanid+2).style.display="inline"
    document.getElementById(spanid+3).style.display="inline"

    updateplayerscore()

    if(playerscore.currentplayerid==1){
        document.getElementById("dot1").style.display="inline"
        document.getElementById("dot2").style.display="none"

        document.getElementById("playerCard1").style.backgroundColor= green
        document.getElementById("playerCard2").style.backgroundColor="grey"
    

        document.getElementById("history1").innerHTML=""
        document.getElementById("currenthrowpoints1").innerHTML=0

    }
    else{
        document.getElementById("dot1").style.display="none"
        document.getElementById("dot2").style.display="inline"

        document.getElementById("playerCard2").style.backgroundColor= green
        document.getElementById("playerCard1").style.backgroundColor="grey"

        document.getElementById("history2").innerHTML=""
        document.getElementById("currenthrowpoints2").innerHTML=0
    }


}


let closeseassion = function(){
    

    document.getElementById("playercards").style.display="none"
    document.getElementById("menu").style.display="block"

    document.getElementById("dot1").style.display="none"
    document.getElementById("dot2").style.display="none"


    let spanid= "p"+1+"darts"

    document.getElementById(spanid+1).style.display="none"
    document.getElementById(spanid+2).style.display="none"
    document.getElementById(spanid+3).style.display="none"

    spanid= "p"+2+"darts"

    document.getElementById(spanid+1).style.display="none"
    document.getElementById(spanid+2).style.display="none"
    document.getElementById(spanid+3).style.display="none"

    document.getElementById("history1").innerHTML=""
    document.getElementById("history2").innerHTML=""
    
    document.getElementById("currenthrowpoints2").innerHTML=""
    document.getElementById("currenthrowpoints1").innerHTML="0"

    document.getElementById("avg1").innerHTML="0"
    document.getElementById("avg2").innerHTML="0"

    playerscore.avg= {"player1":{"throws":0,
                                 "sumscore":0},
                      "player2":{"throws":0,
                                "sumscore":0}}


}

let updateplayerscore = function(){
    document.getElementById("punkteplayer1").innerText=playerscore.player1
    document.getElementById("punkteplayer2").innerText=playerscore.player2

    document.getElementById("setplayer1").innerText=playerscore.player1set
    document.getElementById("setplayer2").innerText=playerscore.player2set

    document.getElementById("legplayer1").innerText=playerscore.player1leg
    document.getElementById("legplayer2").innerText=playerscore.player2leg
}


let undo= function(){
    //subtract every history shot 
    let lastscoreid = playerscore.history.pop();
    throws++;

    playerscore.avg["player"+playerid].throws-=1
    playerscore.avg["player"+playerid].sumscore-= getpointbyid(lastscoreid)


    syncthrow(playerscore.currentplayerid, playerscore.history, playerscore.avg)
}

let setthrow= function(currentplayerid, history, avg ){

    setup()
    let tmp=""
    for(let i=0; i< history.length;i++){
        tmp+= history[i]+" "
    }

    document.getElementById("history"+currentplayerid).innerHTML=tmp
    let spanid= "p"+currentplayerid+"darts"

    document.getElementById(spanid+1).style.display="inline"
    document.getElementById(spanid+2).style.display="inline"
    document.getElementById(spanid+3).style.display="inline"

    for(let i=history.length; i>0;i--){
        let tmpid= spanid+i;
        document.getElementById(tmpid).style.display="none"
    }

    let thownpoints= calculatecurrentthrowpoints(history)
    document.getElementById("currenthrowpoints"+currentplayerid).innerText= thownpoints

    //Average set 

    //playerscore.avg["player"+currentplayerid].throws= avg["player"+currentplayerid].throws +1
    //playerscore.avg["player"+currentplayerid].sumscore= avg["player"+currentplayerid].sumscore +thownpoints




    setavg(currentplayerid, avg)

    
}

let showwinnerfront= function(winnerid){
    document.getElementById("currenthrowpoints"+winnerid).innerHTML="WINNER"
    showwinner(winnerid)
}


let pusheverything = function(){
    let points= calculatecurrentthrowpoints(playerscore.history)
    let currentpoints = ((playerscore.currentplayerid==1)? playerscore.player1 : playerscore.player2)

    // in case of overthrow

    if(currentpoints-points<0){
        if(playerscore.currentplayerid ==1){
            playerscore.player1= playerscore.player1;
            playerscore.currentplayerid=2
        }
        else{
            playerscore.player2= playerscore.player2;
            playerscore.currentplayerid=1
        }

        
    }else if(currentpoints-points==0){
        

        if(playerscore.currentplayerid ==1){
            playerscore.player1= playerscore.player1-points;
            playerscore.currentplayerid=2

            if( playerscore.player1leg+1 < maxleg){
                playerscore.player1leg +=1
            }
            else{
                
                if( playerscore.player1set+1 < maxset){
                    playerscore.player1set+=1
                    playerscore.player1leg=0
                    playerscore.player2leg=0
                }
                else{
                    showwinnerfront(1)
                }
               
                
            }
            playerscore.player1=maxscore
            playerscore.player2=maxscore
        }
        else{


            playerscore.player2= playerscore.player2-points;
            playerscore.currentplayerid=1

            if( playerscore.player2leg+1 < maxleg){
                playerscore.player2leg +=1
            }
            else{
                
                if( playerscore.player2set+1 < maxset){
                    playerscore.player2set+=1
                    playerscore.player2leg=0
                    playerscore.player1leg=0
                }
                else{
                    showwinnerfront(2)
                }
               
                
            }
            playerscore.player1=maxscore
            playerscore.player2=maxscore


        }





    }else{
        if(playerscore.currentplayerid ==1){
            playerscore.player1= playerscore.player1-points;
            playerscore.currentplayerid=2
        }
        else{
            playerscore.player2= playerscore.player2-points;
            playerscore.currentplayerid=1
        }
    }

    throws=3
    let data = {"player1score": playerscore.player1,
                "player2score": playerscore.player2,
                "player1leg":playerscore.player1leg,
                "player2leg": playerscore.player2leg,
                "player1set": playerscore.player1set,
                "player2set": playerscore.player2set,
                "currentplayerid":  playerscore.currentplayerid,
                "history":  playerscore.history,
                "lastplayer1score": playerscore.lastplayer1score,
                "lastplayer2score":  playerscore.lastplayer2score,
                "history": [],
                "avg":{ "player1":{"throws":playerscore.avg.player1.throws,
                                    "sumscore":playerscore.avg.player2.sumscore},
                        "player2":{"throws":playerscore.avg.player2.throws,
                                    "sumscore":playerscore.avg.player2.sumscore}
                        }
    }

    pushThrowdata(data)

    setup()


}


let joinHandler = function(){

    let roomnumber= document.getElementById("roomNumber").value

    let username= document.getElementById("nameInput").value

    document.getElementById("displayroomnum").innerHTML= roomnumber

    joinroomHandler(roomnumber,username)

    start()

}

let setusername = function(username, pos){
    document.getElementById("namePlayer"+pos).innerHTML= username

}

let setavg = function(playerid, avg){

    let avg2 = calcavg(    avg["player"+playerid].sumscore,     avg["player"+playerid].throws)




    document.getElementById("avg"+playerid).innerHTML= avg2
}


let syncthrow= (playerid, history, avg)=>{
    //set local -> maybe better to call everyone of the room by the server
    //setthrow(playerid, history, avg)
    //push to server
    liveHistory(playerid, history, avg)

    //Fill in information

    //call server to update avg


}



$(document).ready( function(){
    $("#dartboard").click( function(evt){
        if(playerid == playerscore.currentplayerid){
            

            if(throws>0){
                if(evt.target.id != "dartboard"){
                    playerscore.history.push(evt.target.id)
                    
                    playerscore.avg["player"+playerid].throws+=1
                    playerscore.avg["player"+playerid].sumscore+= getpointbyid(evt.target.id)
                    
                    syncthrow(playerscore.currentplayerid, playerscore.history, playerscore.avg)
                    throws--;

                }

            }


        }
           
        
           
    });

    $("#s19").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );
    $("#s14").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );
    $("#s4").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );
    $("#s16").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );
    $("#s9").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );
    $("#s7").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );
    $("#s8").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );
    $("#s12").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );
    $("#s1").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );
    $("#s18").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );
    $("#s20").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );
    $("#s5").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );
    $("#s3").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );
    $("#s10").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );

    $("#s17").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );

    $("#s13").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );

    $("#s2").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",black);
        }   
    );

    $("#s6").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );

    $("#s11").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );
    
    $("#s15").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",white);
        }   
    );


    //Doubles


    
    $("#d19").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#d14").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#d4").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#d16").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#d9").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#d7").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#d8").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#d12").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#d1").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#d18").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#d20").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#d5").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#d3").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#d10").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );

    $("#d17").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );

    $("#d13").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );

    $("#d2").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );

    $("#d6").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );

    $("#d11").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    
    $("#d15").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );


    //triples

    
    $("#t19").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#t14").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#t4").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#t16").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#t9").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#t7").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#t8").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#t12").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#t1").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#t18").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#t20").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#t5").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    $("#t3").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );
    $("#t10").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );

    $("#t17").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );

    $("#t13").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );

    $("#t2").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );

    $("#t6").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );

    $("#t11").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );
    
    $("#t15").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );

    //bullseye 

    $("#Bull").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",red);
        }   
    );

    $("#Outer").hover( 
        
        function(){
            $(this).css("fill",togglecolor);
        },
        function(){
            $(this).css("fill",green);
        }   
    );


});