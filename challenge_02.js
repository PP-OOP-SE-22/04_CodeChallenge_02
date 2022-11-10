/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter = 0-5 // Milch  --> age > 0 AND age < 6
Alter = 6-12 // Saft
Alter = 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let Name, Age
Name = prompt("Bitte Name eingeben");
 Age = prompt("Bitte Alter eingeben");
 console.log(Name);
console.log(Age);

//    Age prompt("Bitte Alter eingeben");
let Alter1;
// let Alter2
// let Alter3

Alter1 = Number>0, Number<5  // .. Milch  
// Alter2 = (<12, >6)  // Saft
// Alter3 = (<17, >13)  // Cola

switch (true) {

    case "Alter1":
         console.log( Name + "trinkt Milch.");
    break;
}
//     // case <12, >6);
//     //     console.log("Max trinkt Saft");
//     // break;

//     // case (<17, >13);
//     //     console.log("Max trinkt Cola");

//         default:
//             console.log("Max hat keinen Durst, er hat Hunger!")
//             break;

