const {
    read,
    purify
} = require("./common")

const content = read("media_queries/media_queries.html"),
    css = read("media_queries/media_queries.css"),
    result = purify(content, css)

it("finds .media-class", () => {
    expect(result.includes(".media-class")).toBe(true)
})

it("finds .alone", () => {
    expect(result.includes(".alone")).toBe(true)
})

it("finds #id-in-media", () => {
    expect(result.includes("#id-in-media")).toBe(true)
})

it("finds body", () => {
    expect(result.includes("body")).toBe(true)
})

it("removes .unused-class", () => {
    expect(result.includes(".unused-class")).toBe(false)
})

it("removes the empty media query", () => {
    expect(result.includes("66666px")).toBe(false)
})
