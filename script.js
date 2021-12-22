let ham = document.getElementById('ham')

function changeImage(){
    if(ham.src ==='imgs/icon-close.svg'){
        ham.src = 'imgs/icon-hamburger.svg'
    } 
    else{
        ham.src ='imgs/icon-close.svg'
    }
    console.log('click')
}