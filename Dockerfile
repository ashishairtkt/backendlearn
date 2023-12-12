# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json separately to utilize Docker caching
COPY package*.json /app/

# Install the application dependencies
RUN npm install

# Copy the rest of the application files into the working directory
COPY . /app/

# Define the entry point for the container
CMD ["npm", "start"]
