"use strict"

const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport{
    constructor(type, price, brand, image){
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;

    }
    getInfo(){
        return `${this.type}, ${this.brand}`;
    }
    getPrice(){
        return this.price;
    }
}

class Car extends Transport{
    constructor(type, price, brand, image, doors){
        super(type, price, brand, image)
        this.doors = doors;
    }
    getDoorsCount(){
        return this.doors;
    }
}

class Bike extends Transport{
    constructor(type, price, brand, image, maxSpeed){
        super(type, price, brand, image)
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
}

const carList = document.querySelector('.car__list');
const arrCar = [];
data.forEach((item) => {
    if(item.type === 'car'){
    const carObj = new Car(item.type, item.price, item.brand, item.image, item.doors);              // получили массив машин
    arrCar.push(carObj);
    }
});
arrCar.forEach(elems => {
    const newH = document.createElement('h2');
    newH.textContent = `Бренд: ${elems.brand}`;
    carList.append(newH); 
    const newP = document.createElement('p');
    newP.textContent = `Цена: ${elems.price}, количество дверей: ${elems.doors}`;
    carList.append(newP); 
    const newImg = document.createElement('img');
    newImg.src =  elems.image;
    carList.append(newImg); 
    
})


const bikeList = document.querySelector('.bike__list');
const arrBike = [];
data.forEach((item) => {
    if(item.type === 'bike'){
    const bikeObj = new Bike(item.type, item.price, item.brand, item.image, item.maxSpeed);         // получили массив мотоциклов
    arrBike.push(bikeObj);
    }
});
arrBike.forEach(elems => {
    const newH = document.createElement('h2');
    newH.textContent = `Бренд: ${elems.brand}`;
    carList.append(newH); 
    const newP = document.createElement('p');
    newP.textContent = `Цена: ${elems.price}, количество дверей: ${elems.doors}`;
    carList.append(newP); 
    const newImg = document.createElement('img');
    newImg.src =  elems.image;
    carList.append(newImg); 
})





