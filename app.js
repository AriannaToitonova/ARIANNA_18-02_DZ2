const block2 = document.querySelector('.block2');

let position = 0;
let topPosition = 0;
const move = () => {
    if (position <= 400 && topPosition === 0) {
        position += 10;
        block2.style.left = `${position}px`;
        setTimeout(move,100);
    } else if (position >= 400 && topPosition <= 400) {
        topPosition += 10;
        block2.style.top = `${topPosition}px`;
        setTimeout(move,100);
    } else if (position >= 0 && position !== 0) {
        position -= 10;
        block2.style.left = `${position}px`;
        setTimeout(move,100);
    } else if (position <= 400 && topPosition >= 0) {
        topPosition -= 10;
        block2.style.top = `${topPosition}px`;
        setTimeout(move,100);
    }
};
move()




let i = 0;
function any(){
i++;
console.log("Прошло " + i + " сек.");
}
setInterval(any,1000);

    