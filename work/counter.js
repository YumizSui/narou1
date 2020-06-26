let count = 0
let n = 0;
const countUp = () => {
    count++
    const countElement = document.querySelector('#count')
        countElement.innerText = '回数: ' + count   
    while (n < 100) {
        n++;
        alert('押すなって言ったのに…');
    }
}

