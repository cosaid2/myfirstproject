/*const pressGrindBeans = () => {
    console.log("Brind is on for 20 seconds");
}
pressGrindBeans();

const cashWithdrawal = (amount, accnum) => {
    console.log('Withdrawing ${amount} from account ${accnum}');
}
cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);*/

let name = " enough money "&& " not enough"

/*const takeOrder = (size, drinkType) => {
    console.log(`Order received: ${size} ${drinkType}`);
} 

takeOrder("latte", " Large");
takeOrder("flatWhite", "medium");

*/

let coffeeIsGrinding = false;
const pressGrindBeans = () => {
 if (coffeeIsGrinding) {
 console.log("Stopping the grind");
 coffeeIsGrinding = false;
 } else {
 console.log("Grinding is about to begin");
 coffeeIsGrinding = true;
 }
}
pressGrindBeans();/*

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
   };
   const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
   };
   
   console.log("The temperature is " + getFahrenheit(15) + "°F");
   // Output: The temperature is 59°F


let orderCount = 0;
const takeOrder = (topping1, topping2) => {
 console.log(`Pizza with ${topping1}, ${topping2}`);
 orderCount++;
 console.log(orderCount);
}
takeOrder("pineapple", "mellon");


