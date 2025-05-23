# Intercom AI Chat Application

## Overview

This project is a modern, responsive chat application built with React and Vite. The application demonstrates component-based architecture, state management, and responsive design using Tailwind CSS.

## Features

- **Inbox**: View and select conversations from a list of chats.
- **Chat**: Engage in real-time conversations with users.
- **Responsive Design**: The layout adapts to different screen sizes, hiding the AI Copilot on smaller devices.
- **Sidebar Toggle**: Easily show or hide the sidebar using the sidebar button in the header.
- **Modern UI**: Utilizes Tailwind CSS for a sleek, modern look with gradient effects and interactive elements.

## Project Structure

```
intercom/
├── public/
├── src/
│   ├── App.jsx           # Main application layout
│   ├── Components/       # Inbox, Chat, and AIChat components
│   ├── AIChatComponents/ # AI Copilot header, main, and sidebar
│   ├── ChatComponents/   # Chat UI components
│   ├── assets/           # Static assets
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Deployment

Deployed using [Vercel](https://intercom-ten.vercel.app/)

## Getting Started

### Prerequisites
- npm or yarn
- Vite (Latest version)
- Tailwind CSS (v4.1 or above)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/VaricelaZoster/Intercom.git
   cd intercom
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage
- The left panel displays the Inbox.
- The center panel is the main Chat area.
- The right panel is the AI Copilot, visible only on screens wider than 570px.
- Use the sidebar button in the header to toggle the sidebar visibility.

## Customization
- **Breakpoints**: The AI Copilot panel uses a custom breakpoint (570px) for visibility. Adjust this in `App.jsx` as needed.
- **Styling**: Tailwind CSS classes are used throughout for easy customization.
- **AI Integration**: The AI Copilot is a placeholder for integrating with any AI backend (e.g., OpenAI, custom models).

