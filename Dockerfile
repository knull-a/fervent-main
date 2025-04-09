FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run type-check && pnpm run build-only

EXPOSE 5173

ENV HOST=0.0.0.0
ENV PORT=5173

CMD ["pnpm", "preview", "--host"] 