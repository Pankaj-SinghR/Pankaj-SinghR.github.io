window.onload = checkWidth;
window.onresize = checkWidth;

function checkWidth(){
    const width = window.innerWidth;
    if(width <= 775){
        onMouseClick();
    }
};

function onMouseClick(){
    window.onmousedown = function(){
        let element = document.getElementById('about-id')
        let style = window.getComputedStyle(element, '::before')
        style.setProperty("content", "About")
    }
};

