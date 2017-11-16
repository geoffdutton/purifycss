const {
    read,
    purify
} = require("./common")

const content = read("simple/simple.js"),
    css = read("simple/simple.css")

it("can use a callback", () => {
    purify(content, css, result => {
        expect(result.includes(".triple-simple-class")).toBe(true)
    })
})
