# CDP How-To Chatbot

A React-based chatbot application that provides guidance on how to use various Customer Data Platforms (CDPs) including Segment, mParticle, Lytics, and Zeotap.

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
   cd Zeotap-Assignment2
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
