import React from 'react';
import { cdps } from '../data/cdps';
import { CDP } from '../types';

interface CDPSelectorProps {
  selectedCDP: string | null;
  onSelectCDP: (cdpId: string) => void;
}

const CDPSelector: React.FC<CDPSelectorProps> = ({ selectedCDP, onSelectCDP }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {Object.values(cdps).map((cdp: CDP) => (
        <button
          key={cdp.id}
          onClick={() => onSelectCDP(cdp.id)}
          className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCDP === cdp.id 
              ? `${cdp.color} text-white` 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <img src={cdp.logo} alt={cdp.name} className="w-5 h-5 rounded-full mr-2" />
          {cdp.name}
        </button>
      ))}
    </div>
  );
};

export default CDPSelector;