# Use the official Node.js image
FROM node:14

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application files
COPY app /app

# Expose the port that the app will run on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
