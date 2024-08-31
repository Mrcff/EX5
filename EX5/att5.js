let contatos = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do contato:");
    let telefone = prompt("Digite o telefone do contato:");
    let idade = prompt("Digite a idade do contato:");
    let profissao = prompt("Digite a profissão do contato:");

    let contato = {
        nome: nome,
        telefone: telefone,
        idade: idade,
        profissao: profissao
    };

    contatos.push(contato);
}

console.log("Lista de contatos:");
for (let i = 0; i < contatos.length; i++) {
    console.log(`Contato ${i + 1}:`);
    console.log(`Nome: ${contatos[i].nome}`);
    console.log(`Telefone: ${contatos[i].telefone}`);
    console.log(`Idade: ${contatos[i].idade}`);
    console.log(`Profissão: ${contatos[i].profissao}`);
    console.log("---------------------------");
}
