from pydantic import BaseModel


class CO2Variables(BaseModel):
    Engine_Size: float
    Cylinders: int
    Fuel_Consumption_City: float
    Fuel_Consumption_Hwy: float
    Fuel_Consumption_Comb: float
    Fuel_Consumption_Comb_1: float  
    Fuel_Type: str  




                        