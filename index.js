// Your code here
function saturdayFun(activity= `roller-skate`){
    let string = `This Saturday, I want to ${activity}!`;
    return string;
}

let mondayWork = function(activity ="go to the office"){
    return`This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }