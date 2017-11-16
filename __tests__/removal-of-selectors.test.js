const {
    read,
    purify
} = require("./common")

let thisCss
beforeEach(() => {
    thisCss = read("bootstrap/modified-bootstrap.css")
})

it("should only have .testFoo", () => {
    let css = thisCss + read("camel_case/camel_case.css")
    let result = purify("testfoo", css)

    expect(result.length < 400).toBe(true)
    expect(result.includes(".testFoo")).toBe(true)
})
