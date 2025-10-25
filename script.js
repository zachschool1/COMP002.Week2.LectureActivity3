let myGrade = 50;

if (myGrade >= 90 ) {
    console.log("Great Job, You have an A");
} else if (myGrade >= 80 && myGrade < 90) {
    console.log("You have a B, Thats good but not great");
} else if (myGrade >= 70 && myGrade < 80) {
    console.log("You have a C. You're cutting it close");
} else if (myGrade >= 60 && myGrade < 70) {
    console.log("Your grade is a D, YOURE AT RISK OF FAILING");
} else {
    console.log("You're failing. you have an F. do your work and turn it in!");
}

switch (myGrade > 0) {
    case myGrade >= 90:
        console.log("You have an A.");
        break;
    case myGrade >= 80 && myGrade < 90:
        console.log("you have a B.");
        break;
    case myGrade >= 70 && myGrade < 80:
        console.log("you have a C, you can do better.");
        break;
    case myGrade >= 60 && myGrade < 70:
        console.log("you have a D. stop slacking off.");
        break;
    default:
        console.log("You are failing. do better.");
}

//i like Switch Statements better as it seems a bit easier to implement and also looks a bit easier to understand, but I can see there being issues with things like forgetting to add break or default.

for(let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log("!");
    } else {
        console.log(i);
    }
}