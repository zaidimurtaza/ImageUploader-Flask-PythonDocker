# Use the official Python Alpine image as the base image
FROM python:3.11-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install dependencies
RUN apk add --no-cache gcc musl-dev libffi-dev \
    && pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files
COPY . .

# Expose the port Flask will run on
EXPOSE 5000

# Set environment variables to configure Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Command to run the application
CMD ["python", "app.py"]
