const {
    read,
    purify
} = require("./common")

const content = read("camel_case/camel_case.js"),
    css = read("camel_case/camel_case.css"),
    result = purify(content, css)

it("finds testFoo", () => {
    expect(result.includes("testFoo")).toBe(true)
})

it("finds camelCase", () => {
    expect(result.includes("camelCase")).toBe(true)
})
