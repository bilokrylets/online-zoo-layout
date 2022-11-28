// burger ==========================

const burger = document.querySelector('#burgerMenu');
const burgerBg = document.querySelector('#burgerBg');
const openBurger = document.querySelector('#burgerOpen');
const closeBurger = document.querySelector('#burgerClose');  

function toggleBurger(e){
    e.preventDefault()
    burger.classList.toggle('show-burger');
    burgerBg.classList.toggle('burger-bg');

}

openBurger.addEventListener('click',toggleBurger);
closeBurger.addEventListener('click',toggleBurger);

burgerBg.addEventListener('click',(e) =>{
    if( e.target === burgerBg){
        burger.classList.toggle('show-burger');
        burgerBg.classList.toggle('burger-bg');
    } 
});


// testimonails

const cards= document.querySelectorAll('.testimonials-card');
const background= document.querySelector('.bg')



cards.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        item.classList.add('card-active');
        background.classList.add('dark-bg');
    })
})

cards.forEach((item)=>{
    background.addEventListener('click',(e)=>{
        e.preventDefault();
        item.classList.remove('card-active');
        background.classList.remove('dark-bg');
    })
})


//  radio - numbers connection 

const radioInputs = document.querySelectorAll('.radio-amount');
const donateNumber = document.querySelector('.donate-form-number');
const values = []
radioInputs.forEach(input => values.push(input.value));
// console.log(values);


function raioNumberConnection(e) {
    if (values.includes(donateNumber.value)) {
        let checked1 = document.querySelector(`input[name=donate][value='${donateNumber.value}']`)
        checked1.checked = true
    }
}
raioNumberConnection()

donateNumber.addEventListener('input',raioNumberConnection)

radioInputs.forEach(radio =>{
    radio.addEventListener('click',(e) =>{
        donateNumber.value = radio.value
    })
})

// const radioInputs = document.querySelectorAll('.funding-amount__form-input');
// const amount = document.getElementById('another-amount');
// const priceValues = [];
// let checkedInput = document.getElementById('q100');
// checkedInput.checked = true;
// radioInputs.forEach(input => priceValues.push(input.value));

// amount.addEventListener('input', (e) => {
//     if (!amount.validity.valid) amount.value = '';
//     if (priceValues.includes(amount.value)) {
//         checkedInput = document.getElementById(`q${amount.value}`);
//         checkedInput.checked = true;
//     } else {
//         radioInputs.forEach((radio) => radio.checked = false);
//     }
// });

// radioInputs.forEach((radio) => {
//     radio.addEventListener('input', (e) => {
//         amount.value = radio.value;
//     });
// });