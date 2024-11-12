import Employee from './employee';

class Company {
    //importação do objeto Employee para criação da listagem de employee
    private employees: Employee[] = [];

    //metodo para adicionar funcionarios
    public adicionarFuncionario(funcionario: Employee): void {
        this.employees.push(funcionario);
    }

    //metodo para atualizr os salarios
    public atualizarSalario(matricula: number, salario: number): void {
        //employee recebe o valor com o filtro por matricula
        const employee = this.employees.find(b => b.getMatricula() === matricula);
        if (employee) {
            employee.setSalario(salario);
            console.log('Salário atualizado com sucesso!');
        } else {
            console.error(`Funcionário com matrícula ${matricula} não encontrado.`);
        }
    }

    public consultarFuncionario(matricula: number): Employee | undefined {
        const employee = this.employees.find(b => b.getMatricula() === matricula);
        if (!employee) {
            console.error(`Funcionário com matrícula ${matricula} não encontrado.`);
        }
        else {
            console.info(`\nFuncionário: ${employee?.getNome()}\nMatrícula: ${employee?.getMatricula()} \nCargo: ${employee?.getCargo()}\nSalário: ${employee?.getSalario()}\n`)
        }    
        return employee;
    }
}

export default Company;
