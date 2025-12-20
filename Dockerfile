# =========================
# Install dependencies
# =========================
FROM node:20-alpine AS deps
WORKDIR /app

# Needed for sharp & native deps
RUN apk add --no-cache libc6-compat

# Copy dependency manifests only (for caching)
COPY package.json package-lock.json* ./

# Install deps
RUN npm ci


# =========================
# Build Next.js app
# =========================
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

# Reuse cached deps
COPY --from=deps /app/node_modules ./node_modules

# Copy full source
COPY . .

# Build
RUN npm run build


# =========================
# Production runtime
# =========================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Non-root user
RUN addgroup -g 1001 nodejs \
 && adduser -S nextjs -u 1001

USER nextjs

# Next.js standalone provides server.js
CMD ["node", "server.js"]
