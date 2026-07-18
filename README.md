# 🛡️  Phishing Email Detection using Machine Learning

 Phishing Email Detection System that classifies emails as **Legitimate** or **Phishing** using **Natural Language Processing (NLP)** and **Machine Learning**. The project also includes a **FastAPI backend**, **Node.js API**, and **React frontend** for real-time predictions.

---

## 📌 Project Overview

Phishing emails are one of the most common cybersecurity threats. Attackers use fake emails to steal sensitive information such as passwords, banking details, and personal data.

This project uses **Machine Learning** and **Natural Language Processing (NLP)** to analyze email content and predict whether an email is **Legitimate** or **Phishing**.

---

## ✨ Features

- Detects Phishing Emails
- Detects Legitimate Emails
- Text Preprocessing using NLP
- TF-IDF Feature Extraction
- Machine Learning Classification
- FastAPI REST API
- Node.js Backend
- React Frontend
- Real-Time Prediction
- Easy to Deploy

---

## 🛠 Technologies Used

### Programming Language
- Python

### Machine Learning
- Scikit-learn
- Logistic Regression
- Decision Tree
- Random Forest

### Natural Language Processing
- NLTK
- TF-IDF Vectorizer

### Backend
- FastAPI
- Node.js
- Express.js

### Frontend
- React.js

### Other Tools
- Jupyter Notebook
- VS Code
- Git
- GitHub

---

## 📂 Project Structure

```
Phishing-Email-Detection/
│
├── api/
│   ├── main.py
│   └── requirements.txt
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   └── frontend/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── package-lock.json
│
├── phishing_email_model.pkl
├── tfidf_vectorizer.pkl
├── phising_email_model.ipynb
├── README.md
└── .gitignore
```

---

## 📊 Dataset

The dataset used for this project is publicly available on Kaggle.

**Dataset Name:**
Phishing Email Dataset

**Download Link:**

https://www.kaggle.com/datasets/naserabdullahalam/phishing-email-dataset

---

## ⚙️ Machine Learning Workflow

1. Load Dataset
2. Data Cleaning
3. Text Preprocessing
4. Stopword Removal
5. TF-IDF Feature Extraction
6. Train-Test Split
7. Train Machine Learning Models
8. Model Evaluation
9. Save Model
10. Deploy API using FastAPI
11. Connect Node.js Backend
12. Build React Frontend

---

## 🤖 Machine Learning Models

The following models were trained and evaluated:

- Logistic Regression
- Decision Tree
- Random Forest

The best-performing model was selected for deployment.

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/gm-sou17/Phishing-Email-Detection.git
```

### Open Project

```bash
cd Phishing-Email-Detection
```

### Install Python Packages

```bash
pip install -r api/requirements.txt
```

### Run FastAPI

```bash
uvicorn api.main:app --reload
```

### Run Backend

```bash
cd backend
npm install
npm start
```

### Run Frontend

```bash
cd frontend/frontend
npm install
npm start
```

---

## 📸 Project Screenshots

### Home Page

<img width="636" height="332" alt="image" src="https://github.com/user-attachments/assets/4bf5ece0-65cd-474e-91ab-2a75f8a72b74" />


---

### Legitimate Email Prediction

<img width="639" height="334" alt="image" src="https://github.com/user-attachments/assets/eeb5202e-36e3-493f-84b0-1a47a52dd27e" />


---

### Phishing Email Prediction

<img width="619" height="311" alt="image" src="https://github.com/user-attachments/assets/b9f335b4-867f-4bd4-b790-f5726882a2d2" />


---

### Swagger API

<img width="635" height="340" alt="image" src="https://github.com/user-attachments/assets/c2e2fa33-f996-4cd6-bb2b-8c0219c7a641" />


---





## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
