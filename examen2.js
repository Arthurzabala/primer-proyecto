function quitar_usuario (button){
    console.log(button);
    button.remove();
}
function add_likes(identificador){
    const div_likes = document.querySelector("#"+identificador)
    const span_likes = div_likes.children[0]
    const texto = span_likes.innerHTML
    const numero = parseInt(texto)
    const numero_nuevo = numero + 1
    span_likes.innerHTML = numero_nuevo
}
function recibir (){
    const text = document.getElementById("texto").value;
    alert("You are searching for: " + text);    
}