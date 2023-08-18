// const names = ["Whinds", "Freeway", "Test", "Maria"];

// names.forEach((name) => {
//     console.log(`Hi, ${name}`)
// })


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);

// numbers.forEach((number, index) => {
//     if(number %2 == 0){
//         console.log(`O número ${number} está na posição ${index} do array`);
//     }
  
// });


// const cars =[{
//     marca:"Ford",
//     modelo:"Focus",
// },
// {
//     marca:"BMW",
//     modelo:"BMW 24",
// },
// {
//     marca:"Fiat",
//     modelo:"Palio",
// },
// {
//     marca:"Audi",
//     modelo:"A3",
// },
// ]

//     cars.forEach((car)=>{
//         console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);

//     });



    class Car{
        constructor(brand, model){
            this.brand = brand;
            this.model = model;
        }
    }

    class AllCar{
        constructor(){
            this.cars = [];
        }

        addCars(car){
            this.cars.push(car);
        }
    }

    const listCar = new AllCar();

    function addCars(){
        const brand = document.getElementById("brand").value;
        const model = document.getElementById("model").value;

        const carro = new Car(brand, model)
        listCar.addCars(carro)
        

        listCar.cars.forEach((car) =>{
            console.log(`Marca: ${car.brand} - Modelo: ${car.model} `);
        })
    }