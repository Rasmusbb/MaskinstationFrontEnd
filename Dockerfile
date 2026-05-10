FROM node:20 AS build

# Create working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build SvelteKit app
RUN npm run build


# =========================
# STEP 2 — RUNTIME STAGE
# =========================
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built app from build stage
COPY --from=build /app/build ./build

# Copy static assets (if present)
COPY --from=build /app/static ./static

# Expose SvelteKit port
EXPOSE 3000

# Environment variable example
ENV PORT=3000

# Start SvelteKit Node server
CMD ["node", "build"]