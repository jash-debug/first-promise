const p = new Promise((resolve,reject)=>{
  let a=1+1;
  if(a==3){
    resolve("true");
  }
  else{
    reject("false");
  }
})

module.exports=p;