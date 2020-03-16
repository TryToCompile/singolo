const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
   MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();
    document.getElementById('result').innerText = 'The letter was sent';
    document.getElementById('pop-theme').innerText = 'Subject: ' + subject;
    document.getElementById('pop-description').innerText = 'Description: ' + description;
    document.getElementById('message-block').classList.remove('hidden');
    document.getElementById('message').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result').innerText = "";
    document.getElementById('pop-description').innerText = "";
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
    /*this.form.reset();*/
});
