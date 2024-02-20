// plextv.js

const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    id: "com.example.plextv",
    version: "1.0.0",
    name: "PlexTV",
    description: "Učitava M3U liste sa linkovima za TV kanale.",
    resources: ["catalog"],
    types: ["channel"],
    idPrefixes: ["plextv:"],
    catalogs: [
        {
            type: "channel",
            id: "plextv:channels",
            name: "PlexTV Channels",
            extra: [{ name: "search" }],
        },
    ],
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(({ type }) => {
    if (type === "channel") {
        // Ovdje dodajte logiku za učitavanje M3U lista sa linkovima
        // na primjer, iz baze podataka ili iz datoteke
        const channels = [
            { id: "tv1", name: "TV Lista 1", url: "http://sansat.net:25461/get.php?username=02044893648690&password=5652005879&type=m3u_plus" },
            { id: "tv2", name: "TV Lista 2", url: "https://example.com/tv2.m3u" },
            // Dodajte ostale liste ovdje
        ];

        return Promise.resolve({ metas: channels });
    }
});

module.exports = builder.getInterface();
