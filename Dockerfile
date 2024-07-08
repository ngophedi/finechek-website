FROM node:21
WORKDIR /home/app
COPY package.json ./
RUN npm install
# RUN npm ci -> if you have already built the frontend
COPY . .
# RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start"]