## Executar
1. Instale as dependências:

    ```bash
    npm install
    ```

2. Compile o código TypeScript:

    ```bash
    npx run dev
    ```
## Diagrama UML
![Diagrama UML do Sistema de Biblioteca](public/uml.png)


## Teste

Ele adiciona três funcionários à empresa, depois consulta o funcionário com matrícula 1 e exibe suas informações.
Atualiza o salário do funcionário com matrícula 2 para 7500, tenta consultar um funcionário inexistente (matrícula 4), tenta atualizar o salário de um funcionário inexistente (matrícula 5), e por último tenta definir um salário negativo para o funcionário 3, o que gera um erro.
