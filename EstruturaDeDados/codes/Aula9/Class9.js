
// let x = [8,9,2,1]
// let j = "nada"
// let eleito = "nada"

// for (i = 1; i<=3; i++) {
//     console.log(`x ${x}
//     i ${i}
//     j ${j}
//     eleito ${eleito}`);
//     eleito = x[i]
//     console.log(`x ${x}
//     i ${i}
//     j ${j}
//     eleito ${eleito}`);
//     j = i - 1
//     console.log(`x ${x}
//     i ${i}
//     j ${j}
//     eleito ${eleito}`);

//     while(((j>=0) && x[j]> eleito)) { 
//         x[j+1] = x[j]
//         console.log(`x ${x}
//     i ${i}
//     j ${j}
//     eleito ${eleito}`);
//         j--
//         console.log(`x ${x}
//             i ${i}
//             j ${j}
//             eleito ${eleito}`);
//     }

//     x[j+1] = eleito
//     console.log(`x ${x}
//             i ${i}
//             j ${j}
//             eleito ${eleito}`);
// }

// console.log(x.length);

var eleito, menor, pos

var x = [5, 8, 2, 6, 1, 9]

for (let i=0; i<=x.length -1; i++) {
    eleito = x[i]
    menor = x[i+1]
    pos = i+2

    for (let j = i+2; j <= x.length -1; j++) {

        if (x[j] < menor) {

            menor = x[j] 

            pos = j

        }

        if (menor < eleito) { 

            x[i] = x[pos]

            x[pos] = eleito

        }

    }

}

console.log(x)