function encriptar (){
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        document.getElementById("output-text").value = textoEncriptado
}
function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDesencriptado;

}
function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    texto.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}
document.getElementById("input-text").addEventListener("input", function() {
    let texto = this.value;
    let outputImage = document.querySelector(".output-image");
    let outputTextArea = document.getElementById("output-text");

    if (texto === "") {
        outputImage.style.display = "block";
        outputTextArea.style.display = "none";
    } else {
        outputImage.style.display = "none";
        outputTextArea.style.display = "block";
    }
});