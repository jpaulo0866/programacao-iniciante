let calculos = []

function mostrarResultados() {
    let divResultados = document.getElementById("resultados")
    divResultados.innerHTML = ''
    
    for (let index = 0; index < calculos.length; index++) {
        const element = calculos[index];
        divResultados.innerHTML += `
            <div>
            <p>${element.operacao}</p>
            </div>
        `
    }
}

function limparResultados() {
    calculos = []
    mostrarResultados()
}

function operacaoMatematica(tipo) {
    const entrada1 = parseFloat(document.getElementById("entrada1").value)
    const entrada2 = parseFloat(document.getElementById("entrada2").value)

    let resultado;
    let op
    switch (tipo) {
        case 'SOMA': 
            resultado = entrada1 + entrada2
            op = '+'
            break;
        case 'SUBTRACAO': 
            resultado = entrada1 - entrada2 
            op = '-'    
            break;
        case 'MULTIPLICACAO': 
            resultado = entrada1 * entrada2
            op = '*'
            break;
        case 'DIVISAO': 
            resultado = entrada1 / entrada2
            op = '/'
            break;
        case 'MOD':
            resultado = entrada1 % entrada2
            op = 'MOD'
            break;
        default:
            op = '%'
            resultado = (entrada1 * entrada2) / 100
    }

    document.getElementById("saida1").value = resultado
    calculos.push({
        tipo: tipo,
        entrada1: entrada1,
        entrada2: entrada2,
        resultado: resultado,
        operacao: `${entrada1} ${op} ${entrada2} = ${resultado}`
    })
    mostrarResultados()
}

function limparCampos() {
    document.getElementById("entrada1").value = ''
    document.getElementById("entrada2").value = ''
    document.getElementById("saida1").value = ''
}

function usarResultado() {
    const resultado = document.getElementById("saida1").value
    limparCampos()
    document.getElementById("entrada1").value = resultado
}