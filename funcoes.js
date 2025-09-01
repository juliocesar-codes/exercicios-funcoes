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

    if(quantia = ''){
        
    }

    if(quantia <= 5){
        let valorDesconto = total * 0.02
        let totalDesconto = total - valorDesconto
        document.getElementById('resultadoComDesconto').textContent = `Total (com desconto): R$${totalDesconto}`
        document.getElementById('resultadoSemDesconto').textContent = `Total (com desconto): R$${total}`
        document.getElementById('desconto').textContent = `Desconto: R$${valorDesconto}`
     }
    
     else if(quantia > 5 && quantia <= 10){
        let valorDesconto = total * 0.03
        let totalDesconto = total - valorDesconto
        document.getElementById('resultadoComDesconto').textContent = `Total (com desconto): R$${totalDesconto}`
        document.getElementById('resultadoSemDesconto').textContent = `Total (com desconto): R$${total}`
        document.getElementById('desconto').textContent = `Desconto: R$${valorDesconto}`
     }

     else if(quantia > 10){
        let valorDesconto = total * 0.05
        let totalDesconto = total - valorDesconto
        document.getElementById('resultadoComDesconto').textContent = `Total (com desconto): R$${totalDesconto}`
        document.getElementById('resultadoSemDesconto').textContent = `Total (com desconto): R$${total}`
        document.getElementById('desconto').textContent = `Desconto: R$${valorDesconto}`
     }else{} 
}

// ATIVIDADE 3

function calcularAulas(){
    let quantia = parseInt(document.getElementById('quantiaAulas').value)
    const nivel = document.getElementById('selecao')
    const valorSelecionado = nivel.value;
    let nivel1 = parseInt(document.getElementById('nivel1').value)
    let nivel2 = parseInt(document.getElementById('nivel2').value)
    let nivel3 = parseInt(document.getElementById('nivel3').value)

    if(valorSelecionado == nivel1){
        let totalSalario = quantia * nivel1
        document.getElementById('salario').textContent = `Salário: R$${totalSalario}`
    }
    else if(valorSelecionado == nivel2){
        let totalSalario = quantia * nivel2
        document.getElementById('salario').textContent = `Salário: R$${totalSalario}`
    }
    else if(valorSelecionado == nivel3){
        let totalSalario = quantia * nivel3
        document.getElementById('salario').textContent = `Salário: R$${totalSalario}`
    }else{}
}

// ATIVIDADE 4

function calcularImc(){
    let peso = parseInt(document.getElementById('peso').value)
    let altura = parseInt(document.getElementById('altura').value)
    let imc = peso / (altura ** 2)

    console.log(imc)
}