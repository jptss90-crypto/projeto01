const produtos = [
{ nome: "bola", preco: 200, estoque: 1},
{ nome: "chuteira", preco: 190, estoque: 10},
{ nome: "meiao", preco: 30, estoque: 20},
];

const produtosnovos = [
     {nome: "trave", preco: 3000, estoque: 9},
     {nome: "rede", preco: 1000, estoque: 5},
     {nome: "terno", preco: 70, estoque: 19},
]
.filter(p => p.preco > 300);

const produtos = [...produtos, ...novosprodutos]
 .filter(p => p.preco > 300);

console.log(produtosnovos);