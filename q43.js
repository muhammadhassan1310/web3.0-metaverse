var magicians = ["Muhammad Hassan","Ali Hassan","Ahmed Raza","Nazia Hassan"];

var greatMagicians = [];

function makeGreat(arr) {
        for(var i = 0; i < arr.length; i++) {
        greatMagicians.push(`Great ${arr[i]}`) ;
    }
}


function showMagicians(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
makeGreat(magicians)

showMagicians(greatMagicians);
showMagicians(magicians);