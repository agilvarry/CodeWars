function songDecoder(song){
    return song.split("WUB").filter(w => w != '').join(' ');
}