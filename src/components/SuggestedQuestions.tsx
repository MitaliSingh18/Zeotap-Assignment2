import React from 'react';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ onSelectQuestion }) => {
  const questions = [
    "How do I set up a new source in Segment?",
    "How can I create a user profile in mParticle?",
    "How do I build an audience segment in Lytics?",
    "How can I integrate my data with Zeotap?",
    "How does Segment's audience creation compare to Lytics'?"
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Suggested questions:</h3>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelectQuestion(question)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;