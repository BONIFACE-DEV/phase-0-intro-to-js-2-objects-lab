const employee ={
    name:"Boniface",streetAdress:""
}
function updateEmployeeWithKeyAndValue (employee, key, value) {
    return{...employee, ...{[key]:value} };
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function  deleteFromEmployeeByKey(employee, key) {
    let clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
  }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

 