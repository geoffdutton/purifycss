const {
    read,
    purify
} = require("./common")

const content = read("combined/combined.js"),
    css = read("combined/combined.css"),
    result = purify(content, css)

it("can find .added-together", () => {
    expect(result.includes(".added-together")).toBe(true)
})

it("can find .array-joined", () => {
    expect(result.includes(".array-joined")).toBe(true)
})
