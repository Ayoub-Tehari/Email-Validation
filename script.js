function isValid (e) {
    return /[a-zA-Z0-9\-\.]{1,50}@[a-zA-Z0-9\-\.]{1,50}\.[a-zA-Z]{2,7}$/.test(e);
}

const emailEle = document.getElementById("email");
const message = document.getElementById('message');
const marq = document.createElement('strong');

message.appendChild(marq); 

emailEle.addEventListener('input', function(event){
  
    if (isValid(event.target.value)){
        marq.innerHTML = 'This Email is valid';
        marq.classList.add('valid-email-class');
        marq.classList.remove('no-valid-email-class');
    } else {
        marq.innerHTML = "Your email should follow : userName@domain";
        marq.classList.remove('valid-email-class');
        marq.classList.add('no-valid-email-class');
    }
})