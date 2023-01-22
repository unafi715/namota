let userInput = document.querySelector('.userInput')
let btn = document.querySelector('.btn')
let error = document.querySelector('.error')
let result = document.querySelector('.result')

btn.addEventListener('click',function(){
    result.innerHTML = ''
    if(!userInput.value){
        error.innerHTML= 'Error! Write any number.'
        error.style.color = 'red'
    }
    else{
        error.innerHTML=''
        userInput.innerHTML= ''
        for(i=1; i<=10; i++){
            result.innerHTML += userInput.value+' x '+ i +' = '+ userInput.value*i+`<br>`
            result.style.color= 'white'
        }
    }
    // result.style.animation = 'myAni .5s alternate'
})