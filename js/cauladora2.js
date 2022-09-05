
var  buttons = document.querySelector('.buttons');
var bnt = document.querySelectorAll('span');
var  value = document.getElementById('value');

var toggleBnt = document.querySelector('.toggleBnt');
var body = document.querySelector('body')

/* aqui é realizado o calculo da calculadora */
for(let i = 0; i< bnt.length;i++){
    bnt[i].addEventListener("click", function(){

        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        }
        else if(this.innerHTML=="Limpar"){
                value.innerHTML = "";
            }
            else{
                value.innerHTML += this.innerHTML;
        }

    })
}

toggleBnt.onclick = function(){
    body.classList.toggle('dark')
}
