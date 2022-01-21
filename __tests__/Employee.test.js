const Employee = require("../Lib/Employee")
test("class Employee return onject", () =>{
    const employee=new Employee()
    expect(typeof(employee)) .toBe("object")
        
} )
test("name returns name", () => {
    const name= "Keia"
    const employee=new Employee(name)
    expect(employee.name).toBe(name)
})


//const employee = new Employee("Keia", 123, email)