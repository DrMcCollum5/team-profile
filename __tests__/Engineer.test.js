const Engineer = require("../Lib/Engineer")

test("name returns name", () => {
    const gitHub= "gitHub"
    const engineer=new Engineer("Keia", 543, "email", gitHub)
    expect(engineer.gitHub).toBe(gitHub)
})
test("get role returns engineer", () => {
    const role= "Engineer"
    const engineer=new Engineer("Keia", 543, "email", "gitHub")
    expect(engineer.getRole()).toBe(role)
})
test("getGitHub returns gitHub", () =>{
    const gitHub= "gitHub"
    const engineer=new Engineer("Keia", 543, "email", gitHub)
    expect(engineer.getGitHub()).toBe(gitHub);
})