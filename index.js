let expression = new RegExp(/\=.*/, "gmi")
let string = "https://www.youtube.com/watch?v=esX7SFtEjHg"

let search = expression.exec(string)[0]
let base = string.replace(expression, "")

console.log(search.substring(1))