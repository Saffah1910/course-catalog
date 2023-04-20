
//Create a function called **tutorWageCalculator** that calculates how much a course tutor will earn based on this hourly rate
// and hours worked. Each tutor got a level. 
//the function should have 2 parameters one for the hours and one for the level
//It takes a `timesheet string` & the tutor `level` of the tutor as parameters.
//create a var for each level
//inside the for loop the create and if staemnt with the conditions that if the level === 1 retrun the amount 
// And returns tutor wage



function tutorWageCalculator(timesheetString, level){
 
    // var stringMap = {}

    var levelOne = 0;
    var levelTwo = 0;
    var levelThree = 0;



    for (var i = 0; i < level.length;i++){

        if(level[i] === 1){
            levelOne += 75 
        }
      
        if(level[i] === 2){
            levelTwo += 90
        }

        if(level[i] === 3){
            levelThree += 105
        }
    }
    return levelOne




    // for(var string in )




}