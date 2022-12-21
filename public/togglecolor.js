document.getElementById("dartboard").addEventListener("click", (event)=>{
    if(playerid == playerscore.currentplayerid){
            

        if(throws>0){
            if(event.target.id != "dartboard"){
                playerscore.history.push(event.target.id)
                
                playerscore.avg["player"+playerid].throws+=1
                playerscore.avg["player"+playerid].sumscore+= getpointbyid(event.target.id)
                
                syncthrow(playerscore.currentplayerid, playerscore.history, playerscore.avg)
                throws--;

            }

        }


    }
})


document.getElementById("s19").addEventListener("mouseover", ()=>{
    document.getElementById("s19").style.fill= togglecolor
})
document.getElementById("s19").addEventListener("mouseout", ()=>{
    document.getElementById("s19").style.fill= white
})


document.getElementById("s14").addEventListener("mouseover", ()=>{
    document.getElementById("s14").style.fill= togglecolor
})
document.getElementById("s14").addEventListener("mouseout", ()=>{
    document.getElementById("s14").style.fill= black
})

document.getElementById("s4").addEventListener("mouseover", ()=>{
    document.getElementById("s4").style.fill= togglecolor
})
document.getElementById("s4").addEventListener("mouseout", ()=>{
    document.getElementById("s4").style.fill= white
})


document.getElementById("s16").addEventListener("mouseover", ()=>{
    document.getElementById("s16").style.fill= togglecolor
})
document.getElementById("s16").addEventListener("mouseout", ()=>{
    document.getElementById("s16").style.fill= white
})


document.getElementById("s9").addEventListener("mouseover", ()=>{
    document.getElementById("s9").style.fill= togglecolor
})
document.getElementById("s9").addEventListener("mouseout", ()=>{
    document.getElementById("s9").style.fill= white
})


document.getElementById("s7").addEventListener("mouseover", ()=>{
    document.getElementById("s7").style.fill= togglecolor
})
document.getElementById("s7").addEventListener("mouseout", ()=>{
    document.getElementById("s7").style.fill= black
})


document.getElementById("s8").addEventListener("mouseover", ()=>{
    document.getElementById("s8").style.fill= togglecolor
})
document.getElementById("s8").addEventListener("mouseout", ()=>{
    document.getElementById("s8").style.fill= black
})

document.getElementById("s12").addEventListener("mouseover", ()=>{
    document.getElementById("s12").style.fill= togglecolor
})
document.getElementById("s12").addEventListener("mouseout", ()=>{
    document.getElementById("s12").style.fill= black
})

document.getElementById("s1").addEventListener("mouseover", ()=>{
    document.getElementById("s1").style.fill= togglecolor
})
document.getElementById("s1").addEventListener("mouseout", ()=>{
    document.getElementById("s1").style.fill= white
})

document.getElementById("s18").addEventListener("mouseover", ()=>{
    document.getElementById("s18").style.fill= togglecolor
})
document.getElementById("s18").addEventListener("mouseout", ()=>{
    document.getElementById("s18").style.fill= black
})

document.getElementById("s20").addEventListener("mouseover", ()=>{
    document.getElementById("s20").style.fill= togglecolor
})
document.getElementById("s20").addEventListener("mouseout", ()=>{
    document.getElementById("s20").style.fill= black
})

document.getElementById("s5").addEventListener("mouseover", ()=>{
    document.getElementById("s5").style.fill= togglecolor
})
document.getElementById("s5").addEventListener("mouseout", ()=>{
    document.getElementById("s5").style.fill= white
})

document.getElementById("s3").addEventListener("mouseover", ()=>{
    document.getElementById("s3").style.fill= togglecolor
})
document.getElementById("s3").addEventListener("mouseout", ()=>{
    document.getElementById("s3").style.fill= black
})

document.getElementById("s10").addEventListener("mouseover", ()=>{
    document.getElementById("s10").style.fill= togglecolor
})
document.getElementById("s10").addEventListener("mouseout", ()=>{
    document.getElementById("s10").style.fill= black
})

