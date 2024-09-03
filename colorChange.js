let h1 = document.querySelector("h1");
function colorChange( color, delay){
return new Promise((resolve,reject)=>{
setTimeout(() => {
h1.style.color= color   ;
resolve ("color change!")
},delay);
})
}
colorChange("red",1000)
.then(()=>{
console.log("red color was completed");
return colorChange("orange",1000);
})
.then(()=>{
    console.log("orange color was change");
    return colorChange("yellow",1000);
})
.then(()=>{
    console.log("yellow was change");
})