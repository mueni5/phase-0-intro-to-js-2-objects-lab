// Write your solution in this file!

const employee = {
    name: "",
    streetAddress: "",
  };

  employee.name = "entername";
employee.streetAddress = "enteraddy";
employee;
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;

  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["name"] = "Sam";
    employee["streetAddress"] = "12 Broadway";
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee.name;
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee["name"];
    return employee;
  }
  
  destructivelyDeleteFromEmployeeByKey();