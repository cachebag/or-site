FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=development
ENV PORT=3000
ENV BROWSER=none
ENV HOST=0.0.0.0
ENV REACT_APP_DISABLE_TELEMETRY=true
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Configure development server to listen on all interfaces
ENV HOST=0.0.0.0
EXPOSE 3000 5173
ENTRYPOINT ["npm", "run", "start"]