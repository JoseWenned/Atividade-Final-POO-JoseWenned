// QUESTÃO 1

abstract class Pessoa{

    nome: string;
    cpf: string;
    idade: number;

    constructor(nome: string, cpf: string, idade:number){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
    }

    public pessoaNome(){
        console.log(`Nome: ${this.nome}`)
    }

    public pessoaCpf(){
        console.log(`CPF: ${this.cpf}`)
    }

    public pessoaIdade(){
        console.log(`Idade: ${this.idade}`)
    }

    // QUESTÃO 2

    public fazerAniversario(){
        console.log(`Dia do aniversário: ${this.idade}`)
    }

};

class disciplina{

    codigo: string;
    nome: string;
    semestre: string;

    constructor(codigo: string, nome: string, semestre:string){
        this.nome = nome
        this.codigo = codigo
        this.semestre = semestre
    }

    disciplina(){
        console.log(`Aluno da disciplina: ${this.nome, this.codigo, this.semestre}`)
    }

}

// QUESTÃO 3

// VISITANTE ---OK---
class Visitante extends Pessoa{

    pessoaNome(): void {
        console.log(`Nome do visitante: ${this.nome}`)
    }

    pessoaCpf(): void {
        console.log(`CPF do visitante: ${this.cpf}`)
    }

    pessoaIdade(): void {
        console.log(`Idade do visitante: ${this.cpf}`)
    }

}

// ALUNO ---OK---
class Aluno extends Pessoa{

    matricula: string; 

    constructor(matricula: string, nome: string, cpf: string, idade: number){
        super(nome, cpf, idade)
        this.matricula = matricula
    };

    alunoNome(): void {
        console.log(`Nome do aluno: ${this.nome}`)
    }

    alunoCpf(): void {
        console.log(`cpf do aluno: ${this.cpf}`)
    }

    alunoIdade(): void {
        console.log(`Idade do aluno: ${this.idade}`)
    }

    pagarMensalidade(){
        console.log(`Pagamento da matrícula: ${this.matricula}`)
    }
    
}

// PROFESSOR ---OK---
class Professor extends Pessoa{

    centro: string;

    constructor(centro: string, nome:string, cpf: string, idade: number){
        super(nome, cpf, idade)
        this.centro =centro
    }

    professorNome(): void {
        console.log(`Nome do professor: ${this.nome}`)
    }

    professorCpf(): void {
        console.log(`cpf do professor: ${this.cpf}`)
    }

    proefessorIdade(): void {
        console.log(`Idade do professor: ${this.idade}`)
    }

    darAula(){
        console.log(this.centro)
    }

}

class Bolsistas extends Aluno{

    bolsista: number

    constructor(nome: string, cpf: string, matricula: string, idade: number, bolsista: number){
        super(matricula, cpf, nome, idade)
        this.bolsista = bolsista
    }

    alunoNome(): void {
        console.log(`Nome do aluno bolsista: ${this.nome}`)
    }

    alunoCpf(): void {
        console.log(`cpf do aluno bolsista: ${this.cpf}`)
    }

    alunoIdade(): void {
        console.log(`Idade do aluno bolsista: ${this.idade}`)
    }

    pagarMatricula(): void {
        console.log(`Pagamento da matrícula aluno bolsista: ${this.bolsista}`)
    }

}

class Regular extends Aluno{

    regular: number

    constructor(nome: string, cpf: string, matricula: string, idade: number, regular: number){
        super(matricula, cpf, nome, idade)
        this.regular = regular
    }

    alunoNome(): void {
        console.log(`Nome do aluno regular: ${this.nome}`)
    }

    alunoCpf(): void {
        console.log(`cpf do aluno regular: ${this.cpf}`)
    }

    alunoIdade(): void {
        console.log(`Idade do aluno regular: ${this.idade}`)
    }

    pagarMatricula(): void {
        console.log(`Pagamento da matrícula aluno regular: ${this.regular}`)
    }

}

// QUESTÃO 4

class Turma {



}
