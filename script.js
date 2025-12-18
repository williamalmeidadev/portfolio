const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
const LARGURA_BASE = 1200;//largura base para calcular o fator de escala das partículas e meteoros -> dependendo do tamanho da tela, eu quero que tenha mais ou menos partículas e meteoros

const particulas = [];//array para armazenar as partículas
const meteoros = [];//array para armazenar os meteoros

//configurações do canva

function fatorTela() {
    return Math.min(window.innerWidth / LARGURA_BASE, 1.5);//aqui eu pego do proprio escopo da tela e divido pela largura base que defini, assim eu consigo um fator de escala que varia conforme o tamanho da tela, mas não ultrapassa 1.5
}

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    criarParticulas();
}

window.addEventListener("resize", resize);//adiciono o evento de resize na janela
resize();//chamo a função resize inicialmente para definir o tamanho do canva


//PARTICULAS

function criarParticulas() {
    particulas.length = 0;//limpo o array de partículas antes de criar novas(para evitar acúmulo ao redimensionar a tela)
    const qtdParticulas = Math.floor(60 * fatorTela());//defino a quantidade de partículas com base no fator de escala da tela
    for (let i = 0; i < qtdParticulas; i++) {//crio as partículas e jogo no array
        particulas.push({
            x: Math.random() * canvas.width,//posição x aleatória
            y: Math.random() * canvas.height,//posição y aleatória
            vx: (Math.random() - 0.5) * 0.3,//velocidade x aleatória
            vy: (Math.random() - 0.5) * 0.3,//velocidade y aleatória
            r: Math.random() * 2 + 0.5,//raio aleatório
            o: Math.random() * 0.4 + 0.1//opacidade aleatória
        });
    }
}

function desenharParticulas() {//depois que criei as particulas lá em cima, aqui eu faço o desenho e a movimentação delas
    particulas.forEach(p => {
        ctx.beginPath();//início do desenho
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);//desenho um círculo na posição (p.x, p.y) com raio p.r
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;//defino a cor de preenchimento com opacidade p.o
        ctx.fill();//preencho o círculo desenhado

        p.x += p.vx;//atualizo a posição x com a velocidade x
        p.y += p.vy;//atualizo a posição y com a velocidade y

        if (p.x < 0) p.x = canvas.width;//se sair da tela pela esquerda, reaparece na direita
        if (p.x > canvas.width) p.x = 0;//se sair da tela pela direita, reaparece na esquerda
        if (p.y < 0) p.y = canvas.height;//se sair da tela por cima, reaparece embaixo
        if (p.y > canvas.height) p.y = 0;//se sair da tela por baixo, reaparece em cima
    });
}


//METEOROS QUE PASSAM NA TELA

function criarMeteoro() {//essa função cria meteoros aleatoriamente com base no fator de escala da tela
    const fator = fatorTela();//pego o fator de escala da tela que tinha criado lá em cima
    const max = Math.floor(4 + fator * 6);//defino o número máximo de meteoros com base no fator de escala
    const chance = 0.01 * fator;//defino a chance de criar um meteoro em cada frame com base no fator de escala

    if (meteoros.length < max && Math.random() < chance) {//se o número de meteoros for menor que o máximo e a chance for satisfeita, crio um novo meteoro
        const startX = Math.random() * canvas.width;//posição x inicial aleatória
        const startY = -50 - Math.random() * 100;//posição y inicial aleatória (fora da tela) por isso uso valores negativos
        meteoros.push({//adiciono o novo meteoro ao array, ele usa a mesma lógica da de cima logo ele tem posição, velocidade, comprimento e opacidade
            x: startX,//posição x inicial
            y: startY,//posição y inicial
            len: 80 + Math.random() * 120,//comprimento aleatório
            v: 4 + Math.random() * 3,//velocidade aleatória
            o: Math.random() * 0.5 + 0.3//opacidade aleatória
        });
    }
}

function desenharMeteoros() {//essa função desenha os meteoros na tela, atualiza suas posições e remove os que saem da tela
    meteoros.forEach((m, i) => {//para cada meteoro no array eu pego a m -> meteoro atual e i -> índice do meteoro no array
        const dx = m.v * 0.6;//calculo a variação em x com base na velocidade
        const dy = m.v;//calculo a variação em y com base na velocidade

        const grad = ctx.createLinearGradient(//esse trecho cria um gradiente linear para o meteoro, dando o efeito de cauda
            m.x - dx * 10,//quando não tinha essa parte ele ficava meio quadrado, então adicionei esse gradiente para melhorar o visual
            m.y - dy * 10,
            m.x,
            m.y
        );// resumidamente o que ocorre aqui é que o gradiente começa transparente e vai ficando mais opaco até a cor do meteoro

        grad.addColorStop(0, `rgba(${COR_METEORO}, 0)`);//início do gradiente transparente
        grad.addColorStop(1, `rgba(${COR_METEORO}, ${m.o})`);//fim do gradiente com a opacidade do meteoro

        ctx.beginPath();//início do desenho
        ctx.moveTo(m.x - dx * 10, m.y - dy * 10);//posição inicial do meteoro (com base na variação)
        ctx.lineTo(m.x, m.y);//posição final do meteoro
        ctx.strokeStyle = grad;//defino o estilo de traço como o gradiente criado
        ctx.lineWidth = 1.5;//defino a largura do traço
        ctx.stroke();//desenho o traço

        m.x += dx;//atualizo a posição x do meteoro
        m.y += dy;//atualizo a posição y do meteoro

        if (m.y > canvas.height + 200) meteoros.splice(i, 1);//se o meteoro sair da tela, removo ele do array
    });
}

function loop() {

    ctx.fillStyle = "#02010a";//preencho o fundo com "preto" usei o coolors para pegar uma cor escura
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    desenharParticulas();
    criarMeteoro();
    desenharMeteoros();

    requestAnimationFrame(loop);
}

criarParticulas();//chamei ela fora pois é uma "constante", ela não precisa se recriar toda hora
loop();
