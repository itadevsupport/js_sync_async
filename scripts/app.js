const btn1 = document.querySelector('#uno');
const btn2 = document.querySelector('#due');
const btn3 = document.querySelector('#tre');

btn1.addEventListener('click', () => {
    for (let i = 0; i < 20000000; i++) {
        let d = new Date();
    }
    console.log('uno');
});

btn2.addEventListener('click', () => {
    console.log('due');
});

btn3.addEventListener('click', () => {
    setTimeout(function() {
        console.log('log che compare dopo 3 secondi');
    }, 3000);
    console.log('tre');
});