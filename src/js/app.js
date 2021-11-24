import {
    classNames,
    select,
    settings
} from "./settings.js";
import HomeSong from "./components/HomeSong.js";
import Search from "./components/Search.js";

{

    const app = {
        initPages: function () {
            const thisApp = this;

            thisApp.pages = document.querySelector(select.containerOf.pages).children;
            thisApp.navLinks = document.querySelectorAll(select.nav.links);

            thisApp.activatePage(thisApp.pages[0].id);

            for (let link of thisApp.navLinks) {
                link.addEventListener('click', function (event) {
                    const clickedElement = this;
                    event.preventDefault();

                    const id = clickedElement.getAttribute('href').replace('#', '');
                    thisApp.activatePage(id);
                });
            }
        },

        activatePage: function (pageId) {
            const thisApp = this;

            for (let page of thisApp.pages) {
                page.classList.toggle(classNames.pages.active, page.id == pageId);
            }

            for (let link of thisApp.navLinks) {
                link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
            }
        },

        initSong: function () {
            const thisApp = this;

            for (let songData in thisApp.data.songs) {
                new HomeSong(thisApp.data.songs[songData].id, thisApp.data.songs[songData])
                new Search(thisApp.data.songs[songData].id, thisApp.data.songs[songData])
            }

            GreenAudioPlayer.init({
                selector: '.player',
                stopOthersOnPlay: true
            });
        },

        initData: function () {
            const thisApp = this;

            const url = settings.db.url + '/' + settings.db.songs;
            thisApp.data = {};

            fetch(url)
                .then(function (rawResponse) {
                    return rawResponse.json();
                })
                .then(function (parsedResponse) {
                    thisApp.data.songs = parsedResponse;
                    thisApp.initSong();
                });

        },

        init: function () {
            const thisApp = this;

            thisApp.initPages();
            thisApp.initData();
        }
    }
    app.init();
}