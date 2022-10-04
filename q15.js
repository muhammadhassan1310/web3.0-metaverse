// Invite some people to dinner.
guests = ['kamil', 'fahad', 'zakir']

name = guests[0]
console.log(name + ", please come to dinner.")

name = guests[1]
console.log(name + ", please come to dinner.")

name = guests[2]
console.log(name + ", please come to dinner.")

name = guests[1]
console.log("\nSorry, " + name + " can't make it to dinner.")

// fahad can't make it! Let's invite Gary instead.
delete guests[1]
guests[1] = "Mahad";

// Print the invitations again.
name = guests[0]
console.log("\n" + name + ", please come to dinner.")

name = guests[1]
console.log(name + ", please come to dinner.")

name = guests[2]
console.log(name + ", please come to dinner.")
