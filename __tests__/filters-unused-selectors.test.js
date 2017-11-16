const {
    read,
    purify
} = require("./common")

const content = read("remove_unused/remove_unused.js"),
    css = read("remove_unused/remove_unused.css"),
    result = purify(content, css)

it("contains .used-class", () => {
    expect(result.includes(".used-class")).toBe(true)
})

it("removes .unused-class", () => {
    expect(result.includes(".unused-class")).toBe(false)
})

it("removes .another-one-not-found", () => {
    expect(result.includes(".another-one-not-found")).toBe(false)
})
