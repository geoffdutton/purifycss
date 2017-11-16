const {
    read,
    purify
} = require("./common")

const content = read("attribute_selector/attribute_selector.html"),
    css = read("attribute_selector/attribute_selector.css"),
    result = purify(content, css)

it("finds font-icon-", () => {
    expect(result.includes("font-icon-")).toBe(true)
})

it("finds center aligned", () => {
    expect(result.includes("center aligned")).toBe(true)
})

it("does not find github", () => {
    expect(result.includes("github")).toBe(false)
})
