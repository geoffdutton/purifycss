const {
    read,
    purify
} = require("./common")

const content = read("prefixed_selectors/prefixed_selectors.html"),
    css = read("prefixed_selectors/prefixed_selectors.css"),
    result = purify(content, css)

it("finds .grid-row-1", () => {
    expect(result.includes(".grid-row-1")).toBe(true)
})

it("removes .grid-row-2", () => {
    expect(result.includes(".grid-row-2")).toBe(false)
})
