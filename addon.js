const { serveHTTP, publishToCentral } = require('stremio-addon-sdk');
const axios = require('axios');

// URL vašeg GitHub direktorijuma sa m3u listama
const GITHUB_M3U_URL = 'https://github.com/HaxWitcher/mytv/tree/main/m3u';

// Funkcija za učitavanje m3u lista
const fetchM3uLists = async () => {
    try {
        const response = await axios.get(GITHUB_M3U_URL);
        return response.data.split('\n'); // Razdvajanje linija u listi
    } catch (error) {
        console.error('Greška prilikom učitavanja m3u lista:', error.message);
        return [];
    }
};

// Glavna funkcija add-ona
const addon = {
    manifest: {
        id: 'vas-addon-id',
        version: '1.0.0',
        name: 'Moj IPTV Addon',
        description: 'Prikazuje m3u liste sa GitHub-a u Stremio.',
        resources: ['catalog'],
        types: ['channel'],
        idPrefixes: ['m3u'],
    },
    async getCatalog() {
        const m3uLists = await fetchM3uLists();
        const channels = m3uLists.map((url, index) => ({
            id: `m3u:${index}`,
            name: `Kanal ${index + 1}`,
            logo: 'https://link-do-loga-kanala.com/logo.png', // Dodajte stvarni URL loga kanala
            url,
        }));
        return { metas: channels };
    },
};

// Pokretanje add-ona
serveHTTP(addon);
publishToCentral(addon);
