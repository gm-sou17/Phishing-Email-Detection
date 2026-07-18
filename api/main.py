# ============================================================
# LOAD MODEL & TF-IDF
# ============================================================

# FastAPI
from fastapi import FastAPI

# Joblib
import joblib

from pydantic import BaseModel

# Create App
app = FastAPI()
# ============================================================
# Request Body
# ============================================================

class EmailRequest(BaseModel):
    email: str

# ------------------------------------------------------------
# Load Trained Model
# ------------------------------------------------------------

model = joblib.load("phishing_email_model.pkl")

print("✅ ML Model Loaded Successfully")

# ------------------------------------------------------------
# Load TF-IDF Vectorizer
# ------------------------------------------------------------

tfidf = joblib.load("tfidf_vectorizer.pkl")

print("✅ TF-IDF Loaded Successfully")

# ------------------------------------------------------------
# Home API
# ------------------------------------------------------------

@app.get("/")
def home():

    return {
        "message": "Welcome to AI Phishing Email Detection API"
    }
# ============================================================
# Prediction API
# ============================================================

@app.post("/predict")
def predict_email(request: EmailRequest):

    # Get Email
    email = request.email

    # Convert Text into TF-IDF Vector
    email_vector = tfidf.transform([email])

    # Predict
    prediction = model.predict(email_vector)

    # Convert Prediction into Text
    if prediction[0] == 1:
        result = "Phishing Email"
    else:
        result = "Legitimate Email"

    # Return JSON Response
    return {
        "prediction": result
    }
