
function add(){
    var txtNome = document.getElementById("txtNome")
    var txtValor = document.getElementById("txtValor")
    var txtDivProdutos = document.getElementById("divProdutos")
    var txtTotal = document.getElementById("divTotal")

    var nome = txtNome.value
    var valor = parseFloat(txtValor.value) || 0
    
    if((nome == "") || (valor == "")){
        alert("O campo nome e valor devem ser preenchidos")
    }else{
        txtDivProdutos.innerHTML += nome + " - " + "R$ " + valor +  "<br>"
        
        var totalAtual = parseFloat(txtTotal.innerText) || 0;
        var novoTotal = totalAtual + parseFloat(valor);
       
       
        txtTotal.innerText = novoTotal.toFixed(2);


        txtNome.value = ""
        txtValor.value = ""
        
    } 
}


var pessoa1 = {nome: "Maria", idade: 25}
var pessoa2 = {nome: "João",
    idade: 20,
    altura: 1.75,
    casado: false,
    endereco: null,
    getDados: function(){
        return this.nome + " - " + this.idade + " anos"
    }
    }

function lerDados(){

    txt = "Nome:  " + pessoa2.getDados()
    txt += "<br>Altura" + pessoa2.altura
    txt += "<br>Casado: "
    if (pessoa2.casado) {
        txt += "Sim"
    }else{
        txt += "Não"
    }

    document.getElementById("divDados").innerHTML = txt

    //alert("ok")
}

function calcularIMC(){

    paciente = {nome: document.getElementById("txtNome1").value, 
            peso: parseInt(document.getElementById("txtPeso").value),
            altura: parseFloat(document.getElementById("txtAltura").value.replace(",","."))
    }

    var imc = paciente.peso / (paciente.altura * paciente.altura);
    imc = parseFloat(imc.toFixed(2));
    alert("O IMC do paciente "+  paciente.nome + " é: " + imc)
}