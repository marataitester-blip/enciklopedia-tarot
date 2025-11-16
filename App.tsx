
import React, { useState } from 'react';
import { Card } from './types';
import { cards } from './data/cards';
import CardGallery from './components/CardGallery';
import CardModal from './components/CardModal';

const App: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen p-5">
      <header>
        <h1 className="font-cinzel text-custom-accent text-center text-4xl md:text-5xl font-bold tracking-wider mb-8">
          Энциклопедия Таро Астрального Героя
        </h1>
      </header>
      <main>
        <CardGallery cards={cards} onCardClick={handleCardClick} />
      </main>
      {selectedCard && <CardModal card={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
