let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let total = 0;
for (key in salaries){
  total += salaries[key];
}
total

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
  for (key in obj){
    if(typeof(obj[key])=='number'){
      obj[key] = obj[key]*2;
    } else {continue}
  }
}