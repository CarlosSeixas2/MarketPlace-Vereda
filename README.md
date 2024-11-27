# App

Vereda MarketPlace de Materiais de Contrução.

## RFs (Requisitos funcionais)

- [ ] Deve ser possível realizar cadastro de usuários(pessoas físicas e jurídicas);
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário(pessoa e empresa) logado;
- [ ] Os usuários devem ser capazes de cadastrar, atualizar e excluir seus produtos do marketplace;
- [ ] Deve ser possível visualizar produtos cadastrados com filtros como categoria, preço e fornecedo;
- [ ] Os usuários devem ser capazes de avaliar e comentar em diferentes produtos;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] Antes de cadastrar um usuário deve ser enviado um email com um codigo de verificação;
- [ ] A senha deve conter no mínimo 8 caracteres, incluindo ao menos uma letra maiúscula, um número e um caractere especial;
- [ ] Tanto pessoas físicas quanto empresas podem cadastrar produtos no sistema;
- [ ] Apenas o proprietário do produto pode editar ou excluir os itens cadastrados;
- [ ] O sistema deve integrar um gateway de pagamento;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);