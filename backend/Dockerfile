# Use official Node.js image from the Docker Hub
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]
