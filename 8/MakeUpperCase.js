function makeUpperCase(str) {
    // Code here
    let res = '';

    for (let i = 0; i < str.length; i++) {
        const cc = str.charCodeAt(i);
        const c = String.fromCharCode(cc - 32);
        // Convert symbols for a..z only
        res += cc <= 122 && cc >= 97 ? c : str[i];
    }

    return res;
}
