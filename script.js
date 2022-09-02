const img = document.querySelector('img')
const price2 = document.querySelector('.price')
const btn = document.querySelectorAll('button[ data-macos ]')
const color2 = document.querySelector('.span')
const btns = document.querySelectorAll('button[ data-mac ]')

btn.forEach(element => {
    element.onclick = () => {
        imgChanger(element.getAttribute('data-macos'))
    }
});

btns.forEach(item => {
    item.onclick = () => {
        changePrice(item.getAttribute('data-mac'))
    }
});
function changePrice(price) {
    if (price === 'GB512' ) {
        price2.innerHTML = '$1,999'
    } else if (price === 'TB1' ) {
        price2.innerHTML = '$2,199'
    } else if (price === 'TB2' ) {
        price2.innerHTML = '$2,399'
    } else if (price === 'TB4' ) {
        price2.innerHTML = '$3,199'
    } else {
        console.log('xaxaxa');
    }
}

function  imgChanger(color){
    if (color === 'white' ) {
        img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvwZgRIncEsWWSohl2vAnbXLR2hIi-1DCGgu9wvH1pw&s')
        color2.innerHTML = 'White'
    }else{
        img.style.width = '300px'
        img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=1808&hei=1680&fmt=png-alpha&.v=1632788573000')
        color2.innerHTML = 'Space Grey'
    }
}