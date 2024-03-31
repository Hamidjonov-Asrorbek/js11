// HOMEWORK

// 1 , 2 , 3 / 3 ta masala bir biriga bog'langanligi uchun 1 ta qilib yozdim

// class Car{
//     constructor(brand, year){
//         this.brand = brand;
//         this.year = year;
//     }

//     displayInfo(){
//         console.log(this.brand, this.year);
//     }
// }
// let car1 = new Car("Gm", 2018);
// let car2 = new Car("BWM", 2020);
// console.log(car1);
// console.log(car2);
// car1.displayInfo();
// car2.displayInfo();

// class ElectricCar extends Car{
//     constructor(brand, year, batteryLife){
//         super(brand, year);
//         this.batteryLife = batteryLife;
//     }

//     displayInfo(){
//         console.log(this.brand, this.year, this.batteryLife);
//     }
// }
// let elecCar1 = new ElectricCar("BYD", 2023, 18000);
// let elecCar2 = new ElectricCar("TESLA", 2024, 24000);
// console.log(elecCar1);
// console.log(elecCar2);
// elecCar1.displayInfo();
// elecCar2.displayInfo();


// 4

// let item1 = document.getElementsByTagName("li");
// let item2 = document.getElementById("item_id");
// let item3 = document.getElementsByClassName("item3");
// let item4 = document.querySelector(".item4");

// item1 ni textini o'zgartirish

// [...item1].forEach((e, ind) => {
//     e.textContent = `li ${ind+1}`;
// });

// item2 ni textini o'zgartirish
// item2.textContent = '5';

// item3 ni textini o'zgartirish
// [...item3].forEach((e) => {
    //     e.textContent = "60";
    // })
    
// // item4 ni textini o'zgartirish
// item4.textContent = "45";