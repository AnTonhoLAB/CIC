const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');
const exercises = require('../Aula4/ExercisesFactory');
// const exercise1 = require('../Aula4/Exercise1')

logger.startApp();

while(true) { 
    logOptions();
    const userChoice = prompt("Escolha Uma opção:  ", "number");
    
    switch (userChoice) { 
        case 1:
            exercises.exercise1.presentsExercise()
            break;
        case 2: 
            break;
        case 3:
            break;
        case 0: 
            break;
        default:
            console.log('Voce escolheu uma opção invalida');   
            break;
    }

    logger.log('Deseja continuar?');
    const continueChoice = prompt("digite 0 pra sair ou qualquer outro numero para continuar:  ", "number");
    
    switch (continueChoice) { 
        case 0: 
            break
        default: 
            continue
    }

}

function logOptions() { 
    logger.logl("Escolha o exercicio");
    logger.logl(exercises.exercise1.description);
    logger.logl("2 - Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e \n    escrever a área do retângulo");
    logger.logl("3 - Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e \n    escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês \n    com 30 dias.");
    logger.logl("4 - Escreva um algoritmo para ler o número total de eleitores de um município, o número de \n    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa \n    em relação ao total de eleitores.");
    logger.logl("5 - Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de \n    reajuste. Calcular e escrever o valor do novo salário");
    logger.logl("6 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem \n    do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual \n    do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo \n    de fábrica de um carro, calcular e escrever o custo final ao consumidor.");
    logger.logl("7 - Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo \n    por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das \n vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele \n    vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro \n    vendido. Calcule e escreva o salário final do vendedor");
    logger.logl("8 - Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o \n    valor correspondente em graus Celsius (baseado na fórmula abaixo): \n               C/5=(F-32)/9 \n    Observação: Para testar se a sua resposta está correta saiba que 100°C = 212F.");
    logger.logl("9 - Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste \n    aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para \n    o cálculo da média final é: \n    mediafinal=(n1*2+n2*3+n3*5)/10");
}


logger.finishApp();