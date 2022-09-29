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
      "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/assets/img/images%20(10).jpeg",
    source:
      "https://raw.githubusercontent.com/Princeleo400/music_player/master/src/audio/Burna-Boy-For-My-Hand-ft-Ed-Sheeran-file-1-(JustNaija.com).mp3",
    url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
    favorited: false,
  },
  {
    name: "Sun and Moon",
    artist: "Anees",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
    url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
    favorited: true,
  },
  {
    name: "Happier than ever",
    artist: "Bikkie Ellish",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
    url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
    favorited: false,
  },
  {
    name: "Common Person",
    artist: "Burna Boy",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
    url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
    favorited: false,
  },
  {
    name: "Survive The Night",
    artist: "Chris Brown",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
    url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
    favorited: true,
  },
  {
    name: "Genius ft. Sia, Diplo, Labrinth",
    artist: "LSD",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
    url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
    favorited: false,
  },
  {
    name: "Texts Go Green",
    artist: "Drake",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
    url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
    favorited: true,
  },
  {
    name: "Kingdom Come",
    artist: "Jon Bellion",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
    url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
    favorited: false,
  },
  {
    name: "Robbery",
    artist: "Juice WRLD",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Beautiful Love",
    artist: "Justin Beiber",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Intentions",
    artist: "Justin Beiber ft Quavo",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Peaches",
    artist: "Justin Beiber",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Audio ft. Sia, Diplo, Labrinth",
    artist: "LSD",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Girls Like You",
    artist: "Maroon 5 ft Cardi B",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Lost",
    artist: "Maroon 5",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Memories",
    artist: "Maroon 5 ft Nipsey Huss",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Clouds",
    artist: "NF",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Calm Down",
    artist: "Rema ft Selena Gomez",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Chandelier",
    artist: "Sia",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Cheap Thrills",
    artist: "Sia",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Everyday is Christmas",
    artist: "Sia",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Unstoppable",
    artist: "Sia",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "Blank Space",
    artist: "Taylor Swift",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
  {
    name: "End Game",
    artist: "Taylor Swift",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false,
  },
];

export const player = new Audio(tracks[0].source);
player.setAttribute("preload", "metadata");

export const userOptions = createContext({
  shuffle: false,
  repeat: false,
});
