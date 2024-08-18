let vida = 3;
let energia = 100;
var quantidadeElementos_amor = 5
var quantidadeElementos_amizade = 2
let dia = 1;
let habilidade = 0;
let descansouHoje = false;
let game_state = 0; // Controle de fases do jogo

console.log(quantidadeElementos_amizade)
console.log(quantidadeElementos_amor)

function verStatus() {
    alert(`
    Vida: ${vida}
    Energia: ${energia}
    Descançou hoje: ${descansouHoje}
    Inventário: amor: ${quantidadeElementos_amor}x, amizade:${quantidadeElementos_amizade}x
    Dia: ${dia}
    Habilidade: ${habilidade.toFixed(1)}
    Fase: ${game_state}
    `);
}

function quartoOpcao() {
    let quarto = prompt("Você está em seu quarto, o que deseja fazer?\n[1]-Dormir\n[2]-Descansar\n[3]-Voltar\n[4]-Ver inventário\n[5]-introdução de sua jornada");

    switch (quarto) {
        case "1":
            dormir();
            break;
        case "2":
            descansar();
            break;
        case "3":
            alert("Voltando para a sala."); 
            break;
        case "4":
            verStatus();
            break;
        case "5":
            alert("seu nome é iman mahdavi, seu sonho é entrar para as olimpiadas de paris 2024,")
            alert(" mas para isso, é preciso muito treinamento,")
            alert("com a ajuda de sua familia, você precisará derrotar seus oponente para se provar viável para entrar para o time de luta livre da república islâmica.")
            alert("será que você consiguirá?")
        break
        default:
            alert("Opção inválida."); 
            break;
    }
}

function dormir() {
    energia = 100;
    dia += 1;
    descansouHoje = false;
    alert("Você dormiu e restaurou sua energia."); 
}

function descansar() {
    if (!descansouHoje) {
        if (energia < 100) {
            energia = energia + 30, 100;
            alert("Você descansou e recuperou energia."); 
        } else {
            alert("Você já está com a energia cheia e não precisa descansar."); 
        }
        descansouHoje = true;
    } else {
        alert("Você já descansou hoje. Espere até o dia seguinte."); 
    }
}

function lutarNoClube() {
    let luta = prompt("Você chegou ao clube da luta. Deseja lutar?\n[1]-Sim\n[2]-Não\n[3]-Enfrentar oponente");

    if (energia <= 0) {
        alert("Você não tem energia para lutar. Vá descansar."); 
        return;
    }

    switch (luta) {
        case "1":
            if (energia <= 39) {
                alert("Energia muito baixa para treinar, vá descansar ou dormir para treinar.");
            } else {
                habilidade += 10 +(0,2 * quantidadeElementos_amor);
                energia -= 40;
                alert(`Você lutou e ganhou experiência em luta, mas perdeu energia.\nhabilidade:${habilidade.toFixed(1)};\nenergia:${energia}`); 
            }
            break;
        case "2":
            alert("Você não quis lutar, então você vai para a casa."); 
            break;
        case "3":
            enfrentarOponente();
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

function enfrentarOponente() {
    if (habilidade >= 400) {
        alert("Você lutou contra seu oponente, venceu graças ao seu treinamento, mas um terremoto atingiu a região. Agora, você terá que se mudar para a Itália, enfrentando inimigos mais fortes,\nmas com um buff em sua progressão."); 
        game_state = 1; // Mudar para a próxima fase
    } else {
        alert("Você lutou e perdeu a oportunidade de evoluir seu ranque."); 
    }
}

function reiniciarJogo() {
    alert("Saindo do jogo."); 
    verStatus();
}

function faseItalia() {
    let opcao = prompt("Bem-vindo à Itália! O que deseja fazer?\n[1]-Treinar\n[2]-socializar\n[3]-Ver inventário\n[4]-dormir em sua pousada local\n[5]-sua jornada pt.2");

    switch (opcao) {
        case "1":
            alert("Você treinou e melhorou suas habilidades."); 
            habilidade += 20 +(0,5 * quantidadeElementos_amizade)
            energia -=50
            break;
        case "2":
            alert("você conheceu um amigo novo, agora você tem um insentivo a mais para seu treinamento")
            quantidadeElementos_amizade += 1
            break;
        case "3":
            verStatus();
            break;
        case "4":
            pousadaOpcao()
            break
        case "5":
            alert("chegando na itália, você vê uma linda paisagem com várias pessoas junto com as suas famílias, infelizmente, você não conseguiu trazer a sua junto, mas pelo menos você fará novos amigo pela região.")
            alert("agora é a hora de engolir o choro e usar sua tristeza como motivação para seus treinos e realizar seu sonho")
        default:
            alert("Opção inválida."); 
            break;
    }
}

function pousadaOpcao() {
    let pousada = prompt("Você está em sua pousada, o que deseja fazer?\n[1]-Dormir\n[2]-Descansar\n[3]-Voltar\n[4]-Ver inventário");

    switch (pousada) {
        case "1":
            dormir();
            break;
        case "2":
            descansar();
            break;
        case "3": 
            break;
        case "4":
            verStatus();
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

function fase_olimpiadas(){
    alert("parabéns, você realizou seu sonho de entrar nas olimpiadas de paris 2024, porém, você não irá entrar na equipe da república islâmica do irã, como você se refugiou para a itália, você irá entrar na equipe de refugiados representrando a itália na luta livre...")
    alert("agora, para decidir se ganhou ou não alguma medalha, apenas na casé tv para saber")
    alert(`estatisticas finais:${inventario()}`)
}

let continuar = true;

while (continuar) {
    let inicio = prompt("Você está em casa, o que deseja fazer?\n[1]-Ir para o quarto\n[2]-Falar com pai/mãe\n[3]-Ir ao clube da luta\n[4]-Ver inventário\n[5]-Reiniciar jogo");

    switch (inicio) {
        case "1":
            quartoOpcao();
            break;
        case "2":
            alert("Você conversou com seus pais. Eles te deram conselhos sábios."); 
            quantidadeElementos_amor += 1
            break;
        case "3":
            lutarNoClube();
            break;
        case "4":
            verStatus();
            break;
        case "5":
            continuar = false;
            reiniciarJogo();
            break;
        default:
            alert("Opção inválida, por favor, tente novamente."); 
            break;
    }

    // Verifica se o jogador perdeu o jogo
    if (vida <= 0) {
        alert("Você perdeu toda sua vida. Fim de jogo."); 
        continuar = false;
    }

    // Controle de fases com game_state
    if (game_state == 1) {
        faseItalia();
    }

    if (game_state == 2){
        fase_olimpiadas()
    }
}
