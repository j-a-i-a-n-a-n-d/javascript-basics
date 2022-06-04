const button1 = document.querySelector('button');
const div = document.querySelector('div');
const h1 = document.querySelector("h1");
button1.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255) ;
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${ r },${ g },${ b })`;
    div.style.backgroundColor = `rgb(${ g },${ r },${ b })`;
    h1.innerHTML = `RGB(${g},${r},${b})`;
})