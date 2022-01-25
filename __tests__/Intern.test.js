const Employee = require("../Lib/Intern")
test("class Employee return onject", () =>{
    const employee=new Employee()
    expect(typeof(employee)) .toBe("object")
        
} )
test("name returns name", () => {
    const name= "Keia"
    const Intern=new Intern("Keia", 543, email)
    expect(employee.name).toBe(name)
})