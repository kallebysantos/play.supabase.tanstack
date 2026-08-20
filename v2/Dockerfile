FROM node:22-alpine AS base

FROM base AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm install -g pnpm@11.13.1

COPY . .
RUN pnpm run build


FROM base AS runner
WORKDIR /app
COPY --from=builder /app/.output .
EXPOSE 8080
ENV PORT=8080
ENV HOST=0.0.0.0
CMD ["node", "./server/index.mjs"]

