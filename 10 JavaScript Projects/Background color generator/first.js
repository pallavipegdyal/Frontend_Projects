const parent=document.getElementById("parent");
parent.addEventListener('click',(e)=>
{
console.log(e.target);//we take value of parent by target
const child=e.target;
const body=document.querySelector('body');
body.style.backgroundColor=child.id;

})