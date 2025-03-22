# Используем базовый образ Node.js
FROM node:18-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /build

# Копируем package.json и package-lock.json
COPY package*.json .

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение (убедитесь, что в package.json скрипт сборки указан как "build")
RUN npm run build

# Итоговый этап: копируем собранные файлы в директорию на хосте
FROM nginx:alpine

# Копируем собранные файлы из этапа сборки
COPY --from=build /build/dist /usr/share/nginx/html

# Копируем кастомный конфиг nginx (если нужно)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
