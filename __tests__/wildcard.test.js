const {
    read,
    purify
} = require("./common")

const content = read("wildcard/wildcard.html"),
    css = read("wildcard/wildcard.css"),
    result = purify(content, css)

it("finds universal selector", () => {
    expect(result.includes("*")).toBe(true)
})

it("finds :before", () => {
    expect(result.includes("before")).toBe(true)
})

it("finds scrollbar", () => {
    expect(result.includes("scrollbar")).toBe(true)
})

it("finds selection", () => {
    expect(result.includes("selection")).toBe(true)
})

it("finds vertical", () => {
    expect(result.includes("vertical")).toBe(true)
})

it("finds :root", () => {
    expect(result.includes(":root")).toBe(true)
})
