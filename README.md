# Título do Projeto

Uma breve descrição sobre o que esse projeto faz e para quem ele é


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`REACT_APP_BASE_URL=http://localhost:3000 ou 3001`

e rodar a aplicacao com yarn start:dev

Caso tenho hospedado a api em algum serivo basta criar a .env com a mesma chave do caso acima trocando a url
`REACT_APP_BASE_URL=UrlDoProvedor`




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/FabioRocha231/in8-frontChallange
```

Entre no diretório do projeto

```bash
  cd in8-frontChallange
```

Instale as dependências

```bash
  npm install

  ou

  yarn install
```

Inicie o servidor

```bash
  npm run start caso tenha hospedado
  or yarn start

  npm run start:dev caso nao tenha hospedado
  or yarn start:dev
```

Caso opte por usar npm lembre-se de remover o arquivo yarnlock para evitar erros de build e producao
