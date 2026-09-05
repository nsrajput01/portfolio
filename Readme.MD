# Nitesh Singh - Portfolio

A responsive personal portfolio website for **Nitesh Singh**, a computer science student and aspiring AI/ML engineer. The site presents an introduction, technical skills, featured projects, education, and contact information in a dark, purple-accented interface.

## Features

- Sticky navigation with smooth scrolling
- Hero section with an animated typewriter effect
- About section with role, experience, location, and availability details
- Skills grid covering Python, machine learning, deep learning, data science, SQL, web development, tools, and AI technologies
- Project cards for house price prediction, image classification, and an AI chatbot
- Education timeline
- Contact section with a message form
- Responsive layout foundation using plain HTML and CSS

## Technologies

- HTML5
- CSS3
- JavaScript
- Formspree integration template

No build tools, frameworks, or package installation are required.

## Project Structure

```text
Portfolio/
├── index.html      # Page structure and portfolio content
├── styles.css      # Layout, colors, responsive styling, and animations
├── script.js       # Typewriter text animation
├── formspree.js    # Optional Formspree contact-form integration
└── Readme.MD       # Project documentation
```

## Run Locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` directly in a browser, or serve the folder with a local server.

For a VS Code workflow, install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

## Contact Form Setup

The contact form markup is present in `index.html`. The Formspree example in `formspree.js` is currently commented out and still uses placeholder IDs. To enable submissions:

1. Create a form at [Formspree](https://formspree.io/).
2. Add the Formspree endpoint to the form's `action` attribute in `index.html`.
3. Update the JavaScript selectors in `formspree.js` to match the form and status element IDs.
4. Uncomment the integration code and test a submission locally.

Do not commit private API keys or other secrets to the repository.

## Customization

- Edit personal details, project descriptions, education, and contact information in `index.html`.
- Change the visual theme and layout in `styles.css`.
- Update the rotating hero phrases in the `words` array in `script.js`.
- Replace the hero image URL with a personal image or a locally stored asset.

## Deployment

Because this is a static website, it can be deployed using GitHub Pages, Netlify, Vercel, or any static hosting provider. Upload the project files while keeping the relative file paths unchanged.

## License

This project is intended for personal portfolio use. Add a license file if you plan to distribute or reuse the code publicly.
