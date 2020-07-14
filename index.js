import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

function filterWorldCup2014(el){
    const worldCup2014 = el.filter(worldCupYear => worldCupYear.Year === 2014)
    return worldCup2014

}

console.log(filterWorldCup2014(fifaData));



//function getYears(callback) {
//     const newArray = callback(fifaData);
//     const years = newArray.map(finalYears => finalYears.Year)
//     return years
// };

// console.log(getYears(getFinals));
// getYears(getFinals);

//(a) Home Team name for 2014 world cup final
function worldCup2014Home(el){
    const worldCup2014HomeTeam = el.filter(worldCupHomeTeam => worldCupHomeTeam.Stage === "Final" && worldCupHomeTeam.Year === 2014)
    return worldCup2014HomeTeam

}

console.log(worldCup2014Home(fifaData)[[0]]);

console.log(fifaData[828]["Home Team Name"]);


//(b) Away Team name for 2014 world cup final
console.log(fifaData[828]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log(fifaData[828]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
console.log(fifaData[828]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
console.log(fifaData[828]["Home Team Name"]);

// const filterWorldCup2014 = fifaData.filter(

//     function getFinals(data) {
//         if (data["Stage"] === "Final" && data["Year"] === 2014) {
//             return true
//         }
//     });
    
//     console.log("Task 1" , filterWorldCup2014);

    // console.log(filterWorldCup2014.data["City"]);

// console.log(fifaData[Year]);

// const filterWorldCup2014 = fifaData.filter( function(data){
//     return data.Year > 2014
// });

// console.log(filterWorldCup2014);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data){
    const Finals = data.filter(finalStage => finalStage.Stage === "Final")
    return Finals
}

console.log('Task 2:' , getFinals(fifaData));



//Third try:
// const data = function getFinals(fifaData) {
//     return fifaData["Stage"] === "Final"
// }

// const finalsData = fifaData.filter(data)

// console.log("Task 2:" , finalsData);

//Forth try:
// function getFinals(data) { /*the function you're going to invoke */
    
//         let finalsInfo = data.filter(data => { /* the callback function that filters through the array */
//         return data["Stage"] === "Final"
//     })
//     return finalsInfo
// };

// console.log('Task 2:' , getFinals(fifaData)); /* this invocation is what you'll use as an argument in your HOFs.*/

// console.log(getFinals(fifaData)[2]["Year"]);




/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(data, callback) {
//         const newArray = callback(fifaData);
//         const years = newArray.map(finalYears => finalYears.Year)
//         return years
// };

function getYears(data, callback) {
    return callback(data).map((game) => game.Year);

};

getYears(fifaData, getFinals);
console.log("Task 3:" , getYears(fifaData, getFinals));
// console.log("Task 3:" , getYears(getFinals)[[1]]);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, callback) {
    return callback(data).map((win) => {
        if (win["Home Team Goals"] >= win["Away Team Goals"]) 
            return win["Home Team Name"]
            return win["Away Team Name"]
        
    });

    };

console.log("Task 5:" , getWinners(fifaData, getFinals));


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */



function getWinnersByYear(data, getWinnersCB, getYearsCB, getFinals) {
    const result = [];
    const winner = getWinnersCB(data, getFinals);
    const years = getYearsCB(data, getFinals);

    for (let i = 0; i < winner.length; i++) {
        result.push(`In ${years[i]}, ${winner[i]} won the world cup!`);
        
    }
    
    return result
    };

console.log("Task 6:", getWinnersByYear(fifaData, getWinners, getYears, getFinals));


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

   const homeGoals = data.reduce((accu, item) => accu + item["Home Team Goals"], 0) / data.length;
   const awayGoals = data.reduce((accu, item) => accu + item["Away Team Goals"], 0) / data.length;

   return {homeGoals, awayGoals};
};


console.log("Task 7:" , getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function initialsWinners(data, callback) {
return callback(data).map((win) => {
    if (win["Home Team Goals"] >= win["Away Team Goals"]) 
        return win["Home Team Initials"]
        return win["Away Team Initials"]
    
});

};

console.log("Stretch 1a:" , initialsWinners(fifaData, getFinals));



function getCountryWins(data, initials) {
    // for (let i = 0; i < initials.length; i++) {
    //     if (initials[i] === initials[i]){
    //         i++
    //     }
        
    // }
    

    //         p++;
    //         return p;
    // }, 0);
    // return numberWins

//     return initials(data).reduce((win, name) => win + name[]{
//     if (initials[i] === initials[i])
//         return 

// });

};

console.log(getCountryWins(fifaData, initialsWinners));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */