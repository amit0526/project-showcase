# 🚀 Project Showcase

A modern, responsive **Project Showcase Website** built with React and Tailwind CSS.
The website is designed to present projects, skills, personal information, and contact details through a clean and interactive interface.

## 🌐 Live Demo

**Live Website:**
https://project-showcase-gamma-woad.vercel.app/

---

## ✨ Features

* 🎨 Modern and clean UI
* 📱 Fully responsive design for mobile, tablet, and desktop
* 🌙 Dark / Light theme support
* ⚡ Smooth animations using Framer Motion
* 🧩 Project showcase with technology badges
* 🔗 Live Demo and GitHub project links
* 📄 About section
* 📬 Functional Contact Form
* 📧 Email notifications using EmailJS
* ⏰ Contact form submission time included in emails
* 🧭 Responsive navigation menu
* 📌 Quick navigation links in footer
* ⬆️ Back-to-top functionality
* 🚀 Deployed using Vercel

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Tailwind CSS
* React Router
* Framer Motion
* React Icons

### Services

* EmailJS
* Vercel

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── contact/
│   │   ├── ContactHero.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── ContactForm.jsx
│   │   └── ResponseBanner.jsx
│   │
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── data/
│   └── contactInfo.js
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/amit0526/project-showcase.git
```

### 2. Open the project

```bash
cd project-showcase
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project will be available at the local development URL shown in your terminal.

---

## 📧 EmailJS Setup

The contact form uses **EmailJS** to send messages directly to the configured email service.

To configure EmailJS:

1. Create an EmailJS account.
2. Create an email service.
3. Create an email template.
4. Add your EmailJS credentials to `ContactForm.jsx`.
5. Make sure your template contains the required form variables.

Example variables:

```text
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
{{time}}
```

> ⚠️ Never expose sensitive private credentials or API secrets in a public repository.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

Responsive Tailwind utility classes are used throughout the application to maintain a consistent layout on smaller screens.

---

## 🎨 Theme Support

The website supports both:

* ☀️ Light Mode
* 🌙 Dark Mode

Theme state is managed through a custom React context:

```text
ThemeContext.jsx
```

Components dynamically adjust their colors and backgrounds based on the selected theme.

---

## 🎬 Animations

Framer Motion is used to create smooth UI animations such as:

* Fade-in effects
* Slide-in animations
* Hover effects
* Button interactions
* Scroll-based animations

This helps make the website feel more interactive without overwhelming the user.

---

## 📬 Contact Form

Visitors can submit:

* Name
* Email
* Subject
* Message

After submission, the user receives a success or error message, while the configured EmailJS service delivers the message to the project owner's email.

---

## 🚀 Deployment

The project is deployed using **Vercel**.

Every production deployment can be connected to the project's Git repository for streamlined updates.

---

## 🔮 Future Improvements

Some possible future improvements:

* [ ] Add project filtering by technology
* [ ] Add project search
* [ ] Add pagination for projects
* [ ] Add downloadable resume
* [ ] Add more detailed project pages
* [ ] Add form validation messages
* [ ] Add loading animations
* [ ] Improve accessibility
* [ ] Add SEO metadata
* [ ] Add analytics

---

## 👨‍💻 Author

### Amit Anand

Frontend Developer passionate about building modern, responsive and interactive web applications.

### Connect With Me

* GitHub: https://github.com/amit0526
* LinkedIn: https://www.linkedin.com/in/amit-anand23/
* Email: [amit.anand031020@gmail.com](mailto:amit.anand031020@gmail.com)

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

Thanks for checking out **Project Showcase**! 🚀