document.getElementById("s17").addEventListener("mouseover", ()=>{
    document.getElementById("s17").style.fill= togglecolor
})
document.getElementById("s17").addEventListener("mouseout", ()=>{
    document.getElementById("s17").style.fill= white
})

document.getElementById("s13").addEventListener("mouseover", ()=>{
    document.getElementById("s13").style.fill= togglecolor
})
document.getElementById("s13").addEventListener("mouseout", ()=>{
    document.getElementById("s13").style.fill= black
})

document.getElementById("s2").addEventListener("mouseover", ()=>{
    document.getElementById("s2").style.fill= togglecolor
})
document.getElementById("s2").addEventListener("mouseout", ()=>{
    document.getElementById("s2").style.fill= black
})


document.getElementById("s6").addEventListener("mouseover", ()=>{
    document.getElementById("s6").style.fill= togglecolor
})
document.getElementById("s6").addEventListener("mouseout", ()=>{
    document.getElementById("s6").style.fill= white
})


document.getElementById("s11").addEventListener("mouseover", ()=>{
    document.getElementById("s11").style.fill= togglecolor
})
document.getElementById("s11").addEventListener("mouseout", ()=>{
    document.getElementById("s11").style.fill= white
})


document.getElementById("s15").addEventListener("mouseover", ()=>{
    document.getElementById("s15").style.fill= togglecolor
})
document.getElementById("s15").addEventListener("mouseout", ()=>{
    document.getElementById("s15").style.fill= white
})

//doubles

document.getElementById("d19").addEventListener("mouseover", ()=>{
    document.getElementById("d19").style.fill= togglecolor
})
document.getElementById("d19").addEventListener("mouseout", ()=>{
    document.getElementById("d19").style.fill= green
})

document.getElementById("d14").addEventListener("mouseover", ()=>{
    document.getElementById("d14").style.fill= togglecolor
})
document.getElementById("d14").addEventListener("mouseout", ()=>{
    document.getElementById("d14").style.fill= red
})

document.getElementById("d4").addEventListener("mouseover", ()=>{
    document.getElementById("d4").style.fill= togglecolor
})
document.getElementById("d4").addEventListener("mouseout", ()=>{
    document.getElementById("d4").style.fill= green
})

document.getElementById("d16").addEventListener("mouseover", ()=>{
    document.getElementById("d16").style.fill= togglecolor
})
document.getElementById("d16").addEventListener("mouseout", ()=>{
    document.getElementById("d16").style.fill= green
})


document.getElementById("d9").addEventListener("mouseover", ()=>{
    document.getElementById("d9").style.fill= togglecolor
})
document.getElementById("d9").addEventListener("mouseout", ()=>{
    document.getElementById("d9").style.fill= green
})


document.getElementById("d7").addEventListener("mouseover", ()=>{
    document.getElementById("d7").style.fill= togglecolor
})
document.getElementById("d7").addEventListener("mouseout", ()=>{
    document.getElementById("d7").style.fill= red
})


document.getElementById("d8").addEventListener("mouseover", ()=>{
    document.getElementById("d8").style.fill= togglecolor
})
document.getElementById("d8").addEventListener("mouseout", ()=>{
    document.getElementById("d8").style.fill= red
})

document.getElementById("d12").addEventListener("mouseover", ()=>{
    document.getElementById("d12").style.fill= togglecolor
})
document.getElementById("d12").addEventListener("mouseout", ()=>{
    document.getElementById("d12").style.fill= red
})

document.getElementById("d1").addEventListener("mouseover", ()=>{
    document.getElementById("d1").style.fill= togglecolor
})
document.getElementById("d1").addEventListener("mouseout", ()=>{
    document.getElementById("d1").style.fill= green
})

document.getElementById("d18").addEventListener("mouseover", ()=>{
    document.getElementById("d18").style.fill= togglecolor
})
document.getElementById("d18").addEventListener("mouseout", ()=>{
    document.getElementById("d18").style.fill= red
})

