var is_count = false;
var result;
var over_minute = 0;
var minute= 0;
var second = 0;
var milisecond = 0;
var elapsed_time =0;
const watchStart = () => {
    if (!is_count) {
        is_count = true;
        start_time = new Date();
        setInterval(countTime, 1)
        const countElement = document.querySelector('#watch')
        countElement.innerText ='計測中…'
    }
}

const watchStop = () => {
    const countElement = document.querySelector('#watch')
    if (over_minute >= 1)
    countElement.innerText = ':ha:'
    else if (second < 33)
        countElement.innerText = '記録:' + result + ' :zako:'
    else if(second <= 33&&milisecond == 4)
        countElement.innerText = '記録:' + result + ' :tuyoi:'
    else if(second <= 33)
        countElement.innerText = '記録:' + result + ' :sad_parrot:'
    else if(second >= 33)
        countElement.innerText = '記録:' + result + ' :zekkizekki:'    
}
const watchReset = () => {
    const countElement = document.querySelector('#watch')
        countElement.innerText ='33.4してください！'
}

function countTime() {
    now_time = new Date();
    elapsed_time = now_time.getTime() - start_time.getTime();
    over_minute = (elapsed_time / 1000/60);
    second = Math.floor(elapsed_time / 1000) % 60;
    milisecond = Math.floor((elapsed_time % 1000)/100);
    result = second + "." + milisecond;	
    is_count = false;
}