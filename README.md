# 💼 Modern Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, JavaScript, PHP, and MySQL. It includes smooth animations, interactive sections, and a fully functional contact form connected to a MySQL database.

🔗 **Live Demo**: [View Website](https://aishwaryalakshmy.github.io/Modern-Portfolio-Website/)

![Screenshot (142)](https://github.com/user-attachments/assets/7a8dab36-98e6-4c2c-aa40-7b1bb1d3dbc0)


---

## 🧰 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, jQuery  
- **Backend**: PHP  
- **Database**: MySQL  
- **Libraries**:  
  - SweetAlert2 (modern alert messages)  
  - Typed.js (typing animation)  
  - AOS (Animate on Scroll library)

---

## ✨ Features

- 🎨 Clean, modern design with animations  
- 📱 Responsive on all devices  
- 📬 Contact form connected to MySQL  
- 🧠 Interactive skill section  
- 🗂️ Project showcase  
- 🧭 Smooth scrolling and progress bar

---

## 🛠️ Installation & Setup

### ✅ Requirements

- XAMPP / WAMP / MAMP  
- PHP 7.0+  
- MySQL 5.7+  
- Modern web browser

---

## 🗃️ Database Setup

1. Open **phpMyAdmin**
2. Run the following SQL to create your database and table:

## sql
CREATE DATABASE portfolio_contact;
USE portfolio_contact;
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


## ⚙️ Configure Backend

Edit the `contact.php` file and update the following with your actual DB credentials:

## php
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "portfolio_contact";


## 🧪 Run Locally

1. Place the project folder in your `htdocs` (for XAMPP)
2. Start **Apache** and **MySQL** from XAMPP
3. Visit in browser

## 🚀 Usage

* Fill out the contact form to test submissions
* Form data is saved to the MySQL database
* SweetAlert2 displays success or error messages
* To view saved messages:
  

## 📁 Project Structure

```
Modern-Portfolio-Website/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── contact.php
├── index.html
├── README.md
└── portfolio_contact.sql
```

---

## 🛡️ Security Best Practices

* ✅ Input validation and sanitization
* ✅ Prepared statements to prevent SQL injection
* ✅ Basic email format validation
* 🔒 For production:

  * Use **HTTPS**
  * Implement **CSRF protection**
  * Enable **rate-limiting** for form submissions

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙌 Credits

* [SweetAlert2](https://sweetalert2.github.io/)
* [Typed.js](https://mattboldt.com/demos/typed-js/)
* [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)

---

💖 *If you like this project, give it a star ⭐ and share it!*
Developed with love by - Aishwarya Lakshmy KS, 
Mail me for further queries at : aishwaryalakshmy26@gmail.com 🖥️

```
