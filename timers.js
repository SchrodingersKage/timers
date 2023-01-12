let count = setInterval(function() {
    num--;
    if (num <= 0) {
        clearInterval(count);
        console.log('DONE!!!');
    } else {
    console.log(num);
    }
}, 1000);
    
    
function randomGame () {
    let num = 1;
    let count = setInterval(function() {
        let rand = Math.random();
        if (rand > .75) {
            clearInterval(count);
            console.log(`It took you ${num} try/tries!`);
        }
            num++;
    
    }, 1000)
}