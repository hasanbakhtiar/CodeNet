// ES5
// function infoFunc(){
//     console.log("React");
// }
// infoFunc();

// ES6 
// class infoClass{
    
//    constructor(){
//        var a =  {
//         name: 'Hasan'
//     }
//    }
   
// }

// const infoData = new infoClass();
// console.log(infoData);

// const infoFunc = () =>{
//     console.log("Arrow");
// }
// infoFunc();


class infoData{
    constructor(name,year){
            this.addName = name;
            this.addYear = year;
    }

    calculateAge(){
            return new Date().getFullYear() - this.addYear;
    }

    
    sayHi(item){

        return `Hi ${item}`;
    }

    // sayHi(){

    //     return "Hi " + this.addName;
    // }
}

const myData = new infoData('Ziya',1999);
console.log(myData.sayHi('Ziya'));
console.log(myData.calculateAge());


