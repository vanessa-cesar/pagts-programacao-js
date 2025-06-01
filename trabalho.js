
const nome = 'Pantera' 

export function
geradorDeTagsDeIdentificacao(nome){
    const nomeMaiusculo = nome.toUpperCase();
    console.log(`Nome do Pet ${nomeMaiusculo}`);
    return nomeMaiusculo;
}

const idade = 1
const porte = 'M'
const idadeAdocao = 1

export function verificarSePodeSerAdotado(idade, porte) {
    const podeAdotar = idade === idadeAdocao && porte === 'M';
    console.log('Adoção Permitida!');
    return podeAdotar;
  }


const nomePet = 'Pitoco'
const idadePet = 1
const peso = 14.5
const gramas = 4350

export function calcularConsumoDeRacao(nomePet, idadePet, peso){
 if( peso === 14.5){
console.log(`Nome: ${nomePet}, Idade: ${idadePet}, Peso: ${peso} kg, Consumo diário: ${gramas} gramas`);
    return gramas;
}
}

const portePet = "pequeno"
export function decidirTipoDeAtividadePorPorte(portePet) {
  if (portePet === 'pequeno') {
    console.log(`Porte ${portePet} brincar dentro de casa`);
     return 'brincar dentro de casa';
  }
}

export async function buscarDadoAsync(){
    return "Pipoca";
}