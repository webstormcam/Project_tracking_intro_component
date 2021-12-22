

function changeImage(){
    let hampic = document.getElementById('ham')
    if(hampic.src === 'imgs/icon-close.svg'){
        hampic.src = 'imgs/icon-hamburger.svg'
    } else{
         hampic.src = 'imgs/icon-close.svg'
       hampic.alt ='catman'
     }
    console.log('click')
}

