import purify from "../src/purifycss"
const fs = require("fs")
const absPath = `${__dirname}/test_examples/`
const read = path => fs.readFileSync(absPath + path, "utf8")

module.exports = {
    purify,
    read
}
