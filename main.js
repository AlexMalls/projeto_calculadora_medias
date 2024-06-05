const form = document.getElementById("form_atividade")
const imgAprovado = "<img src='./images/aprovado.png' alt='Emoji Aprovado' />"
const imgReprovado = "<img src='./images/Reprovado.png' alt='Emoji Reprovado' />"
const atividades = []
const notas = []
const aprovado = '<span class="resultado aprovado">Aprovado</span>'
const reprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = prompt("Digite a nota minima para aprovação: ")

let linhas = ""

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade")
    const inputNotaAtividade = document.getElementById("nota-atividade")

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
        
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        
        linhas += linha;
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function limpaInputs() {
    document.getElementById("nome-atividade").value = ""
    document.getElementById("nota-atividade").value = ""
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? aprovado : reprovado

    console.log(mediaFinal)

}



form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    limpaInputs()
    atualizaMediaFinal()
})

