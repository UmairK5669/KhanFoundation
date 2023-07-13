
const form = document.getElementById('my-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform an AJAX request to submit the form
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Success: Do something (e.g., show a success message)
        console.log('Form submitted successfully');
        form.reset();
      } else {
        // Error: Do something (e.g., show an error message)
        console.error('Form submission error');
      }
    }
  };
  xhr.send(formData);
});

var form2 = document.getElementById("my-form2");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form2.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks";
          form2.reset()

        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form2.addEventListener("submit", handleSubmit)

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 50) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#1aff00 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const buttons = doc.querySelectorAll(".overlay__content a");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
});


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

window.addEventListener("scroll", function(){
const header = document.getElementsByClassName('header')[0]
header.classList.toggle("sticky", window.scrollY > 50)
})
