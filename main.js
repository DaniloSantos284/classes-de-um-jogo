class heroi{
    constructor(nome, idade, tipo){ // Tipo - Guerreiro, mago, monge ou ninja
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
 }
}
let process = new heroi("daniloSan", 21, "ninja")
function ofensiva(){
    let ataque = ["shuriken", "longe"]
    console.log(`O ${process.tipo} atacou usando ${ataque[0]}`);
    if (ataque[1] == "longe"){
        console.log(`${process.nome} causou dano crítico pois usou ${ataque[0]} de longe`);
        
    }
    

}
console.log(process);
ofensiva();
