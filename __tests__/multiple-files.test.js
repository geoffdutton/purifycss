const {
    read,
    purify
} = require("./common")

const content = ["**/test_examples/multiple_files/*.+(js|html)"],
    css = ["**/test_examples/multiple_files/*.css"],
    result = purify(content, css)

it("finds .taylor-swift", () => {
    expect(result.includes(".taylor-swift")).toBe(true)
})

it("finds .blank-space", () => {
    expect(result.includes(".blank-space")).toBe(true)
})

it("removes .shake-it-off", () => {
    expect(result.includes(".shake-it-off")).toBe(false)
})
