<h1 align="center" id="title">DocFinder NG</h1>

<p align="center"><img src="https://socialify.git.ci/gideon-del/medical-appointment/image?description=1&amp;forks=1&amp;issues=1&amp;language=1&amp;name=1&amp;pattern=Signal&amp;pulls=1&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

<p id="description">DocFinder NG is a medical appointment system that allows you to make an appointments with any of our partnered hospitals.</p>

<h2>⚙️ Installation and Configuration</h2>

Use [npm](https://nodejs.org/en/download) to install package dependencies and run.

```bash
npm install
npm run dev
```
Replace the firebaseConfig object with your own API keys gotten from [firebase](https://firebase.google.com)
```bash
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
```

<h2>🚀 Demo</h2>
<img src="https://i.ibb.co/hszCR4F/ezgif-com-video-to-gif-2.gif" alt="Demo Video" width="100%" />

<h2>📷 Project Screenshots</h2>
<h3>Homepage</h3>
<img src="https://github.com/gideon-del/medical-appointment/assets/110723341/3d5521ef-3590-4776-9c43-908b850bafbe" alt="Home page image" width="100%" />
<h3>Signup Page</h3>
<img src="https://github.com/gideon-del/medical-appointment/assets/110723341/353a235c-ccb3-4757-9ecf-316c1778fa5c alt="Signup page image" width="100%" />
<h3>Login Page</h3>
<img src="https://github.com/gideon-del/medical-appointment/assets/110723341/a4e1bf04-4a8f-4eaa-8fb0-4dd8db3bbcb2" alt="Login page image" width="100%" />
<h3>Profile Page</h3>
<img src="https://github.com/gideon-del/medical-appointment/assets/110723341/6cda6a92-9490-49e2-99d1-cd21eca3ed25" alt="Profile page image" width="100%" />
  
<h2>💻 Built with</h2>
<p>
  <img src="https://img.shields.io/badge/-React-blue?logo=react&logoColor=white&style=flat" alt="React">
  <img src="https://img.shields.io/badge/-Vite-success?logo=vite&logoColor=white&style=flat" alt="Vite">
  <img src="https://img.shields.io/badge/-Vercel-black?logo=vercel&logoColor=white&style=flat" alt="Vercel">
  <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/-Canva-00C4CC?logo=canva&logoColor=white&style=flat" alt="Canva">
  <img src="https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=white&style=flat" alt="Firebase">
</p>

<h2>🤝 Contributing</h2>

Contributions are welcome! To contribute to this project, follow these steps:

1. **Create an Issue**: Before starting work on a new feature, enhancement, or bug fix, it's recommended to create a new issue. This allows for discussions and feedback on the proposed changes. Issues help ensure that your contribution aligns with the project's goals and avoids duplication of effort.

2. **Fork this repository**.

3. **Create a new branch**: `git checkout -b feature/my-feature`.

4. **Make your changes and commit them**: `git commit -am 'Add some feature'`.

5. **Push the changes to your fork**: `git push origin feature/my-feature`.

6. **Create a pull request**, explaining your changes.

Please ensure that your pull request follows the project's coding guidelines and standards.

### Creating an Issue

When creating an issue, provide the following details:

- A clear and descriptive title.
- A detailed description of the problem or enhancement you are addressing.
- Steps to reproduce (for bugs).
- Any relevant code snippets or screenshots.

By following these steps and creating an issue, you help maintain a structured development process and ensure that your contributions are aligned with the project's objectives.

Thank you for your contributions!
