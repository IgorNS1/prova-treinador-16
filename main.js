const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_16.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_16[currentQuestionIndex].question
    questions_page_16[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_16.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const
    questions_page_16 = [
        {
            question: 'Começando por você, quais comportamentos podem definir a base para uma boa experiência do cliente?',
            answer: [
                { text: 'Fazer o pedido o mais rápido possível, sem preocupação com a qualidade.', correct: false },
                { text: 'Primeira impressão, Agilidade, Atitude, Acolhedor e Amigável.', correct: true },
                { text: 'Oferecer atendimento cordial e eficaz, sempre com sorriso no rosto e atenção ao cliente.', correct: false },
                { text: 'Tratar os clientes apenas de forma formal, sem interação pessoal.', correct: false },
            ]
        },
        {
            question: 'Qual afirmação está incorreta?',
            answer: [
                { text: 'A solução de limpeza deve ser trocada no final de cada turno.', correct: false },
                { text: 'Os esfregões devem ser lavados e higienizados após cada uso.', correct: false },
                { text: 'É importante garantir que o chão esteja sempre molhado durante o processo de limpeza.', correct: false },
                { text: 'Não precisa torcer o esfregão para remover o excesso de solução.', correct: true },
            ]
        },
        {
            question: 'O que você pode fazer para estar certo da precisão do pedido?',
            answer: [
                { text: 'Esperar a chegada do Motoboy e perguntar a ele mais informação sobre o pedido para ver se está correto.', correct: true },
                { text: 'Verificar o pedido ao recebê-lo, confirmando os itens e quantidades.', correct: false },
                { text: 'Confiar no sistema, sem a necessidade de checar os itens fisicamente.', correct: false },
                { text: 'Espera o cliente confirmar, sem verificar antes.', correct: false },
            ]
        },
        {
            question: 'O que os clientes esperam ao entrar no McDonald\'s?',
            answer: [
                { text: 'Os clientes querem ser atendidos rapidamente, sem se importar com a qualidade dos produtos.', correct: false },
                { text: 'Os clientes querem apenas um ambiente confortável, sem se preocupar com o atendimento ou qualidade dos alimentos.', correct: false },
                { text: 'Os clientes querem comida barata e em grande quantidade, sem se preocupar com a experiência do atendimento.', correct: false },
                { text: 'Os clientes querem uma ótima experiência de atendimento que seja rápida, agradável e personalizada. Eles querem uma comida saborosa que seja exatamente o que foi pedido por eles.', correct: true },
            ]
        },
        {
            question: 'O que é hospitalidade?',
            answer: [
                { text: 'Hospitalidade é apenas cumprir os pedidos do cliente sem interagir muito com ele.', correct: false },
                { text: 'Hospitalidade é dar um bom atendimento, sem se preocupar com o conforto e satisfação do cliente.', correct: false },
                { text: 'Hospitalidade é servir os clientes rapidamente, sem focar na qualidade do atendimento.', correct: false },
                { text: 'Hospitalidade é a nossa oportunidade de criar momentos deliciosos e de bem-estar para os nossos clientes.', correct: true },
            ]
        },
        {
            question: 'Quais são as ferramentas para limpeza de pisos?',
            answer: [
                { text: 'Vassouras, pás de lixo, esfregões, placas de aviso "cuidado chão molhado" e solução para pisos.', correct: true },
                { text: 'Somente esfregões e vassouras são necessárias para a limpeza do piso.', correct: false },
                { text: 'Apenas placas de aviso são necessárias, já que a limpeza é opcional.', correct: false },
                { text: 'Não há necessidade de ferramentas específicas para a limpeza de pisos.', correct: false },
            ]
        },
        {
            question: 'Como manter os contaminantes longe dos alimentos?',
            answer: [
                { text: 'Sempre cubra os alimentos com plástico, mesmo que não haja contaminação visível.', correct: false },
                { text: 'Deixe os alimentos fora da geladeira por um tempo para garantir que não contenham contaminantes.', correct: false },
                { text: 'Não há necessidade de cuidados específicos, pois o processo de cozimento elimina todos os contaminantes.', correct: false },
                { text: 'Siga a política de higiene e uniforme. Se algo cair no nosso alimento, ou os ingredientes caírem no chão, jogue-os fora.', correct: true },
            ]
        },
        {
            question: 'Qual das alternativas NÃO parte da nossa mentalidade e compromisso com o cliente?',
            answer: [
                { text: 'Sempre buscamos oferecer o melhor serviço e atender às necessidades dos nossos clientes de forma positiva.', correct: false },
                { text: 'Nos comprometemos a melhorar constantemente, superando as expectativas dos clientes.', correct: false },
                { text: 'Cumprimos apenas com o esperado, não havendo a necessidade de nos superarmos. Fazemos o mínimo para agregar valor à experiência dos nossos clientes.', correct: true },
                { text: 'Dedicamos atenção a cada cliente, tornando cada momento único e especial.', correct: false },
            ]
        },
        {
            question: 'Por que devemos entregar o cupom fiscal a todos os clientes?',
            answer: [
                { text: 'O cupom fiscal contém o número do pedido que o cliente realizou e é o comprovante de sua compra.', correct: true },
                { text: 'O cupom fiscal é uma forma de garantir que os clientes saibam quanto gastaram, mesmo sem a necessidade de comprovação.', correct: false },
                { text: 'O cupom fiscal é apenas um documento legal que não tem importância para o cliente.', correct: false },
                { text: 'O cupom fiscal é necessário apenas para clientes que solicitam, não para todos.', correct: false },
            ]
        },
        {
            question: 'Por que devemos seguir os 4 passos no momento de receber um pedido?',
            answer: [
                { text: 'Para garantir que todos os pedidos sejam feitos corretamente, sem preocupar-se com a experiência do cliente.', correct: false },
                { text: 'Para cumprir a tarefa rapidamente e sem interação com o cliente, apenas atendendo às necessidades básicas.', correct: false },
                { text: 'Para fazer com que os clientes se sintam confortáveis e especiais e promover uma experiência positiva e duradoura.', correct: true },
                { text: 'Para acelerar o processo, sem se importar com a personalização ou qualidade do atendimento.', correct: false },
            ]
        },
        {
            question: 'Qual a importância de dar as boas-vindas?',
            answer: [
                { text: 'Fazer com que os clientes se sintam importantes, acolhidos, gerar conectividade e criar uma primeira boa impressão.', correct: true },
                { text: 'É importante apenas para os clientes que vêm pela primeira vez. Para os outros, não é necessário.', correct: false },
                { text: 'Dar as boas-vindas não é tão importante, desde que o serviço seja eficiente.', correct: false },
                { text: 'As boas-vindas devem ser dadas apenas quando os clientes pedirem atenção.', correct: false },
            ]
        },
        {
            question: 'Para que servem os temporizadores das fritadeiras?',
            answer: [
                { text: 'Para garantir que o tempo de fritura seja o mais longo possível, para garantir sabor extra.', correct: false },
                { text: 'Para que todos os alimentos que fazemos sejam preparados no tempo certo, impactando diretamente na qualidade do produto.', correct: true },
                { text: 'Para permitir que o alimento seja preparado de maneira aleatória, sem se preocupar com o tempo de fritura.', correct: false },
                { text: 'Os temporizadores são desnecessários se o funcionário for experiente o suficiente para determinar o tempo de fritura.', correct: false },
            ]
        },
        {
            question: 'Um cliente está de braços cruzados na fila e parece descontente com o tempo de serviço. O que você faz?',
            answer: [
                { text: 'Ignora o cliente e aguarda que ele fale se estiver impaciente.', correct: false },
                { text: 'Aborda o cliente e afirma que assim que possível irá registrar o seu pedido.', correct: true },
                { text: 'Apresenta uma desculpa automática e continua o atendimento com outros clientes.', correct: false },
                { text: 'Diz ao cliente que ele deve esperar sem oferecer qualquer explicação ou assistência.', correct: false },
            ]
        },
        {
            question: 'Como devemos anotar os pedidos feitos por aplicativo?',
            answer: [
                { text: 'Os pedidos por aplicativo não precisam ser anotados, já que o sistema faz isso automaticamente.', correct: false },
                { text: 'Apenas registre o nome do cliente e espere ele chegar para confirmar o pedido.', correct: false },
                { text: 'Anote os pedidos manualmente e depois compare com o sistema, sem usar a tecla de localização.', correct: false },
                { text: 'Peça que o cliente mostre o código de quatro dígitos e use a tecla LOCALIZAR pedido de aplicativo para encontrar o pedido no sistema.', correct: true },
            ]
        },
        {
            question: 'Cite um ponto de atenção em momentos de grande movimento nos restaurantes.',
            answer: [
                { text: 'Aumente a velocidade de atendimento sem se preocupar com a qualidade do produto.', correct: false },
                { text: 'Deixe o cliente esperar mais tempo para garantir que todos os pedidos sejam feitos com calma.', correct: false },
                { text: 'Certifique-se de que existe sempre produto suficiente disponível na cozinha. Estocagem equivalente a 24 horas para embalagens e 2 horas de alimentos congelados e itens refrigerados disponíveis para o preparo.', correct: true },
                { text: 'Peça para os clientes reduzirem o número de itens nos pedidos para agilizar o processo.', correct: false },
            ]
        },
    ];
