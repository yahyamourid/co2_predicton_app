# CO2 Emission Prediction Application

This project provides a solution for predicting CO2 emissions from vehicle data using machine learning models. The application uses a Random Forest Regressor model trained with various vehicle features such as engine size, fuel consumption, and fuel type to predict CO2 emissions. The system includes a FastAPI backend for model prediction and a React.js frontend for user interaction.


https://github.com/user-attachments/assets/b646ecbc-9975-421d-9fab-08d1694dd86a


## Features
- Predict CO2 emissions based on vehicle data.
- Use a trained Random Forest model for predictions.
- Frontend interface built with React.js.
- Backend API powered by FastAPI.

## Prerequisites

Before running the application, make sure you have installed:
- **Docker** and **Docker Compose**: For containerization and orchestration of services.

## Installation Guide

### 1. Clone the repository

```
git clone https://github.com/your-username/co2-emission-prediction.git
cd co2-emission-prediction
```
### 2. Build and run the application using Docker Compose
In the root of the repository, you’ll find a docker-compose.yml file that defines the FastAPI backend and React frontend services. To run the application, simply execute the following command:

```
docker-compose up --build
```
- Build the FastAPI backend using Python.
- Build the React.js frontend.
- Start both services and expose the backend on port 8000 and the frontend on port 3000.
  
### 3. Access the application
Once the containers are up and running, you can access:
- React Frontend: Open http://localhost:3000 in your browser.
- FastAPI Backend: Open http://localhost:8000 in your browser to access the FastAPI documentation and API endpoints (Swagger interface available).
  
### 4. Use the application
- Frontend: The user interface allows you to input vehicle data, including engine size, fuel consumption, and fuel type. Upon submission, the application will display the predicted CO2 emissions.
- Backend: The FastAPI backend receives the data and uses the pre-trained machine learning model to return the predicted CO2 emissions.
