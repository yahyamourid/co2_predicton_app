import pickle
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from variables import CO2Variables

with open("artifacts/model.pkl", "rb") as f:
    model = pickle.load(f)

app = FastAPI()

fuel_types = {
    "D": [1, 0, 0, 0, 0],
    "E": [0, 1, 0, 0, 0],
    "N": [0, 0, 1, 0, 0],
    "X": [0, 0, 0, 1, 0],
    "Z": [0, 0, 0, 0, 1]
}

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.get('/')
def index():
    return {'Hello': 'Welcome to co2 emission prediction service, access the api docs and test the API at http://0.0.0.0/docs.'}

@app.post("/predict")
def predict(data: CO2Variables):
    fuel_type_encoded = fuel_types.get(data.Fuel_Type, [0, 0, 0, 0, 0]) 
    features = np.array([[data.Engine_Size, data.Cylinders, data.Fuel_Consumption_City,
                          data.Fuel_Consumption_Hwy, data.Fuel_Consumption_Comb,
                          data.Fuel_Consumption_Comb_1] + fuel_type_encoded])
    prediction = model.predict(features)
    return {"predicitons": prediction[0]}
