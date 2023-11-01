const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarResposta(exercicio) {
    if (exercicio === 1) {
        const numero = prompt("Insert an int number:");
        const listaDivisores = encontrarDivisores(parseInt(numero));
        const somaDivisores = listaDivisores.reduce((a, b) => a + b, 0); 

        var resp = "Divisor list: " + listaDivisores + "\nSum: " + somaDivisores;

        alert(resp);
    }

    if (exercicio === 2){
        const x1 = parseFloat(prompt("Insert the x cordenade to point A:"));
        const y1 = parseFloat(prompt("Insert the y cordenade to point A:"));
        const x2 = parseFloat(prompt("Insert the x cordenade to point B:"));
        const y2 = parseFloat(prompt("Insert the y cordenade to point B:"));

        var Distance = calcDistance(x1, y1, x2, y2).toFixed(2);

        alert("The distance from the point A(" + x1 + ", " + y1 + ") and B(" + x2 + ", " + y2 + ") is: " + Distance);
        
    }

    if (exercicio === 3) {
        const frase = prompt("Write a phrase:");
        const resut = contarPalavras(frase);

        let resutForm = "Result:\n";
        for (const palavra in resut) {
            resutForm += `${palavra} (${resut[palavra]}), `;
        }

        resutForm = resutForm.slice(0, -5);
        alert(resutForm);
    }

    if (exercicio === 4 ){
        const imput = prompt("Input a Matriz spreaded by ';' and blank spaces:");
        const resut = determinarDimensaoMatriz(imput);
        alert(resut);
    }

    if (exercicio === 5){
        const N = parseInt(prompt("Imput a int number for N:"));

        if (N <= 0) {
            alert("Please insert a positive number.");
        } else {
            const sequenciaFibonacci = calcFibonacci(N);
            alert("resut: "+ sequenciaFibonacci.join(', '));
        }
    }
    
}


function encontrarDivisores(num) {
    const divisores = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

function calcDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const Distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    
    return Distance;
}



function contarPalavras(frase) {
    const palavras = frase.toLowerCase().match(/\b\w+\b/g);

    const contagem = {};

    for (const palavra of palavras) {
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    }

    return contagem;
}


function determinarDimensaoMatriz(matriz) {
    const linhas = matriz.split(';');
    const numeroDeLinhas = linhas.length;
    const primeiraLinha = linhas[0].split(' ');
    const numeroDeColunas = primeiraLinha.length;

    return `The matrix dimension is ${numeroDeLinhas} x ${numeroDeColunas}.`;
}

function calcFibonacci(N) {
    const fibonacci = [0, 1];

    for (let i = 2; i < N; i++) {
        const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextFibonacci);
    }

    return fibonacci.slice(0, N);
}


function setInitialTextareaContent() {

    var exercise1Content = `
    function encontrarDivisores(num) {
        const divisores = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisores.push(i);
            }
        }
        divisores.pop();
        return divisores;
    }
    `;

    var exercise2Content = `
    function calcDistance(x1, y1, x2, y2) {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        const Distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        return Distance;
    }
    `;

    var exercise3Content = `
    function contarPalavras(frase) {
        const palavras = frase.toLowerCase().match(/\b\w+\b/g);
    
        const contagem = {};
    
        for (const palavra of palavras) {
            if (contagem[palavra]) {
                contagem[palavra]++;
            } else {
                contagem[palavra] = 1;
            }
        }
    
        return contagem;
    }    
    `;

    var exercise4Content = `
    function determinarDimensaoMatriz(matriz) {
        const linhas = matriz.split(';');
        const numeroDeLinhas = linhas.length;
        const primeiraLinha = linhas[0].split(' ');
        const numeroDeColunas = primeiraLinha.length;
    
        return Essa é uma matriz de dimensão {numeroDeLinhas} x {numeroDeColunas}.;
    }
    `;

    var exercise5Content = `
    function calcFibonacci(N) {
        const fibonacci = [0, 1];
    
        for (let i = 2; i < N; i++) {
            const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(nextFibonacci);
        }
    
        return fibonacci.slice(0, N);
    }
    `;

    setTextArea('textarea1', exercise1Content);
    setTextArea('textarea2', exercise2Content);
    setTextArea('textarea3', exercise3Content);
    setTextArea('textarea4', exercise4Content);
    setTextArea('textarea5', exercise5Content);

}


function setTextArea(textareaId, value) {
    var textarea = document.getElementById(textareaId);
    textarea.value = value;
}