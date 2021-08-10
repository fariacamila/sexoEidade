function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.querySelector("div#resposta")
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }   
    else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //crinaça
            }
            else if (idade < 18){
                //adolecente
            }
            else if (idade < 50){
                //adulto
            }
            else {
                //idoso
            }
        }
        else if (fsexo [1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //crinaça
            }
            else if (idade < 18){
                //adolecente
            }
            else if (idade < 50){
                //adulto
            }
            else {
                //idoso
            }
        }
        res.innerHTML += `Detectamos ${genero} com ${idade} anos.`
    }
}