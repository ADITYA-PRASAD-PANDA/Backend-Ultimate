// Arrays
  
//1.forEach
var arr= [1,2,3,4];
arr.forEach(function (val){
  console.log(val + " hi"); 
})

//2.Map - similar to forEach but difference hauchi ki map return kariba new array
var new_arr=arr.map(function(val){
  return val+12;
})
console.log(new_arr);

//3.Filter - similar to Map but eithi return true karile hin new_arr re store haba nahale habani
var nw_arr=arr.filter(function(val){
  if(val>2){return true;}
  else{return false;}
})
console.log(nw_arr);

//4.Find - similar to forEach but it will return the first element searched
var arr1=[1,2,3,4,2]
ans=arr1.find(function(val){
  if(val == 2) {return val;}
})
console.log(ans)

//5.indexOf
console.log(arr1.indexOf(2))


//----------------------------------------------------------------
//Objects- Almost everything is objects(Key-value pairs)
var obj={
  name:"Aditya"
}
console.log(obj.name)
console.log(obj['name'])

obj.name = "Rohan"
//To freeze any value in the object
console.log(Object.freeze(obj.name))

//----------------------------------------------------------------
//Functions
function abcd()
{
  return "hello world";
}
var a = abcd();
console.log(a)

//----------------------------------------------------------------
//Asyn JavaScript
async function abcde(){
  await fetch(`https://randomuser.me/api/`)
}
abcde();


