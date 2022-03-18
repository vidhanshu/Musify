var curr = 0;

const musicApi = [{
    img: "https://images.indianexpress.com/2021/07/shershaah-song-sidharth-kiara.jpg",
    name: "Raatan lambiya lambiya - jubin",
    src: new Audio("/musics/Raataan Lambiyan  Official Video  Shershaah  Sidharth  Kiara  Tanishk B Jubin Nautiyal  Asees.mp3")
}, {
    img: "https://i.postimg.cc/50J2qMw2/Shiddat-barbadiya.jpg",
    name: "barbadiya-shiddat-best-movie",
    src: new Audio("/musics/Barbaadiyan.mp3")
}, {
    img: "https://i.postimg.cc/zv5HBgdp/Shiddat.jpg",
    name: "shiddat title track",
    src: new Audio("/musics/shiddat.mp3")
}, {
    img: "https://th.bing.com/th/id/OIP.M2VW1xDBm17taERG1r0NQwHaG3?pid=ImgDet&rs=1",
    name: "Khamonshiyan-arijit",
    src: new Audio("/musics/Khamoshiyan Full Video  Title TrackArijit SinghAli Fazal Sapna Pabbi Gurmeet C.mp3")
}, {
    img: "https://th.bing.com/th/id/OIP.zlSlLhE4MyxfAc5DiTML8wHaJT?pid=ImgDet&rs=1",
    name: "Wafa na ras ayi - jubin nautiyal",
    src: new Audio("/musics/Wafa Na Raas Aayee Song Jubin Nautiyal FtHimansh KArushi N Meet BrosRashmi VAshish P Bhushan K.mp3")
}, {
    img: "https://cdn.siasat.com/wp-content/uploads/2020/04/Jubin-nautiyal-.jpg",
    name: "Meri jindgai hai tu - jubin",
    src: new Audio("/musics/Meri Zindagi Hai Tu Song Satyameva Jayate 2  John A Divya K  Rochak ft Jubin Neeti  Manoj M.mp3")
}, {
    img: "https://www.newsbugz.com/wp-content/uploads/2018/08/Jubin-Nautiyal-Images-2-700x875.jpg",
    name: "Barsat ki dhun - jubin nautiyal",
    src: new Audio("/musics/Barsaat Ki Dhun Song  Rochak K Ft Jubin N  Gurmeet C Karishma S Rashmi V  Ashish P  Bhushan K.mp3")
}, {
    img: "https://www.newsbugz.com/wp-content/uploads/2018/08/Jubin-Nautiyal-Images-2-700x875.jpg",
    name: "Khushi Jab Bhi Teri - Jubin Nautiyal - jubin nautiyal",
    src: new Audio("/musics/Khushi Jab Bhi Teri Song Jubin Nautiyal Khushalii Kumar  Rochak KohliA M Turaz  Bhushan K.mp3")
}, {
    img: "https://www.newsbugz.com/wp-content/uploads/2018/08/Jubin-Nautiyal-Images-1-700x701.jpg",
    name: "Hummava mere - jubin nautiyal",
    src: new Audio("/musics/Official Video Humnava Mere Song  Jubin Nautiyal  Manoj Muntashir  Rocky  Shiv  Bhushan Kumar.mp3")
}, {
    img: "https://i2.cinestaan.com/image-bank/1500-1500/155001-156000/155863.jpg",
    name: "Chitthi Pate pe aye na - jubin nautiyal",
    src: new Audio("/musics/Chitthi Video Song  Feat Jubin Nautiyal  Akanksha Puri  Kumaar  New Song 2019  TSeries.mp3")
}, {
    img: "https://i.scdn.co/image/98961bdd69353c5257d64acee37451987f26fbb1",
    name: "Dil galti kar baitha hai - jubin nautiyal",
    src: new Audio("/musics/Dil Galti Kar Baitha Hai  Meet Bros Ft Jubin Nautiyal  Mouni Roy  Manoj M  Ashish P  Bhushan K.mp3")
}, {
    img: "https://www.dailyexcelsior.com/wp-content/uploads/2021/04/JUBIN.jpg",
    name: "Bewafa Tera Muskurana - jubin nautiyal",
    src: new Audio("/musics/Bewafa Tera Muskurana Song  Meet Bros Ft Jubin Nautiyal Himansh KAkanksha PRashmi V Bhushan K.mp3")
}, {
    img: "https://th.bing.com/th/id/OIP.lCZjFLks6W0Lhj8AH6q5VgHaEK?pid=ImgDet&rs=1",
    name: "Lut gaye - jubin nautiyal",
    src: new Audio("/musics/Lut Gaye Full Song Emraan Hashmi Yukti  Jubin N Tanishk B Manoj M  Bhushan K  RadhikaVinay.mp3")
}, {
    img: "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/03/Tadap-1.jpg",
    name: "Tumse Bhi Zyada - Tadap - Arijit Singh, Pritam",
    src: new Audio("/musics/Tumse Bhi Zyada Lyrical  Tadap  Ahan Shetty Tara Sutaria  Pritam Arijit Singh  3 Dec 21.mp3")
}, {
    img: "https://th.bing.com/th/id/R.f4b7eb98c92c92c7647e65076d90966d?rik=ZXA3b%2bzHPtoYcw&riu=http%3a%2f%2fp2.music.126.net%2fI71Lp23iGZ7FH9SwGzMYuw%3d%3d%2f109951166712030399.jpg&ehk=HIm5d7upNr9j9F%2flGKa0IWJW6aDQdaAx7uxoaKRABcw%3d&risl=&pid=ImgRaw&r=0",
    name: "Tu Mera Hogaya Hai - Tadap - Jubin Nautiyal, Pritam",
    src: new Audio("/musics/Tu Mera Hogaya Hai  Full Video  Tadap  Ahan Shetty Tara Sutaria  Pritam Jubin Nautiyal.mp3")
}, {
    img: "https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/Darshan-Raval-image.jpg",
    name: " Tere Siva Jag Mein Cafe Edit - Tadap - Darshan Raval, Pritam",
    src: new Audio("/musics/Tere Siva Jag Mein Cafe Edit  Audio  Tadap  Ahan Shetty Tara Sutaria  Pritam Darshan Raval.mp3")
}]

