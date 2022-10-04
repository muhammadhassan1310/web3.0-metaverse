function makeAlbum(artistName,albumTitle,tracks) {
    this.artistName = artistName;
    this.albumTitle = albumTitle;
    if(tracks) {
       this.tracks = tracks; 
    }
}

console.log(new makeAlbum("Shehzad Roy","Teri Soorat"))
console.log(new makeAlbum("Ali Zafar","Masty"))
console.log(new makeAlbum("Atif Aslam","Jal Pari",20))