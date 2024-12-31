const body = document.querySelector('body');
const cursor = document.querySelector('#cursor')
console.log(cursor);


body.addEventListener('mouseenter', () => {
    cursor.style.scale = 1;
    cursor.style.opacity = 1;
})
body.addEventListener('mouseleave', () => {
    cursor.style.scale = 0;
    cursor.style.opacity = 0;
})

window.addEventListener('mousemove', (e) =>{
    
        let posX = e.clientX;
        let posY = e.clientY;

    cursor.style.left = `${posX}px`
    cursor.style.top = `${posY}px`
})