document.getElementById("d20").addEventListener("mouseover", ()=>{
    document.getElementById("d20").style.fill= togglecolor
})
document.getElementById("d20").addEventListener("mouseout", ()=>{
    document.getElementById("d20").style.fill= red
})

document.getElementById("d5").addEventListener("mouseover", ()=>{
    document.getElementById("d5").style.fill= togglecolor
})
document.getElementById("d5").addEventListener("mouseout", ()=>{
    document.getElementById("d5").style.fill= green
})

document.getElementById("d3").addEventListener("mouseover", ()=>{
    document.getElementById("d3").style.fill= togglecolor
})
document.getElementById("d3").addEventListener("mouseout", ()=>{
    document.getElementById("d3").style.fill= red
})

document.getElementById("d10").addEventListener("mouseover", ()=>{
    document.getElementById("d10").style.fill= togglecolor
})
document.getElementById("d10").addEventListener("mouseout", ()=>{
    document.getElementById("d10").style.fill= red
})

document.getElementById("d17").addEventListener("mouseover", ()=>{
    document.getElementById("d17").style.fill= togglecolor
})
document.getElementById("d17").addEventListener("mouseout", ()=>{
    document.getElementById("d17").style.fill= green
})

document.getElementById("d13").addEventListener("mouseover", ()=>{
    document.getElementById("d13").style.fill= togglecolor
})
document.getElementById("d13").addEventListener("mouseout", ()=>{
    document.getElementById("d13").style.fill= red
})

document.getElementById("d2").addEventListener("mouseover", ()=>{
    document.getElementById("d2").style.fill= togglecolor
})
document.getElementById("d2").addEventListener("mouseout", ()=>{
    document.getElementById("d2").style.fill= red
})


document.getElementById("d6").addEventListener("mouseover", ()=>{
    document.getElementById("d6").style.fill= togglecolor
})
document.getElementById("d6").addEventListener("mouseout", ()=>{
    document.getElementById("d6").style.fill= green
})


document.getElementById("d11").addEventListener("mouseover", ()=>{
    document.getElementById("d11").style.fill= togglecolor
})
document.getElementById("d11").addEventListener("mouseout", ()=>{
    document.getElementById("d11").style.fill= green
})


document.getElementById("d15").addEventListener("mouseover", ()=>{
    document.getElementById("d15").style.fill= togglecolor
})
document.getElementById("d15").addEventListener("mouseout", ()=>{
    document.getElementById("d15").style.fill= green
})

//Triples


document.getElementById("t19").addEventListener("mouseover", ()=>{
    document.getElementById("t19").style.fill= togglecolor
})
document.getElementById("t19").addEventListener("mouseout", ()=>{
    document.getElementById("t19").style.fill= green
})

document.getElementById("t14").addEventListener("mouseover", ()=>{
    document.getElementById("t14").style.fill= togglecolor
})
document.getElementById("t14").addEventListener("mouseout", ()=>{
    document.getElementById("t14").style.fill= red
})

document.getElementById("t4").addEventListener("mouseover", ()=>{
    document.getElementById("t4").style.fill= togglecolor
})
document.getElementById("t4").addEventListener("mouseout", ()=>{
    document.getElementById("t4").style.fill= green
})

document.getElementById("t16").addEventListener("mouseover", ()=>{
    document.getElementById("t16").style.fill= togglecolor
})
document.getElementById("t16").addEventListener("mouseout", ()=>{
    document.getElementById("t16").style.fill= green
})


document.getElementById("t9").addEventListener("mouseover", ()=>{
    document.getElementById("t9").style.fill= togglecolor
})
document.getElementById("t9").addEventListener("mouseout", ()=>{
    document.getElementById("t9").style.fill= green
})


document.getElementById("t7").addEventListener("mouseover", ()=>{
    document.getElementById("t7").style.fill= togglecolor
})
document.getElementById("t7").addEventListener("mouseout", ()=>{
    document.getElementById("t7").style.fill= red
})


