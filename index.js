const toggle = document.querySelector('.toggle')
const topBar = document.querySelector('.topBar')
const navegation = document.querySelector('.navegation')
const main = document.querySelector('.main')
const hidden = document.querySelectorAll('.hidden')

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active') 
    topBar.classList.toggle('topbar')
    navegation.classList.toggle('navActive') 
    main.classList.toggle('mainActive')
})

console.log(hidden.length)



 /* bottoms test */

 for(let i =0;i < hidden.length;i++){
    hidden[i].addEventListener('click',()=>{
        navegation.classList.remove('navActive')
        main.classList.remove('mainActive')
        topBar.classList.remove('topbar')
        toggle.classList.toggle('active')
    })
 }

/* funciono mi experimento asi que cuando vuelva vamos a hacer grandes cosas asi que preparate */