function juegoFizzbuzz() {
    let repeticiones = +prompt('Escribe la cantidad el último número que quieres validar')
    for (let i = 1; i <= repeticiones; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}

function cuentaVocales() {
    let palabra = prompt('escribe las palabras de prueba...');
    let cont_vocales = 0;
    n = palabra.length;
    for (let i = 0; i < n; i++) {
        if (palabra[i].toLowerCase() === 'a' ||
            palabra[i].toLowerCase() === 'e' ||
            palabra[i].toLowerCase() === 'i' ||
            palabra[i].toLowerCase() === 'o' ||
            palabra[i].toLowerCase() === 'u') {
            cont_vocales = cont_vocales + 1;
        } else {
            cont_vocales = cont_vocales;
        }
    };
    console.log(cont_vocales);
};

function secuenciaDeFibonacci() {
    let n = +prompt('Escribe el número de elementos de la serie fibonacci que deseas ver');
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < n; i++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
};

function esPalindromo1() {
    let valorIngresado = prompt('Escribe un número o palabra para saber si es palíndromo').toLowerCase().split(' ').join('');
    console.log(valorIngresado);
    let a = valorIngresado.length - 1;
    let b = 0;
    let valorIngresadoInverso = valorIngresado.split('').reverse();
    console.log(valorIngresadoInverso);
    for (let i = 0; i < a; i++) {
        if (valorIngresado[i] === valorIngresadoInverso[i]) {
            b = b + 1;
            console.log('coincidencia');
        }
    }
    if (b === a) {
        alert('Es palindromo')
    } else {
        alert('No es palindromo')
    }
}

function esPalindromo2() {
    let valorIngresado = prompt('Escribe un número o palabra para saber si es palíndromo').toLowerCase().replace(/ /g, '');
    console.log(valorIngresado);

}

function esPalindromo3() {
    let valorIngresado = prompt('Escribe un número o palabra para saber si es palíndromo').toLowerCase();
    let sinEspacios = '';
    for (let i = 0; i < valorIngresado.length; i++) {
        if (valorIngresado[i] !== ' ') {
            sinEspacios += valorIngresado[i];
        }
    }
    console.log(sinEspacios);
    let palindromo = false;
    for (let i = 0; i < sinEspacios.length; i++) {
        if (sinEspacios[i] !== sinEspacios[sinEspacios.length - i - 1]) {
            alert('No es Palindromo');
            break
        } else {
            palindromo = true;
        }

    }
    if (palindromo) {
        alert('Es Palindromo');
    } else {
        alert('No es Palindromo');
    }
}

function adivinaElNumero() {
    let rango = +prompt('Escribe el número más alto que quieras tener en cuenta');
    function intentos() {
        if (rango <= 10) {
            return 2;
        } else if (rango > 10 && rango <= 20) {
            return 3;
        } else if (rango > 20) {
            return 5;
        }
    };

    let numeroAleatoreo = Math.floor(Math.random() * rango);
    console.log(numeroAleatoreo);
    alert(`Empieza el juego, tienes ${intentos()} intentos para adivinar el número que eligió Jarvis`);
    for (let i = 0; i < intentos(); i++) {
        let intento = +prompt(`Piensa bien, escribe tu ${i + 1} intento`);
        if (intento === numeroAleatoreo) {
            alert(`Felicidades, adivinaste el número ${numeroAleatoreo}`);
            break;
        } else {
            alert(`No es el número correcto, te quedan ${intentos() - i - 1} intentos`);
        }
    }
}

function haceFactorial1() {
    let numero = +prompt('Por favor ingrese el valor para calcular el factorial');
    let resultado = 1;
    for (let i = 0; i < numero; i++) {
        resultado = resultado * (numero - i);
    }
    alert(`El factorial de ${numero} es ${resultado}`);
}
function haceFactorial2() {
    let numero = +prompt('Escribe un número para calcular su factorial');
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
        console.log(i, resultado);
    }
    alert(`El factorial de ${numero} es ${resultado}`);
}

function haceFactorial3() {
    let numero = +prompt('Escribe un número para calcular su factorial');
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    alert(`El factorial de ${numero} es ${resultado}`);
}