# 🤖 AI Arena

AI Arena is an interactive platform where multiple AI models compete to answer a user's question, and a third AI evaluates their responses for accuracy, quality, and correctness.

---

## 🚀 Overview

In most applications, users rely on a single AI response without knowing how accurate or reliable it is. **AI Arena** solves this by introducing a comparison system:

* Two AI models generate answers simultaneously
* A third AI model acts as a **judge**
* The judge evaluates both responses, assigns scores, and provides feedback

This allows users to **compare responses and understand which answer is better—and why**

---

## 🧠 How It Works

1. User submits a question via the frontend
2. Request is sent to the backend
3. Backend (using LangChain) sends the query to:

   * Mistral AI
   * Cohere AI
4. Both AIs generate responses independently
5. Responses are passed to the Judge AI (Gemini)
6. Judge AI:

   * Evaluates both answers
   * Assigns scores (out of 10)
   * Provides reasoning and feedback
7. All responses are returned to the frontend and displayed in the chat UI:

   * AI Response 1 (Mistral)
   * AI Response 2 (Cohere)
   * Judge Evaluation (Gemini)

---

## ✨ Features

* ⚔️ **AI vs AI Comparison**
* 🧑‍⚖️ **Automated Judging System**
* 📊 **Scoring & Feedback (out of 10)**
* 💬 **Chat-Based Interface**
* 🔍 **Transparency in AI Responses**
* ✅ **Schema Validation with Zod**
* 🔗 **LangChain Integration for Orchestration**

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript
* LangChain
* Zod (schema validation)

### Frontend

* React

### AI Models Used

* Mistral (Response Generator)
* Cohere (Response Generator)
* Gemini (Judge AI)

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ravi-kasodariya/ai-arena.git
cd ai-arena
```

---

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3. Environment Variables

Create a `.env` file in the backend directory and add your API keys:

```env
MISTRAL_API_KEY=your_key_here
COHERE_API_KEY=your_key_here
GEMINI_API_KEY=your_key_here
```

---

### 4. Run the Project

#### Start Backend

```bash
npm run dev
```

#### Start Frontend

```bash
npm run dev
```

---

## 📊 Example Flow

```
User Question → Backend → Mistral + Cohere → Responses Generated
→ Gemini Judge → Evaluation + Scores → Frontend Display
```

---

## 🎯 Use Case

AI Arena is useful for:

* Comparing AI model performance
* Understanding response accuracy
* Learning from AI-generated explanations
* Building trust in AI outputs

---

## 🌟 Unique Value

Unlike traditional AI apps where users rely on a single response, AI Arena provides:

* Multiple perspectives
* Objective evaluation
* Transparent reasoning behind scores

This helps users make **informed decisions about which AI response to trust**

---

## 📌 Project Status

* Currently hosted on GitHub
* Local development setup only

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Ravi Kasodariya**

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub!
