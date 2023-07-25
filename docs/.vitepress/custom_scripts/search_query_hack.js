export default function queryHack() {
  if (typeof window !== "undefined") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchString = urlParams.get("q") || urlParams.get("search");

    function waitForElm(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });
    }

    function loadQuery(q) {
      document.querySelector("#docsearch > button").click();
      waitForElm(".DocSearch-Input").then((elem) => {
        elem.focus();
        elem.value = q;
        elem.dispatchEvent(new Event("input"));
      });
    }

    if (searchString) {
      setTimeout(() => {
        loadQuery(searchString);
      }, 350);
    }
  }
}
