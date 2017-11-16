const {
    read,
    purify
} = require("./common")

const content = read("delimited/delimited.html"),
    css = read("delimited/delimited.css"),
    result = purify(content, css)

it("removes the extra comma", () => {
    let commaCount = result.split("").reduce(
        (total, chr) => {
            if (chr === ",") {
                return total + 1
            }

            return total
        },
        0
    )

    expect(commaCount).toBe(1)
})

it("finds h1", () => {
    expect(result.includes("h1")).toBe(true)
})

it("finds p", () => {
    expect(result.includes("p")).toBe(true)
})

it("removes .unused-class-name", () => {
    expect(result.includes(".unused-class-name") === false).toBe(true)
})
