var magicians = ["Muhammad Hassan","Ali Hassan","Ahmed Raza","Nazia Hassan"];

function makeGreat(arr) {
    for(var i = 0; i < arr.length; i++) {
    magicians[i] = `Great ${arr[i]}`;
}
return magicians;
}


function showMagicians(arr) {
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
}

showMagicians(makeGreat(magicians));