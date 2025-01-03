# Dockerfile for appointment service

# Use official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the current directory's content into the container's working directory
COPY . .

# Install dependencies
RUN npm install

# Define the default command to start the application
CMD ["node", "src/appointmentController.js"]
