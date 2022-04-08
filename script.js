let prato, bebida, sobremesa;
function escolherMacarrao() {
    document.getElementById('macarrao').style.borderColor = "green";
    document.getElementById('carne').style.borderColor = "white";
    prato = "Macarrão";
}
function escolherCarne() {
    document.getElementById('carne').style.borderColor = "green";
    document.getElementById('macarrao').style.borderColor = "white";
    prato = "Carne";
}
function escolherCoca() {
    document.getElementById('coca').style.borderColor = "green";
    document.getElementById('suco').style.borderColor = "white";
    bebida = "Coca-cola";
}
function escolherSuco() {
    document.getElementById('suco').style.borderColor = "green";
    document.getElementById('coca').style.borderColor = "white";
    bebida = "Suco";
}
function escolherPudim() {
    document.getElementById('pudim').style.borderColor = "green";
    document.getElementById('sorvete').style.borderColor = "white";
    sobremesa = "Pudim";
}
function escolherSorvete() {
    document.getElementById('sorvete').style.borderColor = "green";
    document.getElementById('pudim').style.borderColor = "white";
    sobremesa = "Sorvete";
}
function finalizarPedido() {
    let mensagem;
    mensagem = "Olá! Gostaria de pedir um combo: " + prato + ", " + bebida + " e " + sobremesa + ".";
    window.open("https://wa.me/55999999999?text=" + mensagem);
}