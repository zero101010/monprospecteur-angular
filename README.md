# MonprospecteurAngular
## Instalação
- É necessário instalar as dependências dos projetos executando o `npm install`

## Rodar em modo de dev
- Para rodarmos em modo de dev após a instalação tudo que devemos fazer é executar o `npm start`

## Rodar em modo de produção
### Build
- Para rodar o modo de produção precisamos antes buildar a aplicação, pois quando estamos falando de frontend precisamos gerar os arquivos estáticos para servi-los para a web
nesse caso usamos o comando `npm run build:prod`, pois precisamos injetar as variáveis de ambiente em prod

### Execução com npm
- Podemos executar o resultado da build rodando o comando `npm run server` 
### Execução com Docker
- Para executar aplicação com o docker, apois gerar a build, é necessário executar o comando `docker build -t front .` para executar a build da imagem e após executar o comando `docker run -p 4200:4200 front`

OBS: A build da imagem é diferente da build do projeto

## Fluxos para facilitar o entendimento:
dev = instalação->Rodar em modo de dev

prod-com docker= instalação->build->buildar docker-> executar docker

prod sem docker= instalação->build-> rodar execução com npm
 