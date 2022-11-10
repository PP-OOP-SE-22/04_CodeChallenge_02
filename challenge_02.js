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



    prompt("Bitte Alter eingeben");

Alter = 0-5 // Milch  
Alter = 6-12 // Saft
Alter = 13-17 // Cola

switch (Alter) {


    case (0-5);
         console.log("Max trinkt Milch");
    break;

    case (6-12);
        console.log("Max trinkt Saft");
    break;

    case (13-17);
        console.log("Max trinkt Cola");

        default:
            console.log("Max hat keinen Durst, er hat Hunger!")
            break;

}