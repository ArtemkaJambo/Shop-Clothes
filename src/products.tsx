import hoody1 from './assets/images/Hoody/redhoody.png';
import hoody2 from './assets/images/Hoody/blackhoody.png';
import hoody3 from './assets/images/Hoody/greyhoody.png';
import hoody4 from './assets/images/newAssortment/hoodybluenew.png'
import hoody5 from './assets/images/newAssortment/whitehoodynew.png'
import trousers1 from './assets/images/Trousers/karfotroursers.png'
import trousers2 from './assets/images/newAssortment/trousersbluenew.png'
import trousers3 from './assets/images/newAssortment/redtrousesnew.png'
import tShirt1 from './assets/images/T-Shirt/blackshirt.png'
import tShirt2 from './assets/images/T-Shirt/redshirt.png'
import tShirt3 from './assets/images/T-Shirt/whiteshort.png'
import tShirt4 from './assets/images/newAssortment/smartTShirtnew.png'
import outwear1 from './assets/images/Outwear/outwear1.png'
import outwear2 from './assets/images/Outwear/outwear2.png'
import outwear3 from './assets/images/Outwear/outwear3.png'
import outwear4 from './assets/images/Outwear/outwear4.png'
import outwear5 from './assets/images/Outwear/outwear5.png'

export interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
}

export const productOutwear: Product[] = [
    {
        id: 1,
        name: 'Двосторонній бавовняний бомбер',
        img: outwear1,
        price: 1300,
    },
    {
        id: 2,
        name: 'Зимова бавовняна куртка-пуховик',
        img: outwear2,
        price: 3249,
    },
    {
        id: 3,
        name: 'Arcteryx Beta AR Jacket',
        img: outwear3,
        price: 6400,
    },
    {
        id: 4,
        name: 'Жилетка',
        img: outwear4,
        price: 1000,
    },
    {
        id: 5,
        name: 'Атласний бомбер Nike NRG «чорний»',
        img: outwear5,
        price: 4199,
    },
]

export const productsHoody: Product[] = [
    {
        id: 6,
        name: 'Червоне Худі',
        img: hoody1,
        price: 950,
    },
    {
        id: 7,
        name: 'Чорне Худі',
        img: hoody2,
        price: 950,
    },
    {
        id: 8,
        name: 'Зелене Худі',
        img: hoody3,
        price: 990,
    },
    {
        id: 9,
        name: 'Сіре Худі',
        img: hoody4,
        price: 1100,
    },
    {
        id: 10,
        name: 'Худі "Восьминіг"',
        img: hoody5,
        price: 1449,
    },

];
export const productsTrousers: Product[] = [
    {
        id: 11,
        name: 'Штани Карго',
        img: trousers1,
        price: 1149,
    },
    {
        id: 12,
        name: 'Джинси',
        img: trousers2,
        price: 1249,
    },
    {
        id: 13,
        name: 'Штани Вільного Крою ',
        img: trousers3,
        price: 950,
    },
    
];
export const productsTShirts: Product[] = [
    {
        id: 14,
        name: 'Чорна Футболка',
        img: tShirt1,
        price: 499,
    },
    {
        id: 15,
        name: 'Червона Футболка',
        img: tShirt2,
        price: 599,
    },
    {
        id: 16,
        name: 'Біла Футболка',
        img: tShirt3,
        price: 499,
    },
    {
        id: 17,
        name: 'Зелена Футболка',
        img: tShirt4,
        price: 749,
    },
];


