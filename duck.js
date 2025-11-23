applyProxy();

const observer = new MutationObserver(function (mutations) {
  applyProxy();
});

observer.observe(document.body, {
  attributeFilter: ["src", "href"],
  subtree: true,
  childList: true,
});

function proxify(selector, attribute, replace) {
  document.querySelectorAll(selector).forEach((node) => {
    const value = node.getAttribute(attribute);
    node.setAttribute(attribute, replace(value));
  });
}

function applyProxy() {
  proxify(
    "img[src^='https://i.imgur.com']",
    "src",
    matchedAttributeValue => `https://proxy.duckduckgo.com/iu/?u=${matchedAttributeValue}`
  );
  proxify(
    "img[src^='https://imgur.com']",
    "src",
    matchedAttributeValue => `https://proxy.duckduckgo.com/iu/?u=${matchedAttributeValue.replace('https://imgur.com', 'https://i.imgur.com')}.jpg`
  );
  proxify(
    "img[src^='https://i.stack.imgur.com']",
    "src",
    matchedAttributeValue => `https://proxy.duckduckgo.com/iu/?u=${matchedAttributeValue}`
  );

  proxify(
    "a[href^='https://i.imgur.com']",
    "href",
    matchedAttributeValue => `https://proxy.duckduckgo.com/iu/?u=${matchedAttributeValue}`
  );
  proxify(
    "a[href^='https://imgur.com']",
    "href",
    matchedAttributeValue => `https://proxy.duckduckgo.com/iu/?u=${matchedAttributeValue.replace('https://imgur.com', 'https://i.imgur.com')}.jpg`
  );
  proxify(
    "a[href^='https://i.stack.imgur.com']",
    "href",
    matchedAttributeValue => `https://proxy.duckduckgo.com/iu/?u=${matchedAttributeValue}`
  );
}
