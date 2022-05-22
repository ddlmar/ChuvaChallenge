const navMenu = document.querySelectorAll('#menu > *');
const createBtn = document.querySelector('.topic-btn');
const createTopic = document.querySelector('.topic-container');
const submitBtn = document.querySelector('.submit-button');
const submitTopic = document.querySelector('.submit-box');
const sendBtn = document.querySelector('.send-btn-box');
const sendTopic = document.querySelector('.send-box');


navMenu[4].classList.add('current-page');

const changePage = ({ target }) => {
    navMenu.forEach(option => option.classList.remove('current-page'));
    target.classList.add('current-page');
}

createBtn.onclick = () => {
    createTopic.classList.add('hidden');
    submitTopic.classList.remove('hidden');
    
}

submitBtn.onclick = () => {
    submitTopic.classList.add('hidden');
    sendTopic.classList.remove('hidden');
}

sendBtn.onclick = () => {
    sendTopic.classList.add('hidden');
    submitTopic.classList.remove('hidden');
}






navMenu.forEach(option => option.addEventListener('click', changePage));
