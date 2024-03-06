// Variables
let numeroMaximoPosible = 50;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;
let juegoTerminado = false;

// Actualizar el título y la descripción
document.getElementById('titulo').textContent = "Adivina el número secreto";
document.getElementById('descripcion').textContent = `Intenta adivinar el número entre 1 y ${numeroMaximoPosible}. Tienes ${maximosIntentos} intentos.`;

// Función para permitir solo números en el campo de entrada
function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode;
    return (key >= 48 && key <= 57);
}

// Función para verificar el número ingresado por el usuario
function verificar() {
    if (juegoTerminado) {
        return;
    }
    // Obtenemos el valor ingresado por el usuario en el campo de entrada con id 'numeroUsuario'
    numeroUsuario = document.getElementById('numeroUsuario').value;
    // Verificamos si el número ingresado es un entero y si está dentro del rango permitido
    if (!Number.isInteger(Number(numeroUsuario)) || numeroUsuario < 1 || numeroUsuario > numeroMaximoPosible) {
        // Si el número ingresado no es válido, mostramos un mensaje al usuario y terminamos la ejecución de la función
        document.getElementById('resultado').textContent = 'Por favor, ingresa un número válido entre 1 y ' + numeroMaximoPosible + '.';
        return;
    }
    // Obtenemos los elementos de imagen
    let imagenJuego = document.getElementById('imagenJuego');
    let imagenTrophy = document.getElementById('imagenTrophy');

    // Verificamos si el número ingresado por el usuario es igual al número secreto
    if (numeroUsuario == numeroSecreto) {
        // Si el usuario adivinó el número, cambiamos las imágenes mostradas
        imagenJuego.src = 'img/Win.png';
        imagenTrophy.src = 'img/Troph.png';
        imagenTrophy.style.display = 'block';
        // Si el usuario adivinó el número, mostramos un mensaje de éxito y marcamos el juego como terminado
        document.getElementById('resultado').textContent = `Acertaste, el número secreto es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`;
        juegoTerminado = true;
    } else if (intentos >= maximosIntentos) {
         // Si el usuario ha alcanzado el número máximo de intentos, cambiamos la imagen mostrada
         imagenJuego.src = 'img/Lose.png';
         imagenTrophy.style.display = 'none';
        // Si el usuario ha alcanzado el número máximo de intentos, mostramos un mensaje y marcamos el juego como terminado
        document.getElementById('resultado').textContent = `Llegaste al número máximo de intentos. El número secreto era ${numeroSecreto}.`;
        juegoTerminado = true;
    } else {
        // Si el usuario no ha adivinado el número y aún tiene intentos restantes, proporcionamos una pista
        if (numeroUsuario > numeroSecreto) {
            document.getElementById('resultado').textContent = `Intento ${intentos}! El número secreto es menor.`;
        } else {
            document.getElementById('resultado').textContent = `Intento ${intentos}! El número secreto es mayor.`;
        }
        intentos++;
    }
}

// Función para reiniciar el juego
function reiniciar() {
    numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
    numeroUsuario = 0;
    intentos = 1;
    juegoTerminado = false;
    document.getElementById('numeroUsuario').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('descripcion').textContent = `Intenta adivinar el número entre 1 y ${numeroMaximoPosible}. Tienes ${maximosIntentos} intentos.`;
    // Reiniciamos las imágenes
    document.getElementById('imagenJuego').src = 'img/Quest.png';
    document.getElementById('imagenTrophy').style.display = 'none';
}