const playButton = document.querySelector(".play");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const title = document.querySelector(".title");
const image = document.querySelector(".img");
const seek = document.querySelector(".seek-bar");
const timer = document.querySelector(".duration");
const volumeTitle = document.querySelector(".volume-title");
const volumeSeeker = document.querySelector(".volume-seeker");
const playbackTitle = document.querySelector(".playback-title");
const playbackSeeker = document.querySelector(".playback-seeker");
const animation = document.querySelector(".animations");
const Download = document.querySelector(".download-button");
const menuPage = document.querySelector(".full-size-nav-menu");
const menuPageClose = document.querySelector(".close");
const menuPageOpen = document.querySelector(".open");
const favourite = document.querySelector("#fav");
const favouriteSongList = document.querySelector(".fav-song-list");
const blurFav = document.querySelector('.favourite-songs');





window.onload = function() {
    if (localStorage.getItem(musicApi[curr].name) === "fav") {
        favourite.style.color = "yellow";
        favourite.classList.replace("fa", "fas");
        favourite.classList.replace("fa-star-o", "fa-star");
        favourite.title = "Added to favourite";
    } else {
        favourite.style.color = "white";
        favourite.classList.replace("fas", "fa");
        favourite.classList.replace("fa-star", "fa-star-o");
        favourite.title = "Add to favourite";
    }

    title.innerHTML = musicApi[curr].name;
    Download.setAttribute('href', musicApi[curr].src.src);
    Download.setAttribute('download', musicApi[curr].name);
}

volumeSeeker.addEventListener('change', (e) => {
    volumeTitle.innerHTML = Math.trunc(e.target.value * 100);
    musicApi[curr].src.volume = e.target.value;
})

playbackSeeker.addEventListener('change', (e) => {
    playbackTitle.innerHTML = e.target.value + " x";
    musicApi[curr].src.playbackRate = e.target.value;
})

seek.addEventListener('change', () => {
    seek.setAttribute("max", `${musicApi[curr].src.duration}`)
    musicApi[curr].src.currentTime = seek.value;
})


menuPageClose.addEventListener('click', () => {
    menuPage.style.width = "0"
})
menuPageOpen.addEventListener('click', () => {
    menuPage.style.width = "100vw";
})

const fav = (elm) => {
    if (elm.className === "fa fa-star-o") {
        elm.style.color = "yellow";
        elm.classList.replace("fa", "fas");
        elm.classList.replace("fa-star-o", "fa-star");
        elm.title = "Added to favourite";
        localStorage.setItem(musicApi[curr].name, "fav")
    } else {
        favourite.title = "Add to favourite";
        elm.style.color = "white";
        elm.classList.replace("fas", "fa");
        elm.classList.replace("fa-star", "fa-star-o");
        localStorage.setItem(musicApi[curr].name, "unFav")
    }
}

