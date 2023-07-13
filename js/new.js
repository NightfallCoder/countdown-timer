const endDate = "31 July 2023 00:00 AM"
document.getElementById("enddate").innerHTML=endDate;
const inputs = document.querySelectorAll("input")
const clock =()=>{
    const end =new Date(endDate); //time at end date
    const now = new Date() //time of today or recent time
    const diff =(end-now)/1000; //seconds
    
    if(diff<0) return;//console.log(diff);//milliesecond from second converted
    //convert into Days
    inputs[0].value=Math.floor(diff/3600/24);//days
    inputs[1].value=Math.floor(diff/3600)%24;//hours
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

}
clock();
setInterval(
    ()=>{
        clock()
    },
    1000 //every second call the clock function
)