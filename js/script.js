function btnAdicionaTarefa() {

   let text = document.querySelector('.caixaAdicionaTarefa').value;
   let list = document.getElementById('listaTarefas').innerHTML;

   list += "<li>" +text+ "</li>"

   document.getElementById('listaTarefas').innerHTML = list;
   document.querySelector('.caixaAdicionaTarefa').value = null;

}   

var button = document.getElementById("btnAdicionaTarefa");
var inputField = document.querySelector(".caixaAdicionaTarefa");

inputField.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // verifica se a tecla pressionada é "Enter"
        event.preventDefault();
        button.click(); // simula um clique no botão "OK"
    }
})

function btnAdicionaTarefa() {
    let text = document.querySelector('.caixaAdicionaTarefa').value;
    let list = document.getElementById('listaTarefas').innerHTML;
  
    list += "<li>" +text+ "<div class='btnExecuta'><button type='button' class='concluiTarefa' onclick='concluiTarefa(this)'></button><button type='button' class='deletaTarefa' onclick='deletaTarefa(this)'></button></div></li>";
  
    document.getElementById('listaTarefas').innerHTML = list;
    document.querySelector('.caixaAdicionaTarefa').value = null;
}
  
  function concluiTarefa(button) {
    let li = button.parentNode.parentNode;
    li.classList.add('concluida');
}
  
  function deletaTarefa(button) {
    let li = button.parentNode.parentNode;
    li.parentNode.removeChild(li);
}
 