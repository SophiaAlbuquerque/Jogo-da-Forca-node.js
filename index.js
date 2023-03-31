console.log("BEM VINDO(A) AO MEU JOGO DA FORCA");
console.log("Chame uma amigo para adivinhar a palavra secreta\n");
var palavraSecreta = prompt("Qual será a palavra secreta? ");
console.clear();
var tentativas = 6;
var letrasChutadas = [];
var arrayPalavraSecreta = palavraSecreta.split("");
for (let i = 0; i < arrayPalavraSecreta.length; i++) {
  letrasChutadas[i] = '_';
}

function arrayIgual(a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

console.log("BEM VINDO(A) AO MEU JOGO DA FORCA");
console.log(`Adivinhe a palavra secreta que seu amigo escolheu, você tem ${tentativas} tentativas\n`);
while (tentativas >= 0) {
  if (tentativas == 0) {
    console.log("\nVOCÊ PERDEU");
    break;
  }
  else if (arrayIgual(letrasChutadas, arrayPalavraSecreta) == true || chute == palavraSecreta) {
    console.log("\nÉ ISSO VOCÊ VENCEU");
    break;
  }
  var chute = prompt("Digite uma letra ou o seu chute: ");
  if (!letrasChutadas.includes(chute) && arrayPalavraSecreta.includes(chute)) {
    console.log("Essa tem\n");

    for (let i = 0; i < arrayPalavraSecreta.length; i++) {
      if (chute == arrayPalavraSecreta[i]) {
        letrasChutadas[i] = chute;
      }
    }
    console.log(letrasChutadas);
  }
  else if (letrasChutadas.includes(chute)) {
    console.log("Essa já foi");
  }
  else if (!arrayIgual(letrasChutadas, arrayPalavraSecreta) == true && chute != palavraSecreta) {
    console.log("Essa não tem");
    tentativas--;
    console.log(`Você ainda tem ${tentativas} tentativas\n`);
  }
}