@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

h1 {
  margin-bottom: 10px;
  font-size: 1.6rem;
}

p {
  opacity: 0.9;
  font-size: 0.95rem;
  margin-bottom: 20px;
}

.upload-section {
  margin-bottom: 20px;
}

input[type="file"] {
  display: block;
  margin: 10px auto;
}

.preview {
  width: 100%;
  height: 200px;
  border: 2px dashed #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
}

.preview img {
  max-width: 100%;
  max-height: 100%;
  display: none;
  border-radius: 10px;
}

button {
  background: #00c6ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0072ff;
}

#downloadBtn {
  margin-top: 10px;
  background: #00ff99;
  color: #000;
  font-weight: bold;
}

#downloadBtn:hover {
  background: #00cc77;
}

.result {
  margin-top: 20px;
  min-height: 50px;
}

#loading {
  display: none;
  font-weight: bold;
  color: #00c6ff;
}

#captionText {
  margin-top: 10px;
  font-size: 1.1rem;
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
