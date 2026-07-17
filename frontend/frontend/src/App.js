import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    // Predict Function
    const predictEmail = async () => {

        if (email.trim() === "") {
            alert("Please enter an email.");
            return;
        }

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:5000/predict",
                {
                    email: email
                }
            );

            setResult(response.data.prediction);

        } catch (error) {

            alert("Prediction Failed");

        } finally {

            setLoading(false);

        }

    };

    // Clear Function
    const clearData = () => {

        setEmail("");
        setResult("");

    };

    return (

        <div className="container">

            <div className="card">

                <h1>🛡 AI Phishing Email Detection</h1>

                <p className="developer">

                     Developed by <b>Ghanshyam Choudhary</b>

                </p>

                <p className="subtitle">
                    Paste your email below and detect whether it is
                    <b> Legitimate </b>
                    or
                    <b> Phishing</b>.
                </p>

                <textarea
                    rows="12"
                    placeholder="Paste your email here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></textarea>

                {/* Character Counter */}
                <p className="counter">
                    Characters : {email.length}
                </p>

                {/* Buttons */}
                <div className="button-group">

                    <button
                        onClick={predictEmail}
                        disabled={loading}
                    >
                        {loading ? "Predicting..." : "Predict Email"}
                    </button>

                    <button
                        className="clear-btn"
                        onClick={clearData}
                    >
                        Clear
                    </button>

                </div>

                {/* Result */}
                {
                    result && (

                        <div
                            className={
                                result === "Phishing Email"
                                    ? "result phishing"
                                    : "result safe"
                            }
                        >

                            <h2>

                                {
                                    result === "Phishing Email"
                                        ? "🚨 Phishing Email"
                                        : "✅ Legitimate Email"
                                }

                            </h2>

                        </div>


                    )
                }
                <footer>

                   © 2026 AI Phishing Email Detection

                  <br/>

                  Built using React • Node.js • FastAPI • Machine Learning

                </footer>

            </div>

        </div>

    );

}

export default App;