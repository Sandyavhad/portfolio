// Navbar background on scroll

window.addEventListener("scroll", function () {

```
const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {

    navbar.style.background = "rgba(2,6,23,0.95)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";

} else {

    navbar.style.background = "rgba(7,17,31,.75)";
    navbar.style.boxShadow = "none";
}
```

});

// Active menu highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
    }

});
```

});

// Typing effect

const text = [
"Java Developer",
"Spring Boot Developer",
"REST API Expert",
"Microservices Developer"
];

let count = 0;
let index = 0;

(function type() {

```
if (count === text.length) {
    count = 0;
}

let currentText = text[count];
let letter = currentText.slice(0, ++index);

const subtitle = document.querySelector(".hero-subtitle");

if (subtitle) {
    subtitle.textContent = letter;
}

if (letter.length === currentText.length) {

    count++;
    index = 0;

    setTimeout(type, 1500);

} else {

    setTimeout(type, 80);
}
```
contactForm.addEventListener("submit", function(e){

```
e.preventDefault();

document.getElementById("nameError").textContent = "";
document.getElementById("emailError").textContent = "";
document.getElementById("messageError").textContent = "";

let isValid = true;

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

const nameRegex = /^[A-Za-z ]{3,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!nameRegex.test(name)){
    document.getElementById("nameError").textContent =
    "Enter a valid name (Example: Suresh)";
    isValid = false;
}

if(!emailRegex.test(email)){
    document.getElementById("emailError").textContent =
    "Enter a valid email (Example: suresh14@gmail.com)";
    isValid = false;
}

if(message.length < 50){
    document.getElementById("messageError").textContent =
    "Message must be at least 50 characters.";
    isValid = false;
}
else if(message.length > 200){
    document.getElementById("messageError").textContent =
    "Message cannot exceed 200 characters.";
    isValid = false;
}

if(isValid){

    document.getElementById("successMsg")
        .classList.remove("d-none");

    contactForm.reset();

    setTimeout(()=>{
        document.getElementById("successMsg")
            .classList.add("d-none");
    },3000);
}
```

});

})();
