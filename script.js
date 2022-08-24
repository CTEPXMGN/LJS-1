let arr = [];
let sum = 0;

function sumInput() {
    
    let num = prompt('введите число');
    
    if (Number.isInteger(+num)) {
        arr.push(+num);
    }
    if (num === null || num === '' || !Number.isInteger(+num)) {
        for (const item of arr) {
            sum += item;
        }
        console.log(sum);
    } else {
        sumInput();
    }
}

sumInput();