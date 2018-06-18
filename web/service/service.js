import fetch from 'cross-fetch';
import Encrypter from 'encrypter';


export function getRandomString() {
    return Math.random().toString(36).substr(2) + new Date().getTime();
}

export function unencrypt(originKey, originData) {
    if (typeof originData !== 'string') {
        return JSON.stringify(originData);
    }
    const encryptedKey = originKey.slice(1, 3) + originKey.slice(2, 3) + originKey.slice(7, 10);
    const encrypter = new Encrypter(encryptedKey);
    return encrypter.decrypt(originData);
}

export function deepCloneObj(obj = {}) {
    return JSON.parse(JSON.stringify(obj));
}

export function isObjPropsAllUnvalid(obj = {}) {
    const values = Object.values(obj);
    return values.every(i => !i === true);
}

export function objContentCompare(obj1 = {}, obj2 = {}) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i += 1) {
        const pair = vars[i].split('=');
        if (pair[0] === variable) { return pair[1]; }
    }
    return false;
}

export function post(url, data = {}, headers = { 'Content-Type': 'application/json' }) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
        credentials: 'include',
    }).then(res => res.json()).catch((err) => { throw new Error('网络错误', err); });
}

export function get(url, headers) {
    return fetch(url, {
        method: 'GET',
        headers,
        credentials: 'include',
    }).then(res => res.json()).catch((err) => { throw new Error('网络错误', err); });
}
