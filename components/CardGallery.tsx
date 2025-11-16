
import React from 'react';
import { Card } from '../types';

interface CardGalleryProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
}

const CardGallery: React.FC<CardGalleryProps> = ({ cards, onCardClick }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-4">
      {cards.map((card) => (
        <img
          key={card.name}
          src={card.imageUrl}
          alt={card.name}
          className="w-full h-auto rounded-lg cursor-pointer transition-transform duration-200 border border-custom-accent/25 aspect-[600/1040] object-cover hover:scale-105 hover:shadow-lg hover:shadow-custom-accent"
          loading="lazy"
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
};

export default CardGallery;
