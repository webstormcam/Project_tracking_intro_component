

function changeImage(){
    let hampic = document.getElementById('ham')
    let drop = document.getElementById('dropdown');
    if(hampic.getAttribute('src') === 'imgs/icon-close.svg'){
        hampic.src = 'imgs/icon-hamburger.svg'
        drop.style.display ='none'
    } else {
         hampic.src = 'imgs/icon-close.svg'
         drop.style.display ='flex'
     }
    console.log('click')
}

