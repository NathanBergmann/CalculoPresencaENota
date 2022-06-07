

function calcularMedia(media) {
    var notaSemestre = document.getElementById('notaSemestre');
    var nota1 = document.getElementById('nota1');
    var nota2 = document.getElementById('nota2');
    var media = (parseInt(nota1.value) + parseInt(nota2.value) + parseInt(notaSemestre.value)) / 3
    alert('O Resultado da Média antes do Exame é : ' + media);
    return media;
}

function calcularFrequencia(frequencia) {

    var qtdFaltas = document.getElementById('quantidadeFaltas');
    var qtdTotalAulas = document.getElementById('quantidadeAulas');
    var frequencia = 100 - (parseInt(qtdFaltas.value) / parseInt(qtdTotalAulas.value) * 100)

    alert('O Resultado da Frequencia é : ' + frequencia + '%');
    return frequencia;
}



function exame(media){
    for (var i = 0; 5 >= ((media + (i/10))/2); i++) {
        var exameNota = (i/10)
        if (5 <= ((media + (i/10))/2)) {
            return exameNota
    }}
    return exameNota
}

function verificarAprovacao() {
    const frequencia = calcularFrequencia()
    const media = calcularMedia()
    const exameNota = exame(media)
    var resultadoMedia = media;
    var resultadorFrequencia = frequencia;

    if ((parseInt(resultadoMedia) > 7) && (parseInt(resultadorFrequencia)) >= 75)
        alert("Aluno APROVADO com Média = " + resultadoMedia + " e Frequencia =" + resultadorFrequencia + "%");
    else if((parseInt(resultadoMedia) > 7) && (parseInt(resultadorFrequencia)) < 75)
        alert("Aluno Reprovado por falta, Presença = " + resultadorFrequencia + "%")
    else if((parseInt(resultadoMedia) < 7) && (parseInt(resultadorFrequencia)) >= 75)
        alert("Aluno está em exame e precisará tirar: " + exameNota + " para passar.")
};

function calcularNotaFinal() {
    const media = calcularMedia()
    var resultadoMedia = media;
    var notaExame = document.getElementById('notaExame')

    if ((parseInt(resultadoMedia) + parseInt(notaExame.value))/2 >= 5){
        alert ("Aluno Aprovado");}
else{
        alert ("Aluno Reprovado");}
}