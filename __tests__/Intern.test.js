const Intern = require("../Lib/Intern")
        
test("school returns school", () => {
    const school= "school"
    const intern=new Intern("Keia", 543, "email", school)
    expect(intern.school).toBe(school)
})

test("get school returns school", () => {
    const school= "school"
    const intern=new Intern("Keia", 543, "email", school)
    expect(intern.getSchool()).toBe(school)
})

test("get role returns intern", () => {
    const role= "Intern"
    const intern=new Intern("Keia", 543, "email", "school")
    expect(intern.getRole()).toBe(role)
})