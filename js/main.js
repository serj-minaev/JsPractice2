// let text = 'Hello World!';
//
// let root = document.getElementById('root');
//
// let Axe = {
//     race: 'Orc',
//     cl: 'Warrior',
//     color: 'red'
// };



// root.innerHTML = text + (Axe.race);


// Start practice
mainList = {
    Money: '',
    ShopName: '',
    shopGoods: [],
    employers: '',
    open: true
};

mainList.Money = prompt("Ваш бюджет?", '100');
mainList.ShopName = prompt("Название вашего магазина?", 'Маргаритка');

document.querySelector('#name').value = mainList.ShopName;
document.querySelector('#budget').value = mainList.Money;
document.querySelector('#budget2').value = mainList.Money / 30;

// mainList.shopGoods[0] = document.getElementById('goods1').value;

// mainList.shopGoods = [1, 3, 18, 'hello'];

let goods = document.querySelectorAll('.goods input');
let employer = document.querySelectorAll('.employer input');
// console.log('goods', goods);


button1.onclick = function() {
    // let goods1 = document.querySelector('#goods1');
    if(goods){
        goods.forEach(item=>{
            mainList.shopGoods.push( item.value);
        });
    if (employer) {
        employer.forEach(item=>{
            mainList.shopGoods.push(item.value);
        })
    }
    console.log(mainList);
    
        // mainList.shopGoods =  [goods1.value];

    }
};


let cifra = 33721;

let divNum = document.querySelector('.num');

if(divNum){
    divNum.innerHTML = cifra.toString();
}


let NumUmn = document.querySelector('.num-umn');

if(NumUmn) {
    cifra = cifra.toString();
    unmojenie = cifra[0] * cifra[1] * cifra[2] * cifra[3] * cifra[4];
    NumUmn.innerHTML = unmojenie;
}

let mathpow = document.querySelector('.mathpow');

if(mathpow){
    mathpow.innerHTML = Math.pow(unmojenie,3)//;
}