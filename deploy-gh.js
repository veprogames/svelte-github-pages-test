const ghpages = require("gh-pages");

ghpages.publish("public", {
    branch: "gh-pages",
    repo: "", //fill out later
    user: {
        name: "veprogames",
        email: "veprogames.gamedev@gmail.com",
    },
    dotfiles: true
});