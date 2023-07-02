//variables 
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    person:`Mahatma Gandhi`
}, {
    quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    person:"Steve Jobs"
}, {
    quote:"It is better to be hated for what you are than to be loved for what you are not.",
    person:"Andre Gide, Autumn Leaves"
}, {
    quote:"You only live once, but if you do it right, once is enough.",
    person:"Mae West"
}, {
    quote:"The purpose of our lives is to be happy.",
    person:"Dalai Lama"
}, {
    quote:"If life were predictable it would cease to be life, and be without flavor.",
    person:"Eleanor Roosevelt"
}, ];

btn.addEventListener('click',function(){
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    
})