let friends = ["maddi", "shaun", "arif"]
console.log(friends)

friends[1] = "shaan"
console.log(friends)
console.log(friends.length)

let friends_info = ["maddi", 26, "shaan", 27, "arif", 30]
console.log(friends_info)
console.log(friends_info.length)
console.log(friends.join(";"))
console.log(friends.indexOf("ariff"))
console.log(friends.concat(friends_info))

let result = friends.push("shahrin")
console.log(result)
console.log(friends)

result = friends.pop()
console.log(result)
console.log(friends)
