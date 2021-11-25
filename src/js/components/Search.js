import {
    select,
    templates
} from "../settings.js";
import {
    utils
} from "../utils.js";

class Search {
    constructor(songList) {
        const thisSearch = this;

        thisSearch.songs = songList;

        thisSearch.getElements();
        thisSearch.searchSongs();
    }

    getElements() {
        const thisSearch = this;

        thisSearch.songsDOM = document.querySelectorAll(select.search.searchedSong);
        thisSearch.input = document.querySelector(select.search.input);
        thisSearch.numberOfFound = document.querySelector(select.search.numberOfSongs);
        thisSearch.buttonSearch = document.querySelector(select.search.button);
    }



    searchSongs() {
        const thisSearch = this;

        thisSearch.buttonSearch.addEventListener('click', function (event) {
            event.preventDefault();
            const currentWord = thisSearch.input.value;
            const filteredSongs = []

            document.getElementById('music-search').innerHTML = "";

            for (let song of thisSearch.songs) {
                const title = song.title;
                if (title.toLowerCase().indexOf(currentWord) !== -1) {
                    filteredSongs.push(song);
                }
            }
            thisSearch.numberOfFound.textContent = filteredSongs.length;
            thisSearch.renderSongs(filteredSongs);
        });
    }

    renderSongs(filteredSongs) {
        const thisSearch = this;

        for (let song of filteredSongs) {
            const generateHTML = templates.search(song);
            thisSearch.element = utils.createDOMFromHTML(generateHTML);

            const songContainer = document.querySelector(select.containerOf.search);
            songContainer.appendChild(thisSearch.element);
        }
        GreenAudioPlayer.init({
            selector: '.player-search',
            stopOthersOnPlay: true
        });
    }
}
export default Search;