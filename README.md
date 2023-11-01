# Code Documentation

This README.md file provides documentation for a set of code snippets. The code is divided into five exercises, each with its purpose and functionality.

## Exercise 1 - Soma dos divisores de um número

This code snippet calculates the sum of all divisors of a given integer. It includes a function `encontrarDivisores(num)` that finds the divisors of a number. The code then prompts the user for an integer, computes the sum of divisors, and displays the result in an alert.

```javascript
function encontrarDivisores(num) {
    const divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    divisores.pop(); // Remove the number itself from the list of divisors
    return divisores;
}
```

## Exercise 2 - Distância euclidiana entre dois pontos

This code calculates the Euclidean distance between two 2D points. It includes a function `calcDistance(x1, y1, x2, y2)` that computes the distance. The code prompts the user for the coordinates of two points and displays the calculated distance in an alert.

```javascript
function calcDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const Distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return Distance.toFixed(2);
}
```

## Exercise 3 - Contagem de palavras em uma frase

This code snippet counts the occurrences of words in a given phrase. It includes a function `contarPalavras(frase)` that returns a word count. The code prompts the user for a phrase, performs word counting (case-insensitive), and displays the results in an alert.

```javascript
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
```

## Exercise 4 - Dimensão de uma matriz

This code determines the dimensions of a matrix provided as input. It includes a function `determinarDimensaoMatriz(matriz)` that calculates the number of rows and columns in the matrix. The code prompts the user for a matrix input, parses it, and returns the matrix's dimensions in an alert.

```javascript
function determinarDimensaoMatriz(matriz) {
    const linhas = matriz.split(';');
    const numeroDeLinhas = linhas.length;
    const primeiraLinha = linhas[0].split(' ');
    const numeroDeColunas = primeiraLinha.length;
    return `The matrix dimension is ${numeroDeLinhas} x ${numeroDeColunas}.`;
}
```

## Exercise 5 - Sequência de Fibonacci

This code generates the first N numbers of the Fibonacci sequence. It includes a function `calcFibonacci(N)` that calculates the Fibonacci sequence up to N terms. The code prompts the user for an integer N and displays the generated sequence in an alert.

```javascript
function calcFibonacci(N) {
    const fibonacci = [0, 1];
    for (let i = 2; i < N; i++) {
        const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextFibonacci);
    }
    return fibonacci.slice(0, N);
}
```

---

The code provided covers a range of exercises, from finding divisors to calculating distances and processing text. Feel free to use and modify this code as needed for your projects.
