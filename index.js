function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
   }
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

saturdayFun("Bathe my dog")
 
function wrapAdjective(parameter = "*") {
    return function(value = "special") {
    return `You are ${parameter}${value}${parameter}!`
    }
}