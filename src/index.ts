import Employee from './models/employee';
import Company from './models/company';

function main() {
    const empresa = new Company();

    const funcionario1 = new Employee(1, 'Lara', 'Desenvolvedora', 5000);
    const funcionario2 = new Employee(2, 'Antonio', 'Gerente de Projetos', 7000);
    const funcionario3 = new Employee(3, 'Daniel', 'Analista de Dados', 4500);

    empresa.adicionarFuncionario(funcionario1);
    empresa.adicionarFuncionario(funcionario2);
    empresa.adicionarFuncionario(funcionario3);

    const consultaFuncionario1 = empresa.consultarFuncionario(1);
    if (consultaFuncionario1) {
        console.log(`Funcionário ${consultaFuncionario1.getNome()} encontrado: ${consultaFuncionario1.getMatricula()} - Cargo: ${consultaFuncionario1.getSalario()}`);
    }
    empresa.atualizarSalario(2, 7500);
    empresa.consultarFuncionario(4);
    empresa.atualizarSalario(5, 6000);
    funcionario3.setSalario(-3000);
}

main();
