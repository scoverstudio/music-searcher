/* eslint-disable no-undef */
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

        thisSearch.buttonSearch.addEventListener('click', function (event) {
            event.preventDefault();
            const currentWordOfName = thisSearch.inputName.value;
            const currentWordOfCategory = thisSearch.inputCategory.value;
            const filteredSongs = [];
            thisSearch.numberOfFound.textContent = filteredSongs.length;

            document.getElementById('music-search').innerHTML = "";

            if (thisSearch.inputName.value !== "") {
                for (let song of thisSearch.songs) {
                    const title = song.title;
                    if (title.toLowerCase().indexOf(currentWordOfName) !== -1) {
                        filteredSongs.push(song);
                    }
                }
                thisSearch.numberOfFound.textContent = filteredSongs.length;
                thisSearch.renderSongs(filteredSongs);
            }
            if (thisSearch.inputCategory.value !== "") {
                for (let song of thisSearch.songs) {
                    for (let category of song.categories) {
                        if (category.toLowerCase().indexOf(currentWordOfCategory) !== -1) {
                            filteredSongs.push(song);
                        }
                    }
                }
                thisSearch.numberOfFound.textContent = filteredSongs.length;
                thisSearch.renderSongs(filteredSongs);
            }
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