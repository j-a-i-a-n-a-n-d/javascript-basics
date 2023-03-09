const imageScroll = document.getElementById("mainelement");
const next = document.getElementById("clickNext");
const backgroundImageList = ['./images/m3Desktop.jpg',
            './images/modelYDesktop.jpg',
            './images/modelSDesktop.jpg',
            './images/solarPanels.jpg',
            './images/solarRoofs.webp',
    './images/accessories.jpg'];
var i = 0;
next.addEventListener('click', () => {
    i = (i + 1) % 6;
    imageScroll.style.backgroundImage = "url("+backgroundImageList[i]+")";
});