/* eslint-disable no-undef */
import {
    select,
    templates
} from "../settings.js";
import {
    utils
} from "../utils.js";

class Discover {
    constructor(songList) {
        const thisDiscover = this;

        thisDiscover.songs = songList;
        thisDiscover.renderSong();
    }

    renderSong() {
        const thisDiscover = this;

        const randomSong = thisDiscover.songs[Math.floor(Math.random() * thisDiscover.songs.length)];


        const generateHTML = templates.discoverSong(randomSong);
        thisDiscover.element = utils.createDOMFromHTML(generateHTML);

        const songContainer = document.querySelector(select.containerOf.discover);
        songContainer.appendChild(thisDiscover.element);

        GreenAudioPlayer.init({
            selector: '.player-discover',
            stopOthersOnPlay: true
        });
    }
}

export default Discover;