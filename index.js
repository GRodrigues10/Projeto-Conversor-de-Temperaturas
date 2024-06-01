function calcular(){
    const caixa = document.getElementById("caixa");
    const cel = document.getElementById("grauC");
    const fah = document.getElementById("grauF");
    const res = document.getElementById("res");
    let caixaNum = Number(caixa.value);
    
    if(caixa.value.length == 0){
        alert("Por favor, Insira um valor!");
    } else if(cel.checked){
       let cels = (caixaNum - 32) * (5/9);
       console.log("Temperatura em Celsius:", cels);
       res.innerHTML = `Fahrenheit ➡ Celsius: ${cels.toFixed(1)}ºC `;
       
        if (cels < 0) {
            document.body.style.backgroundImage = 'url(imagens/neve.jpg)'; 
        }
        else if(cels > 0 && cels < 25){
            document.body.style.backgroundImage = 'url(imagens/normal.jpg)'; 
        }

        else{
            document.body.style.backgroundImage = 'url(imagens/calor.jpg)'; 
        }
       
    } else if(fah.checked){
        let fah = (caixaNum * 9 / 5) + 32;
        console.log("Temperatura em Fahrenheit:", fah);
        res.innerHTML = `Celsius ➡ Fahrenheit: ${fah.toFixed(1)}ºF `;

        if (fah < 0) {
            document.body.style.backgroundImage = 'url(imagens/neve.jpg)'; 
        }
        else if(fah > 0 && fah < 25){
            document.body.style.backgroundImage = 'url(imagens/normal.jpg)'; 
        }

        else{
            document.body.style.backgroundImage = 'url(imagens/calor.jpg)'; 
        }
    } else {
        alert("Por favor, escolha uma opção!");
    }
}