const firebaseConfig = {
  apiKey: "AIzaSyCZU3lD7Y6BuRF9iJu7H4POOZOM0H0B8OM",
  authDomain: "musmanjs.firebaseapp.com",
  databaseURL: "https://musmanjs-default-rtdb.firebaseio.com",
  projectId: "musmanjs",
  storageBucket: "musmanjs.appspot.com",
  messagingSenderId: "371778779055",
  appId: "1:371778779055:web:4609d0afcf42153da3a15a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


let getValue = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (name.value === "") {
    alert('Please write name');
  }

  else if (email.value === "") {
    alert('Please write email');
  }

  else if (message.value === "") {
    alert('Please enter message')
  }

  else {
    let obj = {
      name: name.value,
      email: email.value,
      message: message.value
    }


    Swal.fire({
      title: "Your Message has Sent!",
      text: "I will response you soon.",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
      }
    });

    firebase.database().ref('user-information').push(obj);
    name.value = ""
    email.value = ""
    message.value = ""
  }
}


document.addEventListener("DOMContentLoaded", function () {
  function toggleOffcanvas() {
    document.getElementById('toggleButton').click();
  }


  function attachClickListener() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', toggleOffcanvas);
    });
  }

  if (window.innerWidth <= 991) {
    attachClickListener();
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth <= 991) {
      attachClickListener();
    } else {
      var navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(function (navLink) {
        navLink.removeEventListener('click', toggleOffcanvas);
      });
    }
  });
});

