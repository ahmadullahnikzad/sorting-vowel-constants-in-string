function find(s) {
    let vowels = 'aeiou';
    let vow = [];
    let cons = [];
    for (let v of s) {
        if (vowels.includes(v) === true) {
            vow.push(v);
        }
    }
    for (let c of s) {
        if (vowels.includes(c) !== true) {
            cons.push(c)
        }
    }

    let total = [...vow, ...cons]
    return total.join('\n');
}
console.log(find('ahmadullah'))