function clock() {

  var today = new Date();
  var d = today.getDate();
  var mm = today.getMonth()+1;
  var y = today.getFullYear();
  d = addZero(d);
  mm = addZero(mm);
  var h = today.getHours();
  var m = today.getMinutes();
  m = addZero(m);
  $('#clock').html( d + "-" + mm + "-" + y + " " + h + ":" + m);
  var t = setTimeout(clock, 500);
};

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  };
  return i;
};

clock();
document.getElementById("confirm-gps").addEventListener("click", confirmDest);
document.getElementById("cancel-sos").addEventListener("click", cancelLig);
document.getElementById("endereco-gps").addEventListener("onchange", mostraBotaoConfirmar);


function confirmDest(){
  alert("Destino confirmado");
  document.getElementById("cancel-gps").style.display = "inline";
}

function cancelDest(){
	alert("Destino cancelado");
  document.getElementById("cancel-gps").style.display = "none";
  document.getElementById("endereco-gps").value = "";
}

function airOn(){
  var img = document.getElementById("Air")
  if(img.getAttribute("src") == "img/fan.png"){
    document.getElementById("Air").src = "img/redfan.png";
  } else {
    document.getElementById("Air").src = "img/fan.png";
  }
}

function micPress(){
  var img = document.getElementById("Voz")
  if(img.getAttribute("src") == "img/voz.png"){
    document.getElementById("Voz").src = "img/redmic.png";
  } else {
    document.getElementById("Voz").src = "img/voz.png";
  }
}

function mostraBotaoConfirmar(){
  if(document.getElementById("endereco-gps").getAttribute("value")[0] == ""){
    document.getElementById("confirm-gps").style.display = "none";
  } else {
    document.getElementById("confirm-gps").style.display = "inline";
  }
}

function deleteFavorito(r){
  if(window.confirm("Realmente deseja deletar?")){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabelafavorita").deleteRow(i);
  }
}

function addFavorito(){
  var local = document.getElementById('favoritoadd').value;
  var end = document.getElementById('enderecoLocal').value;
  if(local == null || local == ""){
    window.alert("Nome não pode estar vazio");
  } else if (end == null || end == ""){
    window.alert("Endereço não pode estar vazio");
  } else {
    var tabela = document.getElementById('tabelafavorita');
    var row = tabela.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<a href='gps.html' class='favGPS'>" + local + "</a>";
    cell2.innerHTML = "<button type='button' class='linha' onclick='deleteFavorito(this)'><img src='img/delete.png' alt='Delete' height='30' width='30'></button>";
  }
}

function addBluetooth(){
  window.alert("Insira o codigo 0543 no equipamento!");
  var nome = window.prompt("Nome do equipamento?");
  if(nome != null && nome != ""){
    var tabela = document.getElementById("tabela-bluetooth");
    var row = tabela.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = nome;
    cell2.innerHTML = "<button type='button' name='button' class='estado-blue' onclick='conectaBlue(this)'>Desconectar</button>";
    cell3.innerHTML = "<button type='button' name='button'><img src='img/delete.png' alt='delete' height='30' width='30' onclick='deleteBluetooth(this)'></button>";

  }
}

function deleteBluetooth(r) {
  if(window.confirm("Realmente deseja deletar?")){
    var i = r.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById("tabela-bluetooth").deleteRow(i);
  }
}

function conectaBlue(r){
  var tabela = document.getElementById("tabela-bluetooth");
  var i = r.parentNode.parentNode.parentNode.rowIndex;
  var row = tabela.rows[i];
  if(r.innerHTML == "Conectar"){
    r.innerHTML = "Desconectar";
    var cell = row.insertCell(3);
    cell.innerHTML = "<img src='img/bluetooth.png' height='30' width='30'>";
  } else {
    r.innerHTML = "Conectar";
    row.deleteCell(3);
  }
}

function conectaWifi(r){
  var tabela = document.getElementById("tabela-wifi");
  var i = r.parentNode.parentNode.parentNode.rowIndex;
  var row = tabela.rows[i];
  if(r.innerHTML == "Conectar"){
    r.innerHTML = "Desconectar";
  } else {
    r.innerHTML = "Conectar";
    row.deleteCell(3);
  }
}

function deleteWifi(r) {
  if(window.confirm("Realmente deseja deletar?")){
    var i = r.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById("tabela-wifi").deleteRow(i);
  }
}

function addWifi(){
  window.alert("Insira o codigo 0543 no equipamento!");
  var nome = window.prompt("Nome do equipamento?");
  if(nome != null && nome != ""){
    var tabela = document.getElementById("tabela-wifi");
    var row = tabela.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = nome;
    cell2.innerHTML = "<button type='button' name='button' class='estado-blue' onclick='conectaWifi(this)'>Desconectar</button>";
    cell3.innerHTML = "<button type='button' name='button'><img src='img/delete.png' alt='delete' height='30' width='30' onclick='deleteWifi(this)'></button>";
  }
}

function ajudaConectar(){
  window.alert("Para conectar um dispositivo desconecte qualquer outro dispositivo conectado e aperte no botao de conectar. Para concectar um novo dispositivo, aperte no botao de conectar novo dipositivo e insira a senha mostrada no ecra no seu dispositivo");
}

function atualizarAgenda(){
  window.alert("Agenda atualizada!");
}

function addTelFav(){
  var num = document.getElementById('tel-fav-num').value;
  var nome = document.getElementById('tel-fav-nome').value;
  if(nome == null || nome == ""){
    window.alert("Nome não pode estar vazio");
  } else if (num == null || num == ""){
    window.alert("Numero não pode estar vazio");
  } else {
    var tabela = document.getElementById("tabela-telefone");
    var row = tabela.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<button type='button' name='" + nome + "' class='ligar-fav' onclick='ligFav(this)'>" + nome + "</button>";
    cell2.innerHTML = "<button type='button' name='button'><img src='img/delete.png' width='30' height='30'></button>";
  }
}

function apertaButao(b) {
  var insere = document.getElementById('guardanum');
  var input = insere.value;
  input = input + "" + b;
  insere.value = input;
}

function ligarPad(){
  var num = document.getElementById('guardanum').value;
  var d = document.getElementById("ligando");
  d.innerHTML = "Ligando para " + num + "<button onclick='cancelLig()'>Desligar</button>";
}

function cancelLig(){
  var d = document.getElementById("ligando");
  d.innerHTML = "";
}

function ligFav(p){
  var d = document.getElementById("ligando");
  p = p.innerHTML;
  d.innerHTML = "Ligando para " + p + "<button onclick='cancelLig()'>Desligar</button>";
}

function apagarNum() {
  var s = document.getElementById('guardanum').value;
  if (s.length > 1) {
    s = s.substring(0, s.length - 1);
    document.getElementById('guardanum').value = s;
  } else {
    document.getElementById('guardanum').value = "";
  }
}

function cancelaLiga(){
  document.getElementById("cancelDivSos").style.display = "none";
}
