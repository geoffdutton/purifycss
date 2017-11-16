const {
    read,
    purify
} = require("./common")

const content = read("simple/simple.js"),
    css = read("simple/simple.css"),
    result = purify(content, css)

it("finds .single", () => {
    expect(result.includes(".single")).toBe(true)
})

it("finds .double-class", () => {
    expect(result.includes(".double-class")).toBe(true)
})

it("can find .triple-simple-class", () => {
    expect(result.includes(".triple-simple-class")).toBe(true)
})
