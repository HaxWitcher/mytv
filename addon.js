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
const addonHandler = (req, res) => {
    // Implementacija vašeg add-ona...
};

// Postavite port na kojem add-on sluša zahteva
const port = process.env.PORT || 7000;
const addonInterface = serveHTTP(addonHandler, { port });

console.log(`Add-on je pokrenut na portu ${port}...`);
