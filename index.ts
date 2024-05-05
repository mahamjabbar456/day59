// While Loop
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

// Do while loop
let j = 1;
do{
    console.log(`Print 1 to 5 counting using do while loop ${j}`);
    j++;
}
while(j<=5);

// For Loop
console.log(`Print 1 to 5 counting using for loop`);
for(let i = 0;i<=5;i++)  console.log(i);

// Break 
console.log("Break")
for(let i = 0;i<=5;i++){
    if(i==3)  break;
    console.log(i);
}  

// Continue
console.log("Continue")
for(let i = 0;i<=5;i++){
    if(i==3)  continue;
    console.log(i);
}  