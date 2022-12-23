const form = document.getElementById('form');
const buttons = document.getElementById('buttons');
const main2 = document.getElementById('mainContainer2');
const submit = document.getElementById('submit');

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');


let value = 0;

btn1.addEventListener('click', () => {
    value = 1;
})
btn2.addEventListener('click', ()=>{
    value = 2;
})
btn3.addEventListener('click', ()=>{
    value = 3;
})
btn4.addEventListener('click', ()=>{
    value = 4;
})
btn5.addEventListener('click', ()=>{
    value = 5;
})

const handleSubmit = () =>{
    card2.classList.remove('hidden');
    card1.classList.add('hidden');
    main2.innerHTML =`
        <h4 id = "answer">You selected ${value} out of 5</h4>
         `
    localStorage.setItem('calification', value);
}

submit.addEventListener('click',() =>{handleSubmit()});


