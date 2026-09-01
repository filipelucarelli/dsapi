
function lerDados(){
    document.getElementById("divDados").innerHTML = "Carregando..."
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        alert("readyState" + this.readyState)
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("divDados").innerHTML = this.responseText
        }
    }

    req.open("GET", "dados.txt", true)
    req.send()

}


function gerarNumeros(){
    document.getElementById("divNumeros").innerHTML = "Carregando..."
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        //alert("readyState" + this.readyState)
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("divNumeros").innerHTML = this.responseText
        }

        if (this.readyState == 4 && this.status == 404){
            divNumeros.innerHTML = "Código: " + this.status + " - " + this.statusText
        }
    }

    const numero = document.getElementById("txtNumero").value

    //req.open("GET", "servidor.php?valor="+ numero, true)
    //req.send()

    req.open("POST", "servidor.php", true)
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    req.send("valor=" + numero)

}

function converterNumero(){
    document.getElementById("divReal").innerHTML = "Carregando..."
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("divReal").innerHTML = this.responseText
        }

        if (this.readyState == 4 && this.status == 404){
            divReal.innerHTML = "Código: " + this.status + " - " + this.statusText
        }
    }

    const numero = document.getElementById("txtReal").value

    //req.open("GET", "servidor.php?valor="+ numero, true)
    //req.send()

    req.open("POST", "servidor.php", true)
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    req.send("real=" + numero * 5)

}