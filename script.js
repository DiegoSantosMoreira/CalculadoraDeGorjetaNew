function apagarTudo(){
    
    document.getElementById("numeropessoa").value = 1;
    document.getElementById("totalPessoa").value = 0;
    document.getElementById("totalGorjeta").value = 0;
    document.getElementById("totalPagar").value = 0;
    document.getElementById("consumo").value = "";
    document.getElementById("porcentagem").value = "";
}
function calcularGorjeta(){
    var consumo = document.getElementById("consumo").value;
    if(consumo){
        var porcentagem = document.getElementById("porcentagem");
        var valor = porcentagem.options[porcentagem.selectedIndex].value;
        var numeroPessoa = document.getElementById("numeropessoa").value;
        
        document.getElementById("totalGorjeta").value = (consumo * valor).toFixed(2);
        
        document.getElementById("totalPagar").value = (parseFloat(document.getElementById("totalGorjeta").value) + parseFloat(consumo)).toFixed(2);
        document.getElementById("totalPessoa").value = (parseFloat(document.getElementById("totalPagar").value) / numeroPessoa).toFixed(2);
    }
    else{
        alert("Defina um valor para o consumo");
    }
}
