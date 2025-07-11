const jogadasPossiveis = ['pedra', 'papel','tesoura'];

function jogadaComputador (){
    const numeroaleatorio=(Math.floor(Math.random() * 3));
    return jogadasPossiveis[numeroaleatorio]
}

function analiseJogadas (jogadaUsuario, jogadaComputador){
 alert("Computador jogou: "+jogadaComputador)   
 if(jogadaUsuario==='pedra' && jogadaComputador==='papel'){
    alert("Você perdeu!")
 }
 if(jogadaUsuario==='papel' && jogadaComputador==='pedra'){
    alert("Você ganhou!")
 }
 if(jogadaUsuario==='tesoura' && jogadaComputador==='pedra'){
    alert("Você perdeu!")
 }
 if(jogadaUsuario==='pedra' && jogadaComputador==='tesoura'){
    alert("Você ganhou!")
 }
 if(jogadaUsuario==='papel' && jogadaComputador==='tesoura'){
    alert("Você perdeu!")
 }
 if(jogadaUsuario==='tesoura' && jogadaComputador==='papel'){
    alert("Você ganhou!")
 }
 if(jogadaUsuario === jogadoComputador){
    alert("Empate!")
 }
    
}

let jogada = ''
let resposta =''

do{
    alert("==PEDRA, PAPEL, TESOURA==")
    jogada= prompt("Qual vai ser sua jogada?Digite 'pedra', 'papel' ou 'tesoura': ").toLowerCase().trim();
    const isJogadaValida = (jogadasPossiveis.filter(jogadaValida => jogadaValida === jogada).length > 0);
    console.log(isJogadaValida)
    if(isJogadaValida) {
       const jogadaComp = jogadaComputador();
       analiseJogadas(jogada,jogadaComp);
       
    }
    
    resposta= prompt("Deseja jogar novamente?Digite 'sim' ou 'não' ").toLowerCase().trim();

}while(resposta !=='não')

