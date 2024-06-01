function calcular(){
    const caixa = document.getElementById("caixa");
    const cel = document.getElementById("grauC");
    const fah = document.getElementById("grauF");
    const res = document.getElementById("res");
    let caixaNum = Number(caixa.value);
    if(caixa.value.length == 0){
        alert("Por favor, Insira um valor!");
    }
    else if(cel.checked){
       let cels = (caixaNum - 32) * (5/9);
       res.innerHTML = `Fahrenheit ➡ Celsius: ${cels.toFixed(1)}ºC `
    }

    else if(fah.checked){
        let fah = (caixaNum * 9 / 5) + 32;
        res.innerHTML = `Celsius ➡ Fahrenheit: ${fah.toFixed(1)}ºF `
    }
    else{
        alert("Por favor, escolha uma opção!")
    }
   
}