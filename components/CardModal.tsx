
import React from 'react';
import { Card } from '../types';

interface CardModalProps {
  card: Card;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-custom-card-bg p-5 border border-custom-accent rounded-xl w-full max-w-md relative shadow-2xl shadow-custom-accent/20 max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-2 right-4 text-custom-fg text-4xl font-bold cursor-pointer hover:text-custom-accent leading-none"
          onClick={onClose}
        >
          &times;
        </button>
        
        <img src={card.imageUrl} alt={card.name} className="w-full max-w-xs rounded-lg block mx-auto my-4" />
        
        <h2 className="font-cinzel text-custom-accent text-center text-3xl font-bold">{card.name}</h2>
        <h3 className="text-center italic text-custom-muted text-lg mb-4">{card.keyword}</h3>
        
        <div className="text-left text-base leading-relaxed space-y-4">
          <div>
            <h4 className="font-cinzel text-custom-accent border-b border-custom-accent/30 pb-1 mb-2 font-semibold text-lg">✨ Значение карты</h4>
            <p className="italic text-custom-muted mb-2">{card.meaning_keywords}</p>
            <p>{card.meaning_text}</p>
          </div>
          
          <div>
            <h4 className="font-cinzel text-custom-accent border-b border-custom-accent/30 pb-1 mb-2 font-semibold text-lg">🔮 Да / Нет</h4>
            <p>{card.yes_no}</p>
          </div>

          <div>
            <h4 className="font-cinzel text-custom-accent border-b border-custom-accent/30 pb-1 mb-2 font-semibold text-lg">🧘‍♀️ Аффирмация</h4>
            <p className="italic">«{card.affirmation}»</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
