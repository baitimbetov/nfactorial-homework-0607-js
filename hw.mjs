/* 1. Variables */
const THEATER_NAME = "Cirque Du Dalida";
const ADDRESS = "Satbayev str. 22";

let CEO = "Dalida"
let employeeNumber = 10;

/* 2. Data types */
let isAlwaysOpen = false;
let isGreat = true;

let netProfit = undefined;
let sponsors = null;

/* 3. Objects */
let show = {
    name: "Night Almaty",
    playDay: "Monday",
    time: "7 pm",
    price: "5000 tg"
};
show.directedBy = "Dalida";
show["venue"] = ADDRESS;
delete show.playDay;

show.print = function () {
    console.log(show)
};

/* 4. Arrays */
let shows = [
    "Night Almaty",
    "nFactorial",
    "Sleepless Nights",
    "Mentors Parable",
];
// Array methods
let deleteLastShow = shows.pop();
shows.push("Satbayev Dorm");
let deleteFirstShow = shows.shift();
shows.unshift("Grand Opening");

let mentors = [
    "Aidar",
    "Beknar",
    "Aruzhan",
];
let coordinators = [
    "Aidana",
    "Dalida"
];
// Concatination
let employees = mentors.concat(coordinators);
// Map
let whoIsMentor = mentors.map((mentors) => mentors + " krasavchik");
// Filter
let Dalida = coordinators.filter((coordinators) => coordinators === "Dalida"); 
// Rest
function buy(name, cost, ...show) {
    return `${name} buys a ticket for ${show} for ${cost}`;
}
// Spread
const praise = ["Zdravstvuite", ...employees, "vy vse bolshie molodcy!"];

const characters = "STRING";
// console.log([...characters]);

// Slice
const bigBoss = coordinators.slice(1);


/* 5. Control Flow */
// Regular with two symbols vs. Strict with three symbols
// Ternary + for loop
for (let i = 0; i < employees.length; i++) {
    let isBoss = (employees[i] === "Dalida") ? "Big Boss" : "Mentor"
    // console.log(isBoss)
}
// Nullish Coalescing operator 
let yourGrade = null;
let Grade = yourGrade ?? "try hard next time";
// console.log(Grade);

/* 6. Loops  */
let count = 0;
let i = 0;
while (i < employees.length) {
    count += 1;
    i++;
    };

/* 7. Functions  */
function countEmployees() {
    return employees.length;
    };

// Function expression
let countShows = function () {
    return shows.length;
    };

let countMentors = () => {
    return mentors.length;
    };

function details({name, directedBy, playDay}) {
    console.log(`${name} directedby ${directedBy} will be on ${playDay}`);
    };
     
/* 8. Export & Import  */
// Export as
export { countEmployees as cE, countMentors as cM };
