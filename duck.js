proxify("img[src^='https://i.imgur.com']", 'src', 'https://i.imgur.com', 'https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/');
proxify("img[src^='https://imgur.com']", 'src', 'https://imgur.com', 'https://proxy.duckduckgo.com/iu/?u=https://imgur.com/');
proxify("img[src^='https://i.stack.imgur.com']", 'src', 'https://i.stack.imgur.com', 'https://proxy.duckduckgo.com/iu/?u=https://i.stack.imgur.com/');

proxify("a[href^='https://i.imgur.com']", 'href', 'https://i.imgur.com', 'https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/');
proxify("a[href^='https://imgur.com']", 'href', 'https://imgur.com', 'https://proxy.duckduckgo.com/iu/?u=https://imgur.com/');
proxify("a[href^='https://i.stack.imgur.com']", 'href', 'https://i.stack.imgur.com', 'https://proxy.duckduckgo.com/iu/?u=https://i.stack.imgur.com/');

function proxify(selector, attribute, search, replace) {
    document.querySelectorAll(selector).forEach(node => {
        const value = node.getAttribute(attribute);
        if(value.startsWith(search)) {
            node.setAttribute(attribute, value.replace(search, replace));
        }
    });
}

/*const images = [
    ...document.querySelectorAll("img[src^='https://i.imgur.com']"),
    ...document.querySelectorAll("img[src^='https://imgur.com']"),
    ...document.querySelectorAll("img[src^='https://i.stack.imgur.com']"),
];
images.forEach(e => {
    const src = e.getAttribute('src');
    console.log('Found imgur image : ', src);
    if(src.startsWith('https://i.imgur.com/')) {
        e.setAttribute('src', src.replace('https://i.imgur.com/', 'https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/'));
    }
    if(src.startsWith('https://imgur.com/')) {
        e.setAttribute('src', src.replace('https://imgur.com/', 'https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/'));
    }
});

const links = [
    ...document.querySelectorAll("a[href^='https://i.imgur.com']"),
    ...document.querySelectorAll("a[href^='https://imgur.com']"),
    ...document.querySelectorAll("a[href^='https://i.stack.imgur.com']"),
];
links.forEach(e => {
    const href = e.getAttribute('href');
    console.log('Found imgur link : ', href);
    if(href.startsWith('https://i.imgur.com/')) {
        e.setAttribute('href', href.replace('https://i.imgur.com/', 'https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/'));
    }
    if(href.startsWith('https://imgur.com/')) {
        e.setAttribute('href', href.replace('https://imgur.com/', 'https://proxy.duckduckgo.com/iu/?u=https://imgur.com/'));
    }
});*/

