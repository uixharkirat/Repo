//1
let user = {
    name: "John",
    years: 30
};
  
  let {name, years: age, isAdmin = false} = user;
  
  alert( name );
  alert( age );
  alert( isAdmin );

// Output Jonh, 30, false

//2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
}

alert(topSalary(salaries))
// output= pete

//3