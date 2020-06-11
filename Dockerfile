FROM node:lts
LABEL version="1.0.0"
LABEL maintainer="shinjan@cse.iitb.ac.in"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production \
	BROKER_URL=mqtt://localhost

CMD ["npm", "run", "start"]
