const primeRange = {
    lower: 99,
    upper: 999
};


function coPrime(x,y) {
    let r = true, i = 1;

    while (i != 0) {
        ++i;
        if (x%i == 0 && y%i == 0) {
            r = false;
            break;
        }
        if (i >= x || i >= y)
            break;
    }

    return r;
}

function randInt(x,y) {
    return Math.floor(Math.random() * (y - x) ) + x;
}

function primeNumb(x,y) {
    let ra = [];

    let primeCheck = (a) => {
        let r = true;
        for (let i = 2;i<=(a/2);++i) {
            if (a%i == 0)
                r = false;
        }
        return r;
    }

    for (let k = x; k<= y; ++k) {
        let t = primeCheck(k);
        if (t == true && k != 1)
            ra.push(k);
    }

    return ra;
}

function phi(n) {
    let primeSmallerThann = primeNumb(1,n);
    let primeFactorsn = [];
    let val = 1;
    
    for (var i = 0; i<= primeSmallerThann.length-1; ++i) {
        if(n%primeSmallerThann[i] == 0)
            primeFactorsn.push(primeSmallerThann[i]);
    }

    for (var i = 0; i < primeFactorsn.length; ++i)
        val *= primeFactorsn[i]-1;

    return val;
}

let main = (data) => {
    let p,q;

    while(p == q) {
        p = primeNumb(primeRange.lower, primeRange.upper)[randInt(0, primeNumb(primeRange.lower, primeRange.upper).length-1)];
        q = primeNumb(primeRange.lower, primeRange.upper)[randInt(0, primeNumb(primeRange.lower, primeRange.upper).length-1)];
    }

    let n = p*q;

    let e;
    let phin = phi(n);

    for (let i = 2; i < phin; ++i) {
        if (coPrime(phin, i)) {
            e = i;
            break;
        }
    }

    let k = 1;

    while(true) {
        if ((1+phin*k)%e == 0)
            break;
        ++k;
    }

    let d = (1+phin*k)/e;

    let cypher = Math.pow(data.plainText, e)+1;

    while(true) {
        if ((cypher-Math.pow(data.plainText, e))%n == 0)
            break;
        cypher++;
    }

    return {keys: {publicKey: [e,n], privateKey: [d,n]}, cypherText: cypher};
}

module.exports = main;