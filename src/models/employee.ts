class Employee {
    private matricula: number;
    private nome: string;
    private cargo: string;
    private salario: number;

    constructor(matricula: number, nome: string, cargo: string, salario: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }

    public getNome(): string {
        return this.nome;
    }

    public setSalario(salario: number): void {
        if (salario > 0) {
            this.salario = salario;
        } else {
            console.error('Salário deve ser positivo.');
        }
    }

    public getMatricula(): number {
        return this.matricula;
    }
}

export default Employee;
