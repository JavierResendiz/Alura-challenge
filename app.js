let cadenaNueva = "";


function encriptarTextoPrincipal() {

    let textoPrincipal = document.getElementById('texto').value;
    let textoSeccion = document.getElementById('textoE').value;
    if(textoPrincipal===''){
        encriptarTexto(textoSeccion);
    }else{
        encriptarTextoP(textoPrincipal);
    }

}

function encriptarTexto(texto) {
    for (var i = 0; i < texto.length; i++) {
        if(letraConAcento(texto[i])){
            agregarTextoAcentos(texto[i]);
        }else{
            agregarTexto(texto[i]);
        }
        
    }
    document.getElementById('textoE').value = "";
    document.getElementById('texto').value = cadenaNueva;
    cadenaNueva = "";
    verificarTexto();

}

function encriptarTextoP(texto) {
    for (var i = 0; i < texto.length; i++) {
        if(letraConAcento(texto[i])){
            agregarTextoAcentos(texto[i]);
        }else{
            agregarTexto(texto[i]);
        }
        
    }
    document.getElementById('texto').value = "";
    document.getElementById('textoE').value = cadenaNueva;
    cadenaNueva = "";
    verificarTexto();

}


function agregarTexto(caracter) {
    switch (caracter) {
        case "a":
            cadenaNueva = cadenaNueva + "ai";
            break;
        case "e":
            cadenaNueva = cadenaNueva + "enter";
            break;
        case "i":
            cadenaNueva = cadenaNueva + "imes";
            break;
        case "o":
            cadenaNueva = cadenaNueva + "ober";
            break;
        case "u":
            cadenaNueva = cadenaNueva + "ufat";
            break;
        default:
            cadenaNueva = cadenaNueva + caracter;

    }

}

function letraConAcento(letra) {
    return /[áéíóúÁÉÍÓÚ]/.test(letra);
}
function agregarTextoAcentos(caracter) {
    switch (caracter) {
        case "á":
            cadenaNueva = cadenaNueva + "ai";
            break;
        case "é":
            cadenaNueva = cadenaNueva + "enter";
            break;
        case "é":
            cadenaNueva = cadenaNueva + "imes";
            break;
        case "ó":
            cadenaNueva = cadenaNueva + "ober";
            break;
        case "ú":
            cadenaNueva = cadenaNueva + "ufat";
            break;

    }

}


function desencriptarTextoPrincipal() {

    let textoCompletoPrincipal = document.getElementById('texto').value;
    let textoCompletoSeccion = document.getElementById('textoE').value;
    if(textoCompletoPrincipal===''){
        desencriptarTexto(textoCompletoSeccion);
    }else{
        desencriptarTexto(textoCompletoPrincipal);
    }
}

function desencriptarTexto(textoCompleto) {
    let textoA = textoCompleto.replaceAll("ai", 'a');
    let textoE = textoA.replaceAll("enter", 'e');
    let textoI = textoE.replaceAll("imes", 'i');
    let textoO = textoI.replaceAll("ober", 'o');
    let textoU = textoO.replaceAll("ufat", 'u');
    document.getElementById('texto').value = textoU;
    document.getElementById('textoE').value = "";
    verificarTexto();
}


function convertirMinusculas(elemento) {
    let texto = elemento.value;
    let textoFiltrado = texto.replace(/[^a-z0-9\s]/g, ''); // Filtrar caracteres no deseados
    elemento.value = textoFiltrado.toLowerCase();
}

function copiarTexto() {
    var input = document.getElementById('textoE');
    input.select();
    document.execCommand('copy');
}

function verificarTexto() {
    var textarea = document.getElementById('textoE');
    var imagen = document.getElementById('imagenAlura');
    var textoImagen = document.getElementById('textoImagen');

    // Verificar si el textarea está vacío
    if (textarea.value.trim() === '') {
        textoImagen.style.display = 'block';
        imagen.style.display = 'block'; // Mostrar la imagen

    } else {
        textoImagen.style.display = 'none';
        imagen.style.display = 'none'; // Ocultar la imagen

    }
}

function validarTexto(event) {
      var textarea = event.target;
      var texto = textarea.value;

      // Expresión regular para validar texto con acentos y minúsculas
      var regex = /^[áéíóúüña-z\s]+$/;

      if (!regex.test(texto)) {
        textarea.value = texto.replace(/[^áéíóúüña-z\s]/ig, '');
      }
}

var textarea = document.getElementById('texto');

    textarea.addEventListener('input', function() {
      var texto = textarea.value;

      // Expresión regular para validar texto con acentos y minúsculas
      var regex = /^[áéíóúüña-z\s]+$/;

      if (!regex.test(texto)) {
        textarea.value = texto.replace(/[^áéíóúüña-z\s]/ig, '');
        textarea.value = textarea.value.toLowerCase();
      }
    });