applyProxy();

const observer = new MutationObserver(function (mutations) {
  applyProxy();
});

observer.observe(document.body, {
  attributeFilter: ["src", "href"],
  subtree: true,
  childList: true,
});

function proxify(selector, attribute, search, replace) {
  console.log("selector = ", selector);
  document.querySelectorAll(selector).forEach((node) => {
    console.log("node = ", node);
    const value = node.getAttribute(attribute);
    if (value.startsWith(search)) {
      node.setAttribute(attribute, value.replace(search, replace));
    }
  });
}

function applyProxy() {
  proxify(
    "img[src^='https://i.imgur.com']",
    "src",
    "https://i.imgur.com",
    "https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com"
  );
  proxify(
    "img[src^='https://imgur.com']",
    "src",
    "https://imgur.com",
    "https://proxy.duckduckgo.com/iu/?u=https://imgur.com"
  );
  proxify(
    "img[src^='https://i.stack.imgur.com']",
    "src",
    "https://i.stack.imgur.com",
    "https://proxy.duckduckgo.com/iu/?u=https://i.stack.imgur.com"
  );

  proxify(
    "a[href^='https://i.imgur.com']",
    "href",
    "https://i.imgur.com",
    "https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com"
  );
  proxify(
    "a[href^='https://imgur.com']",
    "href",
    "https://imgur.com",
    "https://proxy.duckduckgo.com/iu/?u=https://imgur.com"
  );
  proxify(
    "a[href^='https://i.stack.imgur.com']",
    "href",
    "https://i.stack.imgur.com",
    "https://proxy.duckduckgo.com/iu/?u=https://i.stack.imgur.com"
  );
}
