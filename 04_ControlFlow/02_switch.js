// Switch Statement
// 1) Comparing number

let month = 1;
switch (month) 
{
        case 1:
        console.log("jan");
        break;

        case 2:
        console.log("feb");
        break;

        case 3:
        console.log("march");
        break;

        default:
        console.log("Nothing matched");
        break;
}

// 2) Comparing String

let MonthInString = "feb";
switch (MonthInString) 
{
        case "jan":
        console.log(1);
        break;

        case "feb":
        console.log(2);
        break;

        case "march":
        console.log(3);
        break;

        default:
        console.log("Nothing matched");
        break;
}
