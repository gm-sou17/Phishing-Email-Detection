// =====================================================
// PHASE 14 - STEP 6
// CONNECT NODE.JS WITH FASTAPI
// =====================================================

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const PORT = 5000;

// =====================================================
// Middleware
// =====================================================

app.use(cors());
app.use(express.json());

// =====================================================
// Home Route
// =====================================================

app.get("/", (req, res) => {
    res.json({
        message: "Node.js Backend Running Successfully"
    });
});

// =====================================================
// Prediction Route
// =====================================================

app.post("/predict", async (req, res) => {
    console.log(req.body);

    try {

        // Get Email from Request
        const email = req.body.email;

        // Send Request to FastAPI
        const response = await axios.post(
            "http://127.0.0.1:8000/predict",
            {
                email: email
            }
        );

        // Return Prediction
        res.json(response.data);

    } catch (error) {

        console.log("==================== ERROR ====================");
        console.log("Message:", error.message);

        if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Response Data:", error.response.data);
        }

        if (error.request) {
            console.log("No Response Received From FastAPI");
        }

        res.status(500).json({
            error: "Prediction Failed"
        });

    }

});

// =====================================================
// Start Server
// =====================================================

app.listen(PORT, () => {

    console.log(`Server Running on http://localhost:${PORT}`);

});