const favouriteSongs = () => {
    menuPageClose.click();
    if (blurFav.style.display === "none") {
        blurFav.style.display = "block";
        var txt = '';
        for (let i = 0; i < musicApi.length; i++) {
            if (localStorage.getItem(musicApi[i].name) == "fav") {
                txt += `<li>${musicApi[i].name}</li>`;
            }
        }
        favouriteSongList.innerHTML = (txt.length) ? txt : "<li>Not Available</li>";
    } else {
        blurFav.style.display = "none";
    }
}

document.querySelector(".band-kar").addEventListener('click', favouriteSongs);
var idToSTop;
const play = () => {

    if (localStorage.getItem(musicApi[curr].name) === "fav") {
        favourite.title = "Added to favourite";
        favourite.style.color = "yellow";
        favourite.classList.replace("fa", "fas");
        favourite.classList.replace("fa-star-o", "fa-star");
    } else {
        favourite.title = "Add to favourite";
        favourite.style.color = "white";
        favourite.classList.replace("fas", "fa");
        favourite.classList.replace("fa-star", "fa-star-o");
    }

    image.style.animation = "rotate 6s linear infinite";

    animation.style.display = "flex";

    playButton.childNodes[1].classList.replace('fa-play', 'fa-pause')

    playButton.classList.replace('fa-play', 'fa-pause');

    musicApi[curr].src.play();

    // musicApi[curr].src.oncanplaythrough = () => {
    // } tells if full audio can be play ior not

    musicApi[curr].src.volume = volumeSeeker.value; //to set the volume whatever we had set on previous song

    image.src = musicApi[curr].img; //to set the image

    title.innerHTML = musicApi[curr].name; //to set the song name in marquee

    seek.setAttribute("max", `${musicApi[curr].src.duration}`) //to set the max of seeker dynamically depending upon the duration og the song

    idToSTop = setInterval(() => { //for live seeking

        seek.value = musicApi[curr].src.currentTime; //automatically move the seeker depending upon the song current timw

        const currentTime = musicApi[curr].src.currentTime;
        const durationOfSong = musicApi[curr].src.duration;

        let currentMinute = Math.trunc((currentTime / 60));
        let currentSeconds = Math.trunc((currentTime % 60));

        currentMinute = (currentMinute < 10) ? `0${currentMinute}` : currentMinute;
        currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds : currentSeconds;

        let durationMinute = Math.trunc(durationOfSong / 60)
        let durationSeconds = Math.trunc(durationOfSong % 60);

        durationMinute = (durationMinute < 10) ? `0${durationMinute}` : durationMinute;
        durationSeconds = (durationSeconds < 10) ? `0${durationSeconds}` : durationSeconds;
        durationSeconds
        exactTime = (`${currentMinute}:${currentSeconds}/${durationMinute}:${durationSeconds}`);
        timer.innerHTML = (exactTime === '00:00/NaN:NaN') ? "wait" : exactTime;
        if (currentTime === durationOfSong) {
            right();
        }
    }, 1000);
}



const pause = () => {

    clearInterval(idToSTop); //optimisation
    image.style.animation = "none";
    animation.style.display = "none";
    playButton.childNodes[1].classList.replace('fa-pause', 'fa-play');
    musicApi[curr].src.pause()
}

const togglePlayPause = () => {
    (musicApi[curr].src.paused) ? play(): pause();
}

playButton.addEventListener('click', togglePlayPause)


const left = () => { //left song

    if (musicApi[curr].src.readyState) {
        pause();
    }
    curr = (curr == 0) ? musicApi.length - 1 : curr - 1;

    title.innerHTML = musicApi[curr].name;
    Download.setAttribute('href', musicApi[curr].src.src);
    Download.setAttribute('download', musicApi[curr].name);


    musicApi.map(e => { //turning off all other songs
        e.src.pause();
        e.src.currentTime = 0; //setting their current time to 0 since they were starting from the last current time state
    })
    play();
}

const right = () => { //right song 
    curr = (curr == musicApi.length - 1) ? 0 : curr + 1;

    title.innerHTML = musicApi[curr].name;
    Download.setAttribute('href', musicApi[curr].src.src);
    Download.setAttribute('download', musicApi[curr].name);


    musicApi.map(e => { //turning off all other songs
        e.src.pause();
        e.src.currentTime = 0; //setting their current time to 0 since they were starting from the last current time state
    })
    play();
}

leftButton.addEventListener('click', () => {
    left();
})

rightButton.addEventListener('click', () => {
    right();
})