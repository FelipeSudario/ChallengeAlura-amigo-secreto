# Sorteio de nomes amigo secreto!
Este projeto consiste em uma aplicação web simples que permite aos usuários adicionar nomes a uma lista,
exibi-los e realizar um sorteio para selecionar um nome aleatório. Além disso, o sistema inclui validações 
para garantir que os nomes sejam válidos e evita a inserção de campos vazios ou com números.

## Funcionalidades
### Adicionar Nome:

Permite ao usuário adicionar nomes à lista.

### Validações:
Campos vazios não são permitidos.
Nomes contendo números são rejeitados.

### Exibir Lista:

Todos os nomes adicionados são exibidos em uma lista dinâmica.
### Sortear Nome:

Seleciona um nome aleatório da lista.
Após o sorteio, limpa a lista e o array armazenado.

### Mensagens de Erro:

Mensagem exibida caso o usuário tente adicionar um campo vazio ou com números.
Alerta se o sorteio for solicitado com a lista vazia.

## Tecnologias Utilizadas
HTML:
Estrutura do layout da página.\
CSS:
Estilização básica para tornar a aplicação visualmente atraente.\
JavaScript:
Lógica de negócio e interatividade.

## Como Usar
Clone este repositório:
`git clone <URL-do-repositório>`

Abra o arquivo index.html em qualquer navegador moderno.

Utilize os seguintes recursos:

Digite um nome no campo de entrada e clique em Adicionar Nome para incluir o nome na lista.
Clique em Sortear Nome para selecionar um nome aleatório.
## Validações:

Caso o campo esteja vazio ou contenha números, uma mensagem de erro será exibida.
## Exemplo de Uso
 Adicionando Nomes:

O usuário digita "João" no campo de entrada e clica em Adicionar Nome.
O nome aparece na lista exibida abaixo.
 Sortear Nome:

Após adicionar vários nomes, o usuário clica em Sortear Nome.
Um dos nomes é exibido como sorteado, e a lista é limpa automaticamente.
## Regras de Validação
Nomes Válidos:
Apenas caracteres alfabéticos.\
Nomes Inválidos:
Campos vazios ou contendo números não são permitidos.
## Melhorias Futuras
Persistência de dados usando Local Storage.\
Adição de temas personalizáveis.\
Exportação da lista de nomes em formato de arquivo (e.g., CSV).
## Autor
Desenvolvido por **Felipe Sudário**\
Linkedin: https://www.linkedin.com/in/felipesudario/
