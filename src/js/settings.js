export const select = {
    templateOf: {
        homeWidget: '#template-home-widget'
    },
    containerOf: {
        pages: '#pages',
        homeSong: '#home .music-list',
        search: '#search',
        discover: '#discover'
    },
    nav: {
        links: '.main-nav a',
    },
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
}