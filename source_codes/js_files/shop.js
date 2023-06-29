
const menudiv = document.querySelector('.menu-div');
const menuopenbtn = document.querySelector('.menu');
const menuclosebtn = document.querySelector('.menu-back-icon');

menuopenbtn.addEventListener('click',()=>{
  menudiv.style.right = 0;
});
menuclosebtn.addEventListener('click',()=>{
  menudiv.style.right = "-30%";
}
);

