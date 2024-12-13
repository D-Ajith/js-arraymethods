// Q1).Manage a Guest List
var guest= ["Alice", "Bob", "Charlie", "David"]
guest.unshift("Ajith")
guest.pop()
if(guest.includes("Bob")){
    console.log(guest)
}else{
    console.log("guest is not found")
}

// Q2). Generate a Sentence
var str="Learn,Practice,Improve"
console.log(str.split(","))
console.log(str.split(",").reverse().join(''))

//Q3).Create a Playlist
var playlist1=["Song1", "Song2", "Song3"] 
var playlist2=["Song4", "Song5"]
var song=playlist1.concat(playlist2)
song.shift()
song.push("Song6")
console.log(song)

//Q4).Extract Favorite Movies
var movies=["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
var newmovie= ["The Matrix", "The Godfather"]
var movie=movies.slice(1,4).concat(newmovie).reverse()
console.log(movie)

//Q5). String Operations on Names
var string="John,Doe,Jane,Smith"
if(string.includes("John")){
var strings=string.split(",").reverse().join(" ")
console.log(strings)
}else{
    console.log("John is not found")
}

//Q6).Length-Based Manipulation
var num=[1, 2, 3, 4, 5]
var nums=num.shift()
num.push(6,7)
console.log(num)
console.log(num.length)

//Q7) Shopping Cart Operations
var cart=["Milk", "Bread", "Eggs", "Butter"]
if(cart.includes("Eggs")){
    cart.pop()
    cart.push( "Cheese","Juice")
    console.log(cart)
}else{
    console.log("Eggs is not found")
}

//Q8). Rearrange and Combine Names
var name1=["Alice", "Bob", "Charlie"]
var name2= ["David", "Eve"]
name1.reverse().unshift("Frank")
console.log(name1.concat(name2))

//Q9).Shopping Cart Operations
var carts=["Milk", "Bread", "Eggs", "Butter"]
shop=carts.indexOf("Eggs")
console.log(shop)
carts.splice(shop,1,"Cheese")
carts.unshift("Juice")
console.log(carts)