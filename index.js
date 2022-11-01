const employee = {
    "name": "Timmy",
    "streetAddress": "507 E 73RD ST."
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return { ...employee, [key] : value}
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newobj2 = {...employee[key]}
    delete newobj2[key]
    return newobj2
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}