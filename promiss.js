function savetoDb( data){
    return new Promise( (resolve, reject) => {
    let internetSpeed = Math.floor(Math.random)*10 +10;
    if (internetSpeed > 4){
        resolve("succes: data is save ");
    }else{
        reject("failure:week connection");
    }
    });
}
   savetoDb("apana collegr")
   .then(() =>{
    console.log("data1 is save");
    return savetoDb("aman singh")
    })
    .then(()=>{
    console.log("data2 is not save")
    return savetoDb("shardhakhapra")
    })
    .then(()=>{
    console.log("data3 is save ");
    })
    .catch(()=>{
    console.log("data is not save");
    })