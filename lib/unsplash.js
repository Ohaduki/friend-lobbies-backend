const {createApi} = require('unsplash-js');
const nodeFetch = require('node-fetch');

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch
});

module.exports = unsplash;