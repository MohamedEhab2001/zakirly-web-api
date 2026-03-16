const crypto = require('crypto');

const API_KEY = '9c9d8589014fc09d075e58140ea885e7b4955d19f9c8fc9462';
const PROVIDER = 'FAWATERAK.23850';
const website = 'https://6b65-196-128-139-209.ngrok-free.app';
function generateHashKey() {
    const queryParam = `Domain=${website}&ProviderKey=${PROVIDER}`;

    const hash = crypto
        .createHmac('sha256', API_KEY)
        .update(queryParam)
        .digest('hex');

    return hash;
}

console.log(generateHashKey());
