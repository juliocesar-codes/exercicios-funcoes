'use stratic'

// ATIVIDADE 1
function adicionarNumeros(){
        let valor1 = parseInt(document.getElementById('n1').value)
        let valor2 = parseInt(document.getElementById('n2').value)
        
        let resultado = (valor1 + valor2)

        document.getElementById('resultado').textContent = `TOTAL: ${resultado}` 
}

function subtrairNumeros(){
        let valor1 = parseInt(document.getElementById('n1').value)
        let valor2 = parseInt(document.getElementById('n2').value)
        
        let resultado = (valor1 - valor2)

        document.getElementById('resultado').textContent = `TOTAL: ${resultado}` 
}

function multiplicarNumeros(){
        let valor1 = parseInt(document.getElementById('n1').value)
        let valor2 = parseInt(document.getElementById('n2').value)
        
        let resultado = (valor1 * valor2)

        document.getElementById('resultado').textContent = `TOTAL: ${resultado}` 
}

function dividirNumeros(){
        let valor1 = parseInt(document.getElementById('n1').value)
        let valor2 = parseInt(document.getElementById('n2').value)
        
        let resultado = (valor1 / valor2)

        document.getElementById('resultado').textContent = `TOTAL: ${resultado}` 
}

// ATIVIDADE 2

function calcularTotal(){
    let quantia = parseInt(document.getElementById('quantia').value)
    let preco = parseInt(document.getElementById('preco').value)

    let total = quantia * preco

    if(quantia <= 5){
        let valorDesconto = total * 0.02
        let totalDesconto = total - valorDesconto
        console.log(totalDesconto)
     }
    
     if(quantia > 5 <= 10){
        let valorDesconto = total * 0.03
        let totalDesconto = total - valorDesconto
        console.log(totalDesconto)
     }

     if(quantia > 10){
        let valorDesconto = total * 0.05
        let totalDesconto = total - valorDesconto
        console.log(totalDesconto)
     }

     document.getElementById('mensagem').textContent = `TOTAL A PAGAR (SEM DESCONTO) ${total} TOTAL A PAGAR (COM DESCONTO) ${totalDesconto}`
}
