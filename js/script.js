// 🔹 Mensagens exibidas no terminal
const mensagens = [
    "Inicializando sistema...",
    "Conectando servidores...",
    "Acesso autorizado.",
    "Firewall quebrado.",
    "Bem-vindo operador."
];

// 🔹 Elementos principais da interface
const terminal =
document.querySelector(".terminal-text");

const fill =
document.querySelector(".loading-fill");

const loadingText =
document.querySelector(".loading-text");

const botao =
document.querySelector(".startBtn");

// 🔹 Inicia sequência de invasão ao clicar no botão
botao.addEventListener("click", () => {

    // Reinicia terminal e barra de progresso
    terminal.innerHTML = "";

    fill.style.width = "0%";

    loadingText.innerHTML = "0%";

    fill.classList.remove("loading-complete");

    let progresso = 0;

    let textoCompleto =
    // Junta todas as mensagens em um único texto
    mensagens.join("\n");

    let i = 0;

    // 🔹 Simula digitação letra por letra no terminal
    function digitar(){

        if(i < textoCompleto.length){

            const caractere =
            textoCompleto.charAt(i);

            // Converte quebra de linha para <br> no HTML
            if(caractere === "\n"){
                terminal.innerHTML += "<br>";
            }else{
                terminal.innerHTML += caractere;
            }

            i++;

            // Calcula porcentagem proporcional ao texto digitado
            progresso =
            Math.floor(
                (i / textoCompleto.length) * 100
            );

            fill.style.width =
            progresso + "%";

            loadingText.innerHTML =
            progresso + "%";

            setTimeout(digitar, 50);

        }else{

            fill.style.width = "100%";

            loadingText.innerHTML = "100%";

            // Ativa efeito glitch quando carregamento termina
            fill.classList.add(
                "loading-complete"
            );
        }
    }

    digitar();
});


// 🔹 RELÓGIO DIGITAL

function atualizarRelogio(){

    const agora = new Date();

    const hora =
    agora.toLocaleTimeString();

    document.getElementById("clock")
    .innerHTML = hora;
}

// 🔹 Atualiza relógio digital em tempo real
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

// 🔹 Limpa formulário após envio
document.querySelector(".enviarBtn")
.addEventListener("click", () => {

    document.getElementById("nome").value = "";

    document.getElementById("email").value = "";

    document.getElementById("mensagem").value = "";

    alert("Mensagem enviada ao sistema.");
});