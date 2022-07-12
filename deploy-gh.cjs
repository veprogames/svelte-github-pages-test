const ghpages = require("gh-pages");

ghpages.publish("public", {
    branch: "gh-pages",
    repo: "https://github.com/veprogames/svelte-github-pages-test.git",
    user: {
        name: "veprogames",
        email: "veprogames.gamedev@gmail.com",
    },
    dotfiles: true
}, () => console.log("deployed!"));