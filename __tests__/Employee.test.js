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
test("id returns id", () => {
    const id= 123
    const employee=new Employee('Keia', id)
    expect(employee.id).toBe(id)
})
test("email returns email", () => {
    const email= "email"
    const employee=new Employee('Keia', 123, email)
    expect(employee.email).toBe(email)
})
test("getName returns name", () => {
    const name= "Keia"
    const employee=new Employee(name)
    expect(employee.getName()).toBe(name)
})
test("gerId returns id", () => {
    const id= 123
    const employee=new Employee('Keia', id)
    expect(employee.getId()).toBe(id)
})
test("getEmail returns email", () => {
    const email= "email"
    const employee=new Employee('Keia', 123, email)
    expect(employee.getEmail()).toBe(email)
})
test("getRole returns role", () => {
    const role= "Employee"
    const employee=new Employee('Keia', 123, 'email')
    expect(employee.getRole()).toBe(role)
})





