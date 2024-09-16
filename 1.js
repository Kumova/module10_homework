
let x = promt('введите значение');
y = +x;
if (typeof(y) === 'number' && isNaN(y)) {
    y % 2 == 0 ? console.log('четное число') : console.log('нечетное число')
} else { 
    console.log('Упс, кажется, вы ошиблись') 
};

