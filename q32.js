var current_users = ["Anus","Khalida","asim","rashid","sami"];
var new_users = ["Rohan","Khalida","Zara","Raim","Maaz"];

for(var i = 0; i < new_users.length;i++) {
        if(current_users.includes(new_users[i])) {
            console.log(new_users[i], "this user name is already exist, please try another username")
        } else {
            console.log("This username is available");
        }
}