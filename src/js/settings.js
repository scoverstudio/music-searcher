const baseUrl = '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : '');

export const settings = {
    db: {
        url: `${baseUrl}/songs`,
        songs: 'songs',
        id: 'id',
        title: 'title',
        author: 'author',
        fileName: 'filename',
        categories: 'categories',
        ranking: 'ranking',
    }
};

export const select = {
    templateOf: {
        homeWidget: '#template-home-widget',
        searchWidget: '#template-search-widget',
        discoverWidget: '#template-discover-widget'
    },
    containerOf: {
        pages: '#pages',
        homeSong: '#home .music-list',
        search: '#search .music-search',
        discover: '#discover .music-discover'
    },
    nav: {
        links: '.main-nav a',
    },
    homeSong: {
        songList: '#music-search'
    },
    search: {
        searchedSong: '.music-search .song',
        numberOfSongs: '.numberOfFound span',
        inputName: '.searchInput .input-name',
        inputCategory: '.searchInput .input-category',
        title: '.search h3',
        button: '.searchInput a',
    }
};

export const classNames = {
    pages: {
        active: 'active',
    },
    nav: {
        active: 'active'
    }
};

export const templates = {
    homeSong: Handlebars.compile(
        document.querySelector(select.templateOf.homeWidget).innerHTML
    ),
    search: Handlebars.compile(
        document.querySelector(select.templateOf.searchWidget).innerHTML
    ),
    discoverSong: Handlebars.compile(
        document.querySelector(select.templateOf.discoverWidget).innerHTML
    )
};