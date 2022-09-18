window.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    const images = document.querySelectorAll('.parallax img');
    const title = document.querySelector('h1');
    const block = document.querySelector('.parallax');

    block.addEventListener("mousemove", (event) => {
        const corX = event.clientX;
        const corY = event.clientY;

        cursor.style.left = corX + "px";
        cursor.style.top = corY + "px";

        cursorInner.style.left = corX + "px";
        cursorInner.style.top = corY + "px";

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const x = (windowWidth / 2 - corX) / 20 ;
        const y = (windowHeight / 2 - corY) / 20    ;

        title.style.transform = `translate(${x / 20}px, ${y / 10}px)`;
        images[0].style.transform = `translate(${x / 15}px, ${y / 15}px)`;
        images[1].style.transform = `translate(${x / -20}px, ${y / -10}px)`;
        images[2].style.transform = `translate(${x}px, ${y}px)`;
        images[3].style.transform = `translate(${x / 5}px, ${y / -5}px)`;
        images[4].style.transform = `translate(${x / 5}px)`;
    });
});