let data =
[
{
"id": "job_001",
"name": "Console Hello",
"runAt": "2025-07-15T11:41:00+05:30",
"action": "log",
"params": {
"message": "Hello from Job 001" }
},
{
"id": "job_002",
"name": "Add Numbers",
"runAt": "2025-07-15T19:12:00+05:30",
"action": "calc",
"params": { "a": 7, "b": 13 }
},
{
"id": "job_003",
"name": "Trigger Alert",
"runAt": "2025-07-15T19:14:00+05:30",
"action": "notify",
"params": { "text": "This is a notification!" }
      }
]






let para = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let para3 = document.querySelector(".para3");

let input = document.getElementById("time");
let input2 = document.getElementById("time2");
let input3 = document.getElementById("time3");

let output = document.querySelector(".status");
let output2 = document.querySelector(".status1");
let output3 = document.querySelector(".status2");

para.innerHTML = data[0].name;
para2.innerHTML = data[1].name;
para3.innerHTML = data[2].name;

let times = new Date(data[0].runAt);
let times2 = new Date(data[1].runAt);
let times3 = new Date(data[2].runAt);
console.log(times)

let runAt = times.toTimeString().slice(0,5);
console.log(runAt);
input.value = runAt;

 let runAt2 = times2.toTimeString().slice(0,5);
 input2.value = runAt2;

 let runAt3 = times3.toTimeString().slice(0,5);
input3.value = runAt3;


setInterval(() => {
  


// globally //
let newDate = new Date();
console.log(newDate)
let compeltedTime = newDate.toTimeString().slice(0,5);
console.log(compeltedTime);



 


let selectedTime =  input.value;
let currentTime =   runAt;

 if(selectedTime == compeltedTime)
{
output.innerHTML = "Completed";
}
else if(selectedTime > compeltedTime ) 
{
output.innerHTML = "Scheduling";
}

else  if(selectedTime >= currentTime || selectedTime <= currentTime)
{
output.innerHTML =  "Skipped(Past time)";
}





let selectedTime1 = input2.value;
console.log(selectedTime);
let currentTime1 =   runAt2;

if(selectedTime1 == compeltedTime)
{
output2.innerHTML = "Completed";
}
else if(selectedTime1 > compeltedTime  ) 
{
output2.innerHTML = "Scheduling";
}

else if(selectedTime1 >= currentTime1 || selectedTime1 <= currentTime1)
{
output2.innerHTML = "Skipped(Past time)";
}






let selectedTime2 = input3.value;
let currentTime2 =  runAt3;

 if(selectedTime2 == compeltedTime)
{
output3.innerHTML = "Completed";
}
else  if(selectedTime2 > compeltedTime) 
{
output3.innerHTML = "Scheduling";
}

else if(selectedTime2 >= currentTime2 || selectedTime2 <= currentTime2 )
{
output3.innerHTML = "Skipped(Past time)";
}

}, 1000);

