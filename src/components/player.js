/*
Design Credits : https://dribbble.com/shots/6437042-Music-App-UI
Also I couldn't find any open music API
so credits to 
https://codepen.io/JavaScriptJunkie/details/qBWrRyg
to make his repo public and make the songs easily accesible
also I used his UI as inspiration too
*/

import { createContext } from "react";

export const tracks = [
  {
    name: "For my hand",
    artist: "Burna Boy ft Ed Sheeran",
    cover:
      "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(15).jpeg",
    source:
      "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Burna-Boy-For-My-Hand-ft-Ed-Sheeran-file-1-(JustNaija.com).mp3",
    url: "",
    favorited: false,
  },
  {
    name: "Sun and Moon",
    artist: "Anees",
    cover:
      "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/anees-sun-and-moon.png",
    source:
      "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Anees%20-%20sun%20and%20moon%20-%20(SongsLover.com).mp3",
    url: "",
    favorited: true,
  },
  {
    name: "Happier than ever",
    artist: "Billie Ellish",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/billie-ellish-happier-than-ever.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Billie%20Ellish%20-%20Happier%20Than%20Ever%20-%20(SongsLover.com).mp3",
    url: "",
    favorited: false,
  },
  {
    name: "Common Person",
    artist: "Burna Boy",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(14).jpeg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Burna-Boy-Common-Person-file-1-(JustNaija.com).mp3",
    url: "",
    favorited: false,
  },
  {
    name: "Survive The Night",
    artist: "Chris Brown",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/chris-brown-survive.jpg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Chris%20Brown%20-%20Survive%20The%20Night%20-%20(SongsLover.com).mp3",
    url: "",
    favorited: true,
  },
  {
    name: "Audio ft. Sia, Diplo, Labrinth",
    artist: "LSD",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(11).jpeg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/LSD%20-%20Audio%20(feat.%20Sia_%20Diplo%20%26%20Labrint)%20-%20(www.SongsLover.club).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Texts Go Green",
    artist: "Drake",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/drake-text.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Drake%20-%20Texts%20Go%20Green%20-%20(SongsLover.com).mp3",
    url: "",
    favorited: true,
  },
  {
    name: "Kingdom Come",
    artist: "Jon Bellion",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/jon-bellion-kingdom-come.jpg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Jon_Bellion_-_Kingdom_Come.mp3",
    url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
    favorited: false,
  },
  {
    name: "Robbery",
    artist: "Juice WRLD",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/robbery.jpg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Juice-WRLD-Robbery-via-Naijafinix.com_.mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Beautiful Love",
    artist: "Justin Beiber",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/beautiful-love.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Justin%20Bieber%20-%20Beautiful%20Love%20(Free%20Fire)%20-%20(SongsLover.com).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Intentions",
    artist: "Justin Beiber ft Quavo",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/intentions.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Justin%20Bieber%20-%20Intentions%20(feat.%20Quavo)%20-%20(SongsLover.com).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Peaches",
    artist: "Justin Beiber",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/peaches.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Justin%20Bieber%20-%20Peaches%20(Remix)%20%5Bfeat.%20Ludacris%20-%20(SongsLover.com).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Audio ft. Sia, Diplo, Labrinth",
    artist: "LSD",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(11).jpeg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/LSD%20-%20Audio%20(feat.%20Sia_%20Diplo%20%26%20Labrint)%20-%20(www.SongsLover.club).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Girls Like You",
    artist: "Maroon 5 ft Cardi B",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/girls-like-you.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Maroon%205%20-%20Girls%20Like%20You%20(feat.%20Cardi%20B)%20-%20(www.SongsLover.club).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Lost",
    artist: "Maroon 5",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/lost.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Maroon5-%20Lost%20-%20(SongsLover.com).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Memories",
    artist: "Maroon 5 ft Nipsey Huss",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/lost.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Memories%20Remix%20(feat.%20Nipsey%20Huss%20-%20(SongsLover.com).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Clouds",
    artist: "NF",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/NF-clouds.jpg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/NF-CLOUDS-%20(SongsLover.com).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Calm Down",
    artist: "Rema ft Selena Gomez",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(18).jpeg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Rema-Calm-Down-Remix-ft-Selena-Gomez-(JustNaija.com).mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Chandelier",
    artist: "Sia",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(9).jpeg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Sia%20-%20Chandelier.mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Cheap Thrills",
    artist: "Sia",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/cheap-thrills.jpg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Sia%20-%20Cheap%20Thrills.mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Everyday is Christmas",
    artist: "Sia",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(10).jpeg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Sia%20-%20Everyday%20Is%20Christmas.mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Unstoppable",
    artist: "Sia",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/cheap-thrills.jpg",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Sia-Unstoppable.mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "Blank Space",
    artist: "Taylor Swift",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/blank-space.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Taylor%20Swift%20-%20Blank%20Space.mp3",
    url: " ",
    favorited: false,
  },
  {
    name: "End Game",
    artist: "Taylor Swift",
    cover:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/end-game.png",
    source:
    "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Taylor%20Swift%20-%20End%20Game.mp3",
    url: " ",
    favorited: false,
  },
];

export const player = new Audio(tracks[0].source);
player.setAttribute("preload", "metadata");

export const userOptions = createContext({
  shuffle: false,
  repeat: false,
});
