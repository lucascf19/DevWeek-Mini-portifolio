/*

Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

Passo 2 - dar um jeito de identificar o clique no elemento da aba

Passo 3 - quando o usuario clicar, desmarcar a aba selecionada

Passo 4  - marcar a aba clicada como selecionado

Passo 5 - esconder o conteudo anterior

Passo 6 - mostrar o conteudo da aba selecionada

*/
//Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

//Passo 2 - dar um jeito de identificar o clique no elemento da aba
abas.forEach((aba) => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        //Passo 3 - quando o usuario clicar, desmarcar a aba selecionada
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        // Passo 4  - marcar a aba clicada como selecionado
        aba.classList.add("selecionado")

        // Passo 5 - esconder o conteudo anterior
        const informacaoSelecionada = document.
        querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado")

        // Passo 6 - mostrar o conteudo da aba selecionada
        //${} adiciona o string antes com o aba.id
        const idDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDaAba) 
        informacaoASerMostrada.classList.add("selecionado")
    })
})