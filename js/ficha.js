function getficha() {
  let producto = document.getElementById("nom_product").value
  document.getElementById("resproduct").innerText = producto 

  let linea = document.getElementById("li_product").value
  document.getElementById("resli").innerText = linea

  let versiones = document.getElementById("ver_product").value
  document.getElementById("resver").innerText = versiones 

  let version = document.getElementById("act_product").value
  document.getElementById("resact").innerText = version 

  let modulo = document.getElementById("mod_product").value
  document.getElementById("resmod").innerText = modulo

  let descripcion = document.getElementById("des_product").value
  document.getElementById("resdes").innerText = descripcion

  let objetivo = document.getElementById("obj_product").value
  document.getElementById("resobj").innerText = objetivo

  let arquitectura = document.getElementById("arq_product").value
  document.getElementById("resarq").innerText = arquitectura

  let hardware = document.getElementById("har_product").value
  document.getElementById("reshar").innerText = hardware

  let software = document.getElementById("sof_product").value
  document.getElementById("ressof").innerText = software

  let otros = document.getElementById("otr_product").value
  document.getElementById("resotr").innerText = otros

  let fisico = document.getElementById("cli_product").value
  document.getElementById("rescli").innerText = fisico

  let logico = document.getElementById("log_product").value
  document.getElementById("reslog").innerText = logico

  let aplicativo = document.getElementById("apl_product").value
  document.getElementById("resapl").innerText = aplicativo

  let funcionales = document.getElementById("fun_product").value
  document.getElementById("resfun").innerText = funcionales 

  let adicionales = document.getElementById("adi_product").value
  document.getElementById("resadi").innerText = adicionales 

  let caracteristicas = document.getElementById("car_product").value
  document.getElementById("rescar").innerText = caracteristicas 
}
