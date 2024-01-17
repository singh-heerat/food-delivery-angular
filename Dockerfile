# Stage 1: Build the Angular app
FROM node:18.18.2-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
FROM nginx:1.24.0-alpine
COPY --from=build /app/dist/food-delivery-hs/browser /usr/share/nginx/html
EXPOSE 80

