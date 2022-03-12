
// Bhaskara correta
const a = 1;
const b = 12;
const c = -13;

// Delta negativo
// const a = 2;
// const b = 2;
// const c = 2;

// Delta igual a 0
// const a = 1;
// const b = -10;
// const c = 25;


// Delta = b² - 4.a.c
const delta =  (b*b) - 4 * a * c
console.log("Delta: ", delta);

// x = – b ± √Δ
//        2·a

if (delta < 0) { 
    console.log("O delta é negativo. Equação não possui raízes reais.")
} else if (a === 0) { 
    console.log("O A não pode ser igual a 0 (Nenhum numero pode ser dividido por 0)")
} else { 
    const raizDelta = Math.sqrt(delta);
    const x1 = ((-b) + raizDelta)/(2*a);
    const x2 = ((-b) - raizDelta)/(2*a);
    console.log(" as raízes da equação são ", x1 ," e ", x2);
}




