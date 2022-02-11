const Manager = require("../Lib/Manager")

test("name returns name", () => {
    const officeNumber= 222
    const manager=new Manager("Keia", 543, "email", officeNumber)
    expect(manager.officeNumber).toBe(officeNumber)
})
test("get role returns manager", () => {
    const role= "Manager"
    const manager=new Manager("Keia", 543, "email", 222)
    expect(manager.getRole()).toBe(role)
})
test("get office number returns office numer", () => {
    const officeNumber= 222
    const manager=new Manager("Keia", 543, "email", officeNumber)
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})