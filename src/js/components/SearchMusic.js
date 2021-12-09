import {
    select,
    templates
} from "../settings.js";
import {
    utils
} from "../utils.js";

class SearchMusic {
    constructor(songList) {
        const thisSearch = this;

        thisSearch.songs = songList;

        thisSearch.getElements();
        thisSearch.searchSongs();
    }

    getElements() {
        const thisSearch = this;

        thisSearch.songsDOM = document.querySelectorAll(select.search.searchedSong);
        thisSearch.inputName = document.querySelector(select.search.inputName);
        thisSearch.inputCategory = document.querySelector(select.search.inputCategory);
        thisSearch.numberOfFound = document.querySelector(select.search.numberOfSongs);
        thisSearch.buttonSearch = document.querySelector(select.search.button);
    }

    searchSongs() {
        const thisSearch = this;
        const ifMatches = (source, target) => source.toLowerCase().indexOf(target.toLowerCase()) !== -1;

        thisSearch.buttonSearch.addEventListener('click', function (event) {
            event.preventDefault();
            const titlePhrase = thisSearch.inputName.value;
            const categoryPhrase = thisSearch.inputCategory.value;
            thisSearch.numberOfFound.parentNode.classList.add('active');

            document.querySelector(select.homeSong.songList).innerHTML = "";
            let filteredSongs = (titlePhrase || categoryPhrase) ? thisSearch.songs : [];

            if (titlePhrase) {
                filteredSongs = filteredSongs.filter(song => ifMatches(song.title, titlePhrase));
            }
            if (categoryPhrase) {
                filteredSongs = filteredSongs.filter(song => song.categories.some(category => ifMatches(category, categoryPhrase)));
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

export default SearchMusic;