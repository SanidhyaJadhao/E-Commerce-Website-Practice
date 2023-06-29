const inputs = document.querySelectorAll('.news-input-box input');
const labels = document.querySelectorAll('.news-input-box label');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    const label = input.nextElementSibling;
    label.style.marginTop = '-20px';
    label.style.fontSize = '11px';
    label.style.left = 0;
    label.style.color = "grey";
  });

  input.addEventListener('input', () => {
    const label = input.nextElementSibling;
    if (input.validity.valid) {
      label.style.marginTop = '-15px';
      label.style.fontSize = '11px';
      label.style.left = 0;
    label.style.color = "grey";
    } else {
      label.style.marginTop = '-15px';
      label.style.fontSize = '11px';
      label.style.left = 0;
    label.style.color = "grey";
    }
  });
});

  const arrowButton = document.getElementById('news-input-forward-arrow');

  // Get all the ion icons
  var icons = document.querySelectorAll(".tag-close");

  // Attach click event listener to each ion icon
  icons.forEach(function(icon) {
    icon.addEventListener("click", function() {
      // Hide the parent tag div when the ion icon is clicked
      this.parentNode.style.display = "none";
    });
  });

  const h2 = document.querySelector('.name');

  h2.textContent = localStorage.getItem('name');

  var liElements = document.querySelectorAll(".li4");
  var liElementss = document.querySelectorAll(".li4-s");

liElements.forEach(function(liElement) {
  var iconElement = liElement.querySelector("ion-icon");

  liElement.addEventListener("mouseenter", function() {
    var iconName = iconElement.getAttribute("name");
    iconName = iconName.replace("-outline", "");
    iconElement.setAttribute("name", iconName);
  });

  liElement.addEventListener("mouseleave", function() {
    var iconName = iconElement.getAttribute("name");
    if (!iconName.includes("-outline")) {
      iconName += "-outline";
      iconElement.setAttribute("name", iconName);
    }
  });
});

const menudiv = document.querySelector('.menu-div');
const menubtnopen = document.querySelector('.menu');
const menubtnclose = document.querySelector('.menu-back-btn');

menubtnopen.addEventListener('click',()=>{
  menudiv.style.right = "0";
})
menubtnclose.addEventListener('click',()=>{
  menudiv.style.right = "-30%"
});

const elements = document.querySelectorAll('.element');
const fadein = document.querySelectorAll('.fade-in');

menubtnopen.addEventListener('click',(el)=>{
  elements.forEach((el)=>{
    gsap.fromTo(el,{
      x : 30,
      opacity : 0
    },{
      x : 0,
      opacity : 1,
      duration : 0.5,
      stagger : 0.2,
      delay : .5,
      ease : Power3.easeInOut
    });
    }
  );
});