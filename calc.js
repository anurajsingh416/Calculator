//display function
let display =(val)=>{
  document.getElementById('result').value+=val;
  return val;
}
//Main logic
let solve=()=>{
  let x=document.getElementById('result').value;
  let y=eval(x);
  document.getElementById('result').value=y;
  return y;
}
//clear screen
let clearscreen=()=>{
  document.getElementById('result').value='';
}
