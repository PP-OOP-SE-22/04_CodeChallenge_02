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
//  console.log(Name);
// console.log(Age);

let Alter1;
let Alter2;
let Alter3;

Alter1 = Number>0, Number<6  // .. trinkt Milch!  
Alter2 = Number>5, Number<13  // .. trinkt Saft!
Alter3 = Number>12, Number<18  //.. trinkt Cola!
Alter4 = Number>17, Number<100 // .. trinkt Wein!
switch (false) 
{
    case Alter1:
         console.log (Name + " trinkt Milch!");
    break;

    case Alter2:
         console.log (Name + " trinkt Saft!");
    break;

    case Alter3:
         console.log (Name + " trinkt Cola!");
     break;

     case Alter4:
         console.log (Name + " trinkt Wein!");
     break;
     
        default:
            console.log(Name + " hat keinen Durst sondern Hunger!")
            break;
}
