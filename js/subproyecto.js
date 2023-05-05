function valor(){
    
    let cantidad
    cantidad = document.getElementById("cant").value 
    let valor
    valor = document.getElementById("valoru").value
    //multiplicacion de valor total, para el primer producto
    let valortotal
    valortotal = cantidad*valor

    document.getElementById("total").innerHTML="<div> total " + valortotal + "</div>"

    let canti
    canti = document.getElementById("canti").value 
    let valo
    valo = document.getElementById("valor").value
    let totalvalor
    totalvalor = canti*valo
    
    document.getElementById("total2").innerHTML="<div> total " + totalvalor + "</div>"

    //duma total de el primer y segundo producto
    let varto 
    varto = valortotal+totalvalor
    document.getElementById("valortotal"). innerHTML= "<div> valor total " + varto + "</div>"
}

function factura(){

    //propiedades de los id pro 

    let produ1 = document.getElementById("pro1").value
    let cant1 = document.getElementById("cant").value
    let vuni1 = document.getElementById("valoru").value
    //multiplicacion de la cantidad y valor 
    let valor1 = cant1*vuni1 
    
    document.getElementById("respuesta").innerHTML = produ1
    document.getElementById("cantidad").innerHTML = cant1
    document.getElementById("unitario").innerHTML = vuni1
    document.getElementById("valort").innerHTML = valor1

    
    let produ2 = document.getElementById("pro2").value
    let canti2 = document.getElementById("canti").value
    let vuni2 = document.getElementById("valor").value
    let valor2 = canti2*vuni2
    
    document.getElementById("respuesta-2").innerHTML = produ2
    document.getElementById("cantidad-2").innerHTML = canti2
    document.getElementById("unitario-2").innerHTML = vuni2
    document.getElementById("totav").innerHTML = valor2
   
    //suma del valor total
    let sumatotal = valor1+valor2
    document.getElementById("valor3").innerHTML = sumatotal

}

