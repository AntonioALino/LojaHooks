import green from '../../src/Imgs/produtores/green.png'
import grow from '../../src/Imgs/produtores/grow.png'
import jennyjack from '../../src/Imgs/produtores/jenny-jack.png'
import potager from '../../src/Imgs/produtores/potager.png'
import salad from '../../src/Imgs/produtores/salad.png'


const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() *(max - min + 1) + min)
}

const produtores = {
  titulo: "Produtores",
  lista:[

    {nome: "Green",
    imagem: green,
    distancia: `${gerarNumeroAleatorio(1, 50)}m`,
    estrelas: gerarNumeroAleatorio(1, 5),},
    {

    nome: "Grow",
    imagem: grow,
    distancia: `${gerarNumeroAleatorio(1, 50)}m`,
    estrelas: gerarNumeroAleatorio(1,5)
  },

    {nome: "Jenny Jack",
    imagem: jennyjack,
    distancia: `${gerarNumeroAleatorio(1, 50)}m`,
    estrelas: gerarNumeroAleatorio(1,5),},
    

     { nome: "Potager",
    imagem: potager,
    distancia: `${gerarNumeroAleatorio(1, 50)}m`,estrelas: gerarNumeroAleatorio(1,5),},

    {nome: "Salad",
    imagem: salad,
    distancia: `${gerarNumeroAleatorio(1, 50)}m`, estrelas: gerarNumeroAleatorio(1,5),}

  ] 
}

export default produtores
