
import React, { useState } from 'react';
import { Card } from './types';
import { cards } from './data/cards';
import CardGallery from './components/CardGallery';
import CardModal from './components/CardModal';
import Pagination from './components/Pagination';

const App: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  // Pagination Logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen p-5">
      <header>
        <h1 className="font-cinzel text-custom-accent text-center text-4xl md:text-5xl font-bold tracking-wider mb-8">
          Энциклопедия Таро Астрального Героя
        </h1>
      </header>
      <main>
        <CardGallery cards={currentCards} onCardClick={handleCardClick} />
        <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={handlePrevPage}
            onNext={handleNextPage}
        />
      </main>
      {selectedCard && <CardModal card={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;