const p = require('./promise.js')


const approveValue = (x)=>{
  console.log(x);
}

const rejectValue = (y)=>{
  console.log(y);
}
p.then((approveValue)=>{
  console.log(approveValue);
}).catch((rejectValue)=>{
  console.log(rejectValue);
})