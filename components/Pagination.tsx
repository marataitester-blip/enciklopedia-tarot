
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-center space-x-4 my-8">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="px-6 py-2 bg-custom-card-bg border border-custom-accent rounded-lg text-custom-accent font-cinzel disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-accent hover:text-custom-bg transition-colors"
      >
        Назад
      </button>
      <span className="font-cinzel text-lg text-custom-muted">
        Страница {currentPage} из {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-6 py-2 bg-custom-card-bg border border-custom-accent rounded-lg text-custom-accent font-cinzel disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-accent hover:text-custom-bg transition-colors"
      >
        Вперед
      </button>
    </div>
  );
};

export default Pagination;