document.getElementById("t8").addEventListener("mouseover", ()=>{
    document.getElementById("t8").style.fill= togglecolor
})
document.getElementById("t8").addEventListener("mouseout", ()=>{
    document.getElementById("t8").style.fill= red
})

document.getElementById("t12").addEventListener("mouseover", ()=>{
    document.getElementById("t12").style.fill= togglecolor
})
document.getElementById("t12").addEventListener("mouseout", ()=>{
    document.getElementById("t12").style.fill= red
})

document.getElementById("t1").addEventListener("mouseover", ()=>{
    document.getElementById("t1").style.fill= togglecolor
})
document.getElementById("t1").addEventListener("mouseout", ()=>{
    document.getElementById("t1").style.fill= green
})

document.getElementById("t18").addEventListener("mouseover", ()=>{
    document.getElementById("t18").style.fill= togglecolor
})
document.getElementById("t18").addEventListener("mouseout", ()=>{
    document.getElementById("t18").style.fill= red
})

document.getElementById("t20").addEventListener("mouseover", ()=>{
    document.getElementById("t20").style.fill= togglecolor
})
document.getElementById("t20").addEventListener("mouseout", ()=>{
    document.getElementById("t20").style.fill= red
})

document.getElementById("t5").addEventListener("mouseover", ()=>{
    document.getElementById("t5").style.fill= togglecolor
})
document.getElementById("t5").addEventListener("mouseout", ()=>{
    document.getElementById("t5").style.fill= green
})

document.getElementById("t3").addEventListener("mouseover", ()=>{
    document.getElementById("t3").style.fill= togglecolor
})
document.getElementById("t3").addEventListener("mouseout", ()=>{
    document.getElementById("t3").style.fill= red
})

document.getElementById("t10").addEventListener("mouseover", ()=>{
    document.getElementById("t10").style.fill= togglecolor
})
document.getElementById("t10").addEventListener("mouseout", ()=>{
    document.getElementById("t10").style.fill= red
})

document.getElementById("t17").addEventListener("mouseover", ()=>{
    document.getElementById("t17").style.fill= togglecolor
})
document.getElementById("t17").addEventListener("mouseout", ()=>{
    document.getElementById("t17").style.fill= green
})

document.getElementById("t13").addEventListener("mouseover", ()=>{
    document.getElementById("t13").style.fill= togglecolor
})
document.getElementById("t13").addEventListener("mouseout", ()=>{
    document.getElementById("t13").style.fill= red
})

document.getElementById("t2").addEventListener("mouseover", ()=>{
    document.getElementById("t2").style.fill= togglecolor
})
document.getElementById("t2").addEventListener("mouseout", ()=>{
    document.getElementById("t2").style.fill= red
})


document.getElementById("t6").addEventListener("mouseover", ()=>{
    document.getElementById("t6").style.fill= togglecolor
})
document.getElementById("t6").addEventListener("mouseout", ()=>{
    document.getElementById("t6").style.fill= green
})


document.getElementById("t11").addEventListener("mouseover", ()=>{
    document.getElementById("t11").style.fill= togglecolor
})
document.getElementById("t11").addEventListener("mouseout", ()=>{
    document.getElementById("t11").style.fill= green
})


document.getElementById("t15").addEventListener("mouseover", ()=>{
    document.getElementById("t15").style.fill= togglecolor
})
document.getElementById("t15").addEventListener("mouseout", ()=>{
    document.getElementById("t15").style.fill= green
})


//bullseye

document.getElementById("Bull").addEventListener("mouseover", ()=>{
    document.getElementById("Bull").style.fill= togglecolor
})
document.getElementById("Bull").addEventListener("mouseout", ()=>{
    document.getElementById("Bull").style.fill= red
})

document.getElementById("Outer").addEventListener("mouseover", ()=>{
    document.getElementById("Outer").style.fill= togglecolor
})
document.getElementById("Outer").addEventListener("mouseout", ()=>{
    document.getElementById("Outer").style.fill= green
})
