const navMenu = document.querySelectorAll('#menu > *');
const createBtn = document.querySelector('.topic-btn');
const createTopic = document.querySelector('.topic-container');
const submitBtn = document.querySelector('.submit-button');
const submitTopic = document.querySelector('.submit-box');
const sendBtn = document.querySelector('.send-btn-box');
const sendTopic = document.querySelector('.send-box');
const mainContainer = document.querySelector('.content-container');
const responseContainer = document.querySelector('.response-box');
const subjectContainer = document.querySelector('.subject-box');
const openText = document.querySelector('#open-text');
const closeText = document.querySelector('#close-text');
const postList = document.querySelectorAll('.email-box');
const textIncomplete = document.querySelector('.resume-text')
const textComplete = document.querySelector('.resume-text-complete')

navMenu[4].classList.add('current-page');

const addNewPost = ()  => {

    const titleInput = document.querySelector('.subject-area')
    const contentInput = document.querySelector('.content-area')
    const postContainer = document.querySelector('.posts')
    const newPost = postList[0].querySelector('.email-container').cloneNode(true)
    
    newPost.querySelector('.email-title').innerText = titleInput.value
    newPost.querySelector('.email-author').innerText = "Alguem"
    newPost.querySelector('.email-question').innerText = contentInput.value

    const emailBox = document.createElement('div')
    emailBox.classList.add('email-box')
    emailBox.appendChild(newPost)

    postContainer.appendChild(emailBox)
    titleInput.value = ''
    contentInput.value = ''
}


const changePage = ({ target }) => {
    navMenu.forEach(option => option.classList.remove('current-page'));
    target.classList.add('current-page');
    if(navMenu[4] != target){
        mainContainer.classList.add('blur-page')
    }
    else
    {
        mainContainer.classList.remove('blur-page')
    }
}

createBtn.onclick = () => {
    createTopic.classList.add('hidden');
    submitTopic.classList.remove('hidden');
    submitTopic.classList.add('fade-in');
}

submitBtn.onclick = () => {
    submitTopic.classList.add('hidden');
    sendTopic.classList.remove('hidden');
    sendTopic.classList.add('fade-in');
    addNewPost()
}

sendBtn.onclick = () => {
    sendTopic.classList.add('hidden');
    submitTopic.classList.remove('hidden');
}

postList.forEach(post=> post.onclick = () =>{
    const responseList = document.querySelectorAll('.response-box')
    responseList.forEach(box => {
        
        if (box.getAttribute('class') == 'response-box hidden') {
            box.classList.remove('hidden')        
        }
        else if (box.getAttribute('class') == 'response-box'){
            box.classList.add('hidden')          
        }
    })
    
})

openText.onclick = () => {
    textIncomplete.classList.add('hidden');
    textComplete.classList.remove('hidden');
}

closeText.onclick = () => {
    textComplete.classList.add('hidden');
    textIncomplete.classList.remove('hidden');
}

navMenu.forEach(option => option.addEventListener('click', changePage));

