
//arrow function
recuperarTexto=(idComponenete)=>{
    let componente=document.getElementById(idComponenete);
    let valorComponente=componente.value;
    return valorComponente;
}

recuperarEntero=(idComponenete)=>{
    let valorTexto=recuperarTexto(idComponenete);
    let valorEntero=parseInt(valorTexto);
    return valorEntero;
}


recuperarFloat=(idComponenete)=>{
    let valorTexto=recuperarTexto(idComponenete);
    let valorEntero=parseFloat(valorTexto);
    return valorEntero;
}