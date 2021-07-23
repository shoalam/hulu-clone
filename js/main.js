const loginModal = document.querySelector('.login-modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close-btn');


loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    loginModal.style.display = "block";
})

closeBtn.addEventListener('click', function () {
    loginModal.style.display = "none";
})
