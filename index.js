function calcular() {
    const caixa = document.getElementById("caixa");
    const cel = document.getElementById("grauC");
    const fah = document.getElementById("grauF");
    const res = document.getElementById("res");
    let caixaNum = Number(caixa.value);
    
    if (caixa.value.length == 0) {
        alert("Por favor, insira um valor!");
    } else if (cel.checked) {
        // Converte Fahrenheit para Celsius
        let cels = (caixaNum - 32) * (5/9);
        console.log("Temperatura em Celsius:", cels);
        res.innerHTML = `Fahrenheit ➡ Celsius: ${cels.toFixed(1)}ºC `;
        
        // Define a imagem de fundo com base na temperatura em Celsius
        if (cels < 0) {
            document.body.style.backgroundImage = 'url(imagens/neve.jpg)'; 
        } else if (cels >= 0 && cels < 25) {
            document.body.style.backgroundImage = 'url(imagens/normal.jpg)'; 
        } else {
            document.body.style.backgroundImage = 'url(imagens/calor.jpg)'; 
        }
    } else if (fah.checked) {
        // Converte Celsius para Fahrenheit
        let fahren = (caixaNum * 9 / 5) + 32;
        console.log("Temperatura em Fahrenheit:", fahren);
        res.innerHTML = `Celsius ➡ Fahrenheit: ${fahren.toFixed(1)}ºF `;
        
        // Define a imagem de fundo com base na temperatura em Celsius
        // (caixaNum é a temperatura em Celsius neste caso)
        if (caixaNum < 0) {
            document.body.style.backgroundImage = 'url(imagens/neve.jpg)'; 
        } else if (caixaNum >= 0 && caixaNum < 25) {
            document.body.style.backgroundImage = 'url(imagens/normal.jpg)'; 
        } else {
            document.body.style.backgroundImage = 'url(imagens/calor.jpg)'; 
        }
    } else {
        alert("Por favor, escolha uma opção!");
    }
}
