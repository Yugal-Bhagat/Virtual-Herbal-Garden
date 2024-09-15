let img = document.querySelector('.hero-img')
let imgArr = [
    'https://plus.unsplash.com/premium_photo-1665657351594-14473b25fe22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlydHVhbCUyMGhhcmJhbCUyMGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1675039871605-eb156cc0575d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHZpcnR1YWwlMjBoZXJiYWwlMjBnYXJkZW58ZW58MHx8MHx8fDA%3D'

]
let countInx = 0
setInterval(() => {
    
    img.setAttribute('src', imgArr[countInx])
    countInx = (countInx + 1) % imgArr.length

}, 4000)
// img.style.width = '100%'
// img.style.height = 'calc(100vh - 64px)'

let bar = document.querySelector('#menu-bar')
let nav =document.querySelector('nav')
bar.addEventListener('click',()=>{
if (bar.classList.contains('fa-bars')) {
    bar.className = "fa-solid fa-xmark";
} else {
    bar.className = "fa-solid fa-bars";
}
nav.classList.toggle('showData')
})