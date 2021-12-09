import {
    utils
} from "../utils.js";
import {
    select,
    templates
} from "../settings.js";

class HomeSong {
    constructor(data) {
        const thisSong = this;

        thisSong.data = data;

        thisSong.renderMusic();
    }

    renderMusic() {
        const thisSong = this;

        const generateHTML = templates.homeSong(thisSong.data);
        thisSong.element = utils.createDOMFromHTML(generateHTML);

        const songContainer = document.querySelector(select.containerOf.homeSong);
        songContainer.appendChild(thisSong.element);
    }
}

export default HomeSong;