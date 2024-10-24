FROM node:18.20.4
WORKDIR /app

# Copia os arquivos de dependência
COPY ["package.json", "package-lock.json*", "./"]

# Instala as dependências
RUN npm install

# Copia o restante do código para a pasta de trabalho
COPY . .

# Compila o projeto
RUN npm run build

# Expõe a porta onde o app rodará
EXPOSE 3000

RUN npm install -g serve
CMD [ "serve", "-s", "build" ]
