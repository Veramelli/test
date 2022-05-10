document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.querySelectorAll('input')[1].value = name;
    }

    let avatar = localStorage.getItem('avatar');
    if (avatar != null) {
        document.querySelectorAll('picture').value = avatar;
    }

    let messagesArray = localStorage.getItem('keymessage');
    document.querySelectorAll('.message').innerHTML = messagesArray;
})

let messages = '';
let messagesArray = [];

function addMessage() {
    let pic = document.querySelectorAll('input')[0].value;
    let userName = document.querySelectorAll('input')[1].value;
    let text = document.querySelectorAll('input')[2].value;
    messages = text;
    document.querySelector('.picture').innerHTML = `<img src="${pic}" alt="yourAvatar">`;
    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', pic);
    }

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', userName);
    }

    if (document.querySelectorAll('input')[0].value != null) {
        document.querySelectorAll('input')[0].hidden = true;
        document.querySelectorAll('.hidden').hidden = true;
    }
    generationMessages(userName);
}

function generationMessages(userName) {

    let optionsString = '';
    optionsString += `<span>${checkSpam(messages)}</span><br>`
    document.querySelector('.message').innerHTML += `<span>${userName}</span>` + ":" + optionsString;
    messagesArray.push(messages);

    localStorage.setItem('keymessage', JSON.stringify(messagesArray));

    console.log(messagesArray);
    console.log(messages);
}

const checkSpam = messages => messages.replace(/viagra|xxx|ххх/gi, "***");

/* 
document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.querySelectorAll('input')[1].value = name;
    }

    let avatar = localStorage.getItem('avatar');
    if (avatar != null) {
        document.querySelectorAll('input')[0].value = avatar;
    }
})

let messages = [];

function addMessage() {
    let pic = document.querySelectorAll('input')[0].value;
    let userName = document.querySelectorAll('input')[1].value;
    let text = document.querySelectorAll('input')[2].value;
    messages.push(text);
    document.querySelector('.picture').innerHTML = `<img src="${pic}" alt="yourAvatar">`;
    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', pic);
    }

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', userName);
    }

    if (document.querySelectorAll('input')[0].value != null) {
        document.querySelectorAll('input')[0].hidden = true;
        document.querySelectorAll('.hidden').hidden = true;
    }

    
    generationMessages(userName);
}

function generationMessages(userName) {
    let optionsString = '';
    for (let m of messages) {
        optionsString += `<span>${checkSpam(m)}</span><br>`
    }
    // messages =[]; 

    document.querySelector('.message').innerHTML = "";
    document.querySelector('.message').innerHTML += `<span>${userName}</span>` + ":" + optionsString;
    console.log(messages);

}

const checkSpam = m => m.replace(/viagra|xxx|ххх/gi, "***"); */