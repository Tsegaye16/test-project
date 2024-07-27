
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the TypeScript configuration file
COPY tsconfig.json ./tsconfig.json

# Build the application
RUN npm run build

# Use a smaller base image for the runtime
FROM node:${NODE_VERSION}-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/dist ./dist

# Expose the application port
EXPOSE 3000

# Set the environment variable
ENV NODE_ENV production

# Run the application
CMD ["npm", "start"]

