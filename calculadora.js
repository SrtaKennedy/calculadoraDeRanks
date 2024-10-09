function calcularSaldo(vitorias, derrotas) {

    //Calcula o saldo das vitórias
    let saldoDeVitorias = vitorias - derrotas;

    //aqui determina o nível baseado no número de vitórias
    let nivel = '';

    switch (true) {
        case (vitorias < 10):
            nivel = 'Ferro';
            break;
        case (vitorias >= 11 && vitorias <= 20):
            nivel = 'Bronze';
            break;
        case (vitorias >= 21 && vitorias <= 50):
            nivel = 'Prata';
            break;
        case (vitorias >= 51 && vitorias <= 80):
            nivel = 'Ouro';
            break;
        case (vitorias >= 81 && vitorias <= 90):
            nivel = 'Diamante';
            break;
        case (vitorias >= 91 && vitorias <= 100):
            nivel = 'Lendário';
            break;
        case (vitorias >= 101):
            nivel = 'Imortal';
            break;
        default:
            nivel = 'Indefinido';
    }

    //Exibe a mensagem com saldo e nível
    console.log(`O Herói tem um saldo de ${saldoDeVitorias} e está no nível de ${nivel}`);
}

//exemplo de uso:
calcularSaldo(55, 20);
