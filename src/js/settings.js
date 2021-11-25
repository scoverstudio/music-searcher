export const select = {
    templateOf: {
        homeWidget: '#template-home-widget',
        searchWidget: '#template-search-widget'
    },
    containerOf: {
        pages: '#pages',
        homeSong: '#home .music-list',
        search: '#search .music-search',
        discover: '#discover'
    },
    nav: {
        links: '.main-nav a',
    },
    search: {
        searchedSong: '.music-search .song',
        numberOfSongs: '.numberOfFound span',
        input: '.searchInput input',
        title: '.search h3',
        button: '.searchInput a',
    }
}

export const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
        songs: 'songs',
        id: 'id',
        title: 'title',
        author: 'author',
        fileName: 'filename',
        categories: 'categories',
        ranking: 'ranking'
    }
}

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
}