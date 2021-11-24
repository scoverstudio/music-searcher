import {
    select,
    templates
} from "../settings.js";
import {
    utils
} from "../utils.js";

class Search {
    constructor(id, data) {
        const thisSearch = this;

        thisSearch.id = id;
        thisSearch.data = data;
        console.log(thisSearch.data);



        thisSearch.getElements();
        thisSearch.renderSongs();
        thisSearch.searchSongs();
    }

    getElements() {
        const thisSearch = this;

        thisSearch.song = document.querySelector(select.search.searchedSong);
        thisSearch.input = document.querySelector(select.search.input);
        thisSearch.songTitles = document.querySelectorAll(select.search.title);
        thisSearch.numberOfFound = document.querySelector(select.search.numberOfSongs);
    }

    renderSongs() {
        const thisSearch = this;

        const generateHTML = templates.search(thisSearch.data);
        thisSearch.element = utils.createDOMFromHTML(generateHTML);

        const songContainer = document.querySelector(select.containerOf.search);
        songContainer.appendChild(thisSearch.element);
    }

    searchSongs() {
        const thisSearch = this;

        thisSearch.input.addEventListener('keyup', function (event) {
            const currentWord = event.target.value.toLowerCase();
            let numberOfFound = 0;
            const songs = [];
            console.log(thisSearch.songTitles);
            thisSearch.songTitles.forEach(element => {
                const song = element.parentElement.parentElement;

                song.style.display = 'none';

                // if (element.textContent.toLowerCase().indexOf(currentWord) !== -1) {
                //     song.style.display = 'block'
                // } else {
                //     song.style.display = 'none'
                // }
                // if (song.style.display === 'block') {
                //     songs.push(song);
                // } else {}
                // thisSearch.numberOfFound.textContent = songs.length;
                // console.log(songs);
            })
        });


    }
}
export default Search;