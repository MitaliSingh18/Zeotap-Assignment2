# CDP How-To Chatbot

A React-based chatbot application that provides guidance on how to use various Customer Data Platforms (CDPs) including Segment, mParticle, Lytics, and Zeotap.

![CDP How-To Chatbot Screenshot](https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## Live Demo

Visit the live demo: [CDP How-To Chatbot](https://cheerful-llama-f5ec85.netlify.app)

## Features

- **CDP-Specific Guidance**: Get answers to "how-to" questions for Segment, mParticle, Lytics, and Zeotap
- **Interactive Chat Interface**: User-friendly chat interface with message history
- **Suggested Questions**: Quick-access buttons for common CDP questions
- **CDP Selection**: Filter your questions by selecting a specific CDP
- **Markdown Support**: Rich text formatting in bot responses
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Markdown
- Lucide React (for icons)
- UUID

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cdp-chatbot.git
   cd cdp-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
cdp-chatbot/
├── public/
├── src/
│   ├── components/
│   │   ├── CDPSelector.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ChatMessage.tsx
│   │   └── SuggestedQuestions.tsx
│   ├── data/
│   │   ├── cdps.ts
│   │   └── responses.ts
│   ├── utils/
│   │   └── chatUtils.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.ts
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## How It Works

1. **User Interface**: The app provides a chat interface where users can type questions or select from suggested questions.
2. **CDP Selection**: Users can filter their questions by selecting a specific CDP platform.
3. **Question Processing**: When a user submits a question, the app analyzes it to determine:
   - Which CDP it relates to (Segment, mParticle, Lytics, or Zeotap)
   - What specific task or feature the user is asking about
4. **Response Generation**: The app retrieves the appropriate response from its knowledge base and displays it in the chat.
5. **Markdown Rendering**: Responses are formatted with Markdown for better readability.

## Supported Question Types

- Platform-specific "how-to" questions
- Comparison questions between different CDPs
- General CDP functionality questions

## Adding New Content

To add new responses or update existing ones:

1. Edit the `src/data/responses.ts` file
2. Add new entries to the appropriate CDP section
3. Update the `generateResponse` function in `src/utils/chatUtils.ts` if needed

## Building for Production

To build the app for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

The project is configured for easy deployment to Netlify. You can also deploy to other platforms like Vercel, GitHub Pages, or any static site hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown component for React