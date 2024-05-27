import axios from 'axios';
import md5 from 'md5';

const publicKey = '882374531fcb90e81dc215a18f68c67a';
const privateKey = 'f20696aed2c8f6272a45bad9f8a66d26e53fb97f';
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: publicKey,
    ts: ts,
    hash: hash,
  },
});

export default api;