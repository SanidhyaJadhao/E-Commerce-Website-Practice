const inputs = document.querySelectorAll('.input-box input');
const labels = document.querySelectorAll('.input-box label');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    const label = input.nextElementSibling;
    label.style.marginTop = '-15px';
    label.style.fontSize = '10px';
  });

  input.addEventListener('input', () => {
    const label = input.nextElementSibling;
    if (input.validity.valid) {
      label.style.marginTop = '-15px';
      label.style.fontSize = '11px';
    } else {
      label.style.marginTop = '';
      label.style.fontSize = '';
    }
  });
});

  const input1 = document.querySelector('#input1');
  const input2 = document.querySelector('#input2');
  const input3 = document.querySelector('#input3');
  const submitButton = document.getElementById('submitButton');

  // Add event listeners to the input fields
  input1.addEventListener('input', handleInputChange);
  input2.addEventListener('input', handleInputChange);
  input3.addEventListener('input', handleInputChange);
  
  function handleInputChange() {
    const isAllFilled = input1.value !== '' && input2.value !== '' && input3.value !== '';
  
    if (isAllFilled) {
      gsap.to(submitButton, { backgroundColor: '#111727', color: 'white', border: '1px solid #111727', transition: '0.01s' });
    } else {
      gsap.to(submitButton, { backgroundColor: 'initial', color: 'initial', border: '1px solid #111727', transition: '0.3s' });
    }
  }
  
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission if needed
  
    const name = input1.value;
    const email = input2.value;
    const pass = input3.value;
  
    if (name !== '' && email !== '' && pass !== '') {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
  
      // Redirect or perform any other actions after setting local storage
      location.href = "home.html";
    }
  });

const logo1 = document.getElementById('logo-black');
const logo2 = document.getElementById('logo-white');

gsap.fromTo([logo1,logo2],{
  opacity : 0
},{
  duration : "1",
  opacity : 0,
});

const inputbox1 = document.querySelector('#input-box1');
const inputbox2 = document.querySelector('#input-box2');
const inputbox3 = document.querySelector('#input-box3');

gsap.fromTo([inputbox1,inputbox2,inputbox3],{
  opacity : 0,
  transform : "translateY(50px)",
},{
  duration : 1,
  opacity : 1,
  stagger : 0.1,
  transform : "translateY(-10px)",
  delay : 4.5,
})

const google = document.getElementById('google');

gsap.fromTo(google,{
  opacity : 0,
  marginTop : "30px",
},{
  duration : 1,
  opacity : 1,
  delay : 4,
  marginTop : 0,
  ease : Power4.easeInOut,
});

gsap.registerPlugin(TextPlugin);

const h1 = document.getElementById('h1');

gsap.fromTo(h1,{
  marginTop: "100px",
  text: "",
  opacity : 0
}, {
  duration: 2,
  marginTop: "60px",
  opacity: 1,
  text: "Welcome To Cara!",
  ease : Power4.easeInOut,
});
const h1para = document.getElementById('h1-para');

gsap.fromTo(h1para,{
  text: "",
},{
  duration: 2,
  delay: 2,
  text: "Let's get you signed in!",
});

gsap.fromTo(submitButton,{
  opacity : 0,
  transform : "translateY(30px)",
},{
  duration : 1,
  opacity : 1,
  marginTop : 0,
  transform : "translateY(-10px)",
  delay : 5.5,
  ease : Power4.easeInOut,
});

const account = document.querySelector('.account')

gsap.fromTo(account,{
  opacity : 0,
  transform : "translateY(30px)",
},{
  duration : 1,
  opacity : 1,
  marginTop : 0,
  transform : "translateY(-10px)",
  delay : 6.5,
  ease : Power4.easeInOut,
});

const left = document.querySelector('.left');
const right = document.querySelector('.right');

gsap.fromTo(left,{
  scale : 1.1,
  transform : "TranslateX(230px)",
},{
  duration : 1.5,
  scale : 1,
  transform : "TranslateX(0px)",
  ease : Power4.easeInOut,
  delay : 7.5
});
gsap.fromTo(right,{
  transform : "TranslateX(100%)"
},{
  duration : 1,
  transform : "TranslateX(0%)",
  delay : 7.7,
  ease : Power4.easeInOut
})
gsap.fromTo(logo1,{
  opacity : 0,
},{
  duration : 1,
  opacity : 1,
  delay : 8
});