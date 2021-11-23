import {
    utils
} from "../utils.js";
import {
    select,
    templates
} from "../settings.js";

class Home {
    constructor(id, data) {
        const thisHome = this;

        thisHome.id = id;
        thisHome.data = data;

        thisHome.renderMusic();
    }

    renderMusic() {
        const thisHome = this

        const generateHTML = templates.homeSong(thisHome.data);
        thisHome.element = utils.createDOMFromHTML(generateHTML);

        const songContainer = document.querySelector(select.containerOf.homeSong);
        songContainer.appendChild(thisHome.element);
    }
}

export default Home;