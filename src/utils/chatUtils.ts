import { responses } from '../data/responses';

export const generateResponse = (question: string): string => {
  // Convert question to lowercase for easier matching
  const lowerQuestion = question.toLowerCase();
  
  // Check if it's a comparison question
  if (lowerQuestion.includes('compare') || 
      lowerQuestion.includes('difference') || 
      (lowerQuestion.includes('how does') && lowerQuestion.includes('compare'))) {
    return responses.general.comparison;
  }
  
  // Check if it's a CDP-related question
  const cdpKeywords = ['segment', 'mparticle', 'lytics', 'zeotap', 'cdp', 'customer data platform'];
  const isCdpRelated = cdpKeywords.some(keyword => lowerQuestion.includes(keyword));
  
  if (!isCdpRelated) {
    return responses.general.non_cdp;
  }
  
  // Determine which CDP the question is about
  let cdp = '';
  if (lowerQuestion.includes('segment')) cdp = 'segment';
  else if (lowerQuestion.includes('mparticle')) cdp = 'mparticle';
  else if (lowerQuestion.includes('lytics')) cdp = 'lytics';
  else if (lowerQuestion.includes('zeotap')) cdp = 'zeotap';
  else return responses.general.not_found;
  
  // Look for task-related keywords
  const taskKeywords = [
    { cdp: 'segment', keywords: ['set up a new source', 'create a destination', 'build an audience', 'track events'] },
    { cdp: 'mparticle', keywords: ['create a user profile', 'set up a data connection', 'track events'] },
    { cdp: 'lytics', keywords: ['build an audience segment', 'collect data', 'create a campaign'] },
    { cdp: 'zeotap', keywords: ['integrate data', 'create a segment', 'export data'] }
  ];
  
  const cdpTasks = taskKeywords.find(item => item.cdp === cdp);
  if (!cdpTasks) return responses.general.not_found;
  
  // Find the most relevant task
  for (const task of cdpTasks.keywords) {
    if (lowerQuestion.includes(task)) {
      return responses[cdp][task];
    }
  }
  
  // If no specific task is found but we know the CDP
  return responses.general.not_found;
};