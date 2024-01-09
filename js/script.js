var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
    var totalBudget = Number(prompt("What is your total budget for this trip?"));
    var accomodation = Number(prompt("What are your total accomdation costs?"));
    var numOfDays = Number(prompt("How many days will you trip last?"));

    calculateDailyBudget(totalBudget, accomodation, numOfDays);
};

var calculateDailyBudget = function (totalBudget, accomdation, numOfDays) {
    var daily = ((totalBudget - accomdation) / numOfDays).toFixed(2);

    dailyBudget.innerText = `You can spend $${daily} a day on food, booze, and activites.`;
}

tripInfoButton.addEventListener("click", tripInfo);