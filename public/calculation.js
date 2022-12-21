let calculatecurrentthrowpoints = function(history){
    result=0;
    for(let i=0; i< history.length; i++)
    {
        result+=getpointbyid(history[i])
    }
    return result;
}

let getpointbyid = function(id){
    if(id=="miss"){
        return 0
    }
    else if(id=="Bull"){
        return 50
    }
    else if(id=="Outer"){
        return 25
    }
    else{

        let multiplier=1
        let rest= id.slice(1, id.length)
        let rige= id[0]
        if (rige=="t"){ multiplier=3}
        else if(rige=="d"){multiplier=2}
        let zahl= parseInt(rest)
        return multiplier*zahl
    }

}

let calcavg = (sum, trys)=>{
    if(trys==0){
        return 0
    }
    else{
        let tmp = (sum/trys)*3
        return parseFloat(tmp.toFixed(2))
    }
}