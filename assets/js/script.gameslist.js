// console.log("JS está ok")


function verificarInputs(){
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

console.log(titulo);
console.log(preco);
console.log(descricao);
console.log(plataforma);
console.log(imgLink);

    if(titulo==""|| preco=="" || descricao == "" || plataforma == "" || imgLink == ""){
        console.log("Os inputs estão vazios");
        envieMsg("Preencha todos os campos", "erro");
        return true
    }else if(!isURLValida(imgLink)){
        envieMsg("Link inválido", "erro");
    }
    else{
        console.log("Os inputs estão preenchidos");
        envieMsg("Cadastrado com sucesso", "sucesso");
        return false;
    }
}


function envieMsg(msg, tipoMgs){
    let msgDiv= document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela= `
    <p class='${tipoMgs}'>${msg}</p>
    `
    msgDiv.innerHTML = msgParaTela;

    setTimeout(function(){
        msgDiv.innerHTML= '';
    },3000)
}

class Jogo{
    constructor(id, titulo, preco, descricao, plataforma, imgLink){
        this.id = id;
        this.titulo = titulo;
        this.preco= preco;
        this.descricao= descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;
    }
}

// const jogoTeste = new Jogo("Teste", "123", "DescTest", "Steam", "imgURL");

// console.log(jogoTeste);

function comporJogo(){
    let id = gerarId();
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    const jogo = new Jogo(id,titulo, preco, descricao, plataforma, imgLink);

    console.log(jogo);

    bibliotecaJogos.adicionar(jogo);
    console.log(bibliotecaJogos);

   
    renderizarConteudo();
   
}

class ListaJogos{
    constructor(){
        this.listaJogosArray=[];
    }

    adicionar(parametro){
        if(verificarInputs() == false){
            this.listaJogosArray.push(parametro);
            limparInputs();
        } 
    
    }

    deletar(id){
        this.listaJogosArray = this.listaJogosArray.filter(task => (task.id != id));
    }

   
}

// const listaTeste = new ListaJogos();
// console.log(listaTeste);

const bibliotecaJogos = new ListaJogos();





function limparInputs(){
    document.getElementById("input-titulo").value = "";
    document.getElementById("input-preco").value = "";
    document.getElementById("input-descricao").value = "";
    document.getElementById("input-plataforma").value = "";
    document.getElementById("input-imgLink").value = "";
}

function renderizarConteudo(){
    const listaHTML = document.getElementById("conteiner-lista");
    listaHTML.innerHTML = "";

    let array = bibliotecaJogos.listaJogosArray;

    array.forEach(jogo => {
        const jogoDiv = `
            <div class= "jogoDetalhe">
            <img src= "${jogo.imgLink}" alt="${jogo.titulo}">
                <p>Título: ${jogo.titulo}</p>
                <p>Preço: ${jogo.preco}</p>
                <p>Descrição: ${jogo.descricao}</p>
                <p>Plataforma: ${jogo.plataforma}</p>
                <button class="button" onclick="remover(${jogo.id})">🗑</button>
            </div>
        `;

        listaHTML.innerHTML += jogoDiv;
    });

}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function remover(id){
    bibliotecaJogos.deletar(id);
    renderizarConteudo();
}

function gerarId(){
    return Math.floor(Math.random()*9999)
}
