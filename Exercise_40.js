"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
        tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album(`Artist1`, `Album1`);
const album2 = make_album(`Artist2`, `Album2`, 14);
const album3 = make_album(`Artist3`, `Album3`, 10);
console.log(album1);
console.log(album2);
console.log(album3);
