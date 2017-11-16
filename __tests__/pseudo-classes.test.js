const {
    read,
    purify
} = require("./common")

const content = read("pseudo_class/pseudo_class.js"),
    css = read("pseudo_class/pseudo_class.css"),
    result = purify(content, css)

it("finds div:before", () => {
    expect(result.includes("div:before")).toBe(true)
})

it("removes row:after", () => {
    expect(result.includes("row:after")).toBe(false)
})
