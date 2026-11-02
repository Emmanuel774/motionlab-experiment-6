# MotionLab — JavaScript Styles & Animations

MotionLab is a simple static web project created for Experiment 06 of the Web Technology Lab. It demonstrates seven beginner-friendly JavaScript concepts using HTML, CSS, and vanilla JavaScript.

## Project Overview

This project includes the following interactive demos:

1. Digital clock with live time updates
2. Dynamic background color generation with auto-change toggle
3. Mouse hover text zoom effect
4. Car animation using setTimeout and clearTimeout
5. Student profile cards using arrays and conditional logic
6. Style switcher with show/hide message controls
7. Fade in and fade out animation using intervals

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- No libraries or backend required

## How to Run the Project

Because this is a static website, you can open the project directly in a browser or serve it using a local web server.

### Option 1: Open directly

- Open `index.html` in your browser.

### Option 2: Use a local server

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages Compatibility

This project is designed as a static site with relative file paths:

- `index.html`
- `style.css`
- `script.js`

It can be deployed to GitHub Pages without any backend configuration.

## Files Included

- `index.html` — page structure and demo content
- `style.css` — layout, dark theme, animations, and responsive styling
- `script.js` — interactive JavaScript logic for all seven demos

## Git Commands to Push to GitHub

After creating the repository on GitHub, run the following commands in the project folder:

```bash
git init
git add .
git commit -m "Initial commit: MotionLab Experiment 06"
git branch -M main
git remote add origin https://github.com/Emmanuel774/motionlab-experiment-6.git
git push -u origin main
```

## Notes

This project is intentionally simple, readable, and suitable for college lab demonstration. It uses beginner-friendly JavaScript and keeps the code organized for easy explanation by students.
