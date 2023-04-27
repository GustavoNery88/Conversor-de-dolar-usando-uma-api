
const url = `https://economia.awesomeapi.com.br/all/USD-BRL`;

const Converter = async () => {
    let valorDoElemento = document.getElementById("valor")
    let resultadoNaTela = document.getElementById("valorConvertido")
    const res = await fetch(url)
    const resposta_json = await res.json()
    console.log(resposta_json)
    let dolar = Number(resposta_json.USD.bid);
    let valorEmDolar = Number(valorDoElemento.value);
    let valorEmReal = (valorEmDolar * dolar);
    resultadoNaTela.innerHTML =  "O resultado em real é R$ " + valorEmReal.toFixed(2);
    console.log(dolar)
}

