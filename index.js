// Write your solution in this file!
// Initialize the employee object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  // Function to update an employee object with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with the updated key-value pair using the spread operator
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Example usage of the updateEmployeeWithKeyAndValue function
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak St');
  console.log(updatedEmployee); // Output: { name: 'John Doe', streetAddress: '456 Oak St' }
  
  // Function to destructively update an employee object with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object with the new key-value pair
    employee[key] = value;
  
    // Return the entire updated employee object
    return employee;
  }
  
  // Example usage of the destructivelyUpdateEmployeeWithKeyAndValue function
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak St');
  console.log(employee); // Output: { name: 'John Doe', streetAddress: '456 Oak St' }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  