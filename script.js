

function changeImage(){
    let hampic = document.getElementById('ham')
    if(hampic.getAttribute('src') === 'imgs/icon-close.svg'){
        hampic.src = 'imgs/icon-hamburger.svg'
    } else {
         hampic.src = 'imgs/icon-close.svg'
     }
    console.log('click')
}

