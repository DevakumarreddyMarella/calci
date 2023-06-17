// add=()=>{
    var ans=0;
    var s="";
    document.getElementById("add").onclick=function(){
     var a=parseInt(document.getElementById("n1").value);
    // var b=parseInt(document.getElementById("n2").value);
    // console.log(a+b);
    ans=ans+a;
    if(s.length==0){
        s=s+a;
    }
    else{
        s=s+"+"+a;
    }
    document.getElementById("result").textContent=ans;
    document.getElementById("display").textContent=s;


}
// sub=()=>{
    document.getElementById("sub").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
//    var b=parseInt(document.getElementById("n2").value);
//    console.log(a-b);
    ans=ans-a;
    if(s.length==0){
        s=s+a;
    }
    else{
        s=s+"-"+a;
    }
   document.getElementById("result").textContent=ans;
   document.getElementById("display").textContent=s;


}
// mul=()=>{
    document.getElementById("mul").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
//    var b=parseInt(document.getElementById("n2").value);
//    console.log(a*b);
ans=ans*a;
if(s.length==0){
    s=s+a;
}
else{
    s=s+"*"+a;
}
   document.getElementById("result").textContent=ans;
   document.getElementById("display").textContent=s;


}
// div=()=>{
    document.getElementById("div").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
//    var b=parseInt(document.getElementById("n2").value);
//    console.log(a/b);
ans=ans*a;
if(s.length==0){
    s=s+a;
}
else{
    s=s+"/"+a;
}
   document.getElementById("result").textContent=ans;
   document.getElementById("display").textContent=s;

}
function equal(){
    document.getElementById("display").textContent=s;
}