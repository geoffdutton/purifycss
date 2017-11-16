const {
    read,
    purify
} = require("./common")

const content = read("special_characters/special_characters.js"),
    css = read("special_characters/special_characters.css"),
    result = purify(content, css)

it("finds @home", () => {
    expect(result.includes("@home")).toBe(true)
})

it("finds +rounded", () => {
    expect(result.includes("+rounded")).toBe(true)
})

it("finds button", () => {
    expect(result.includes("button")).toBe(true)
})
