import { Filter, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { categories, noteFilters } from '../../data/perfumes';

export const FiltersPanel = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedNotes, 
  onNotesChange,
  priceRange,
  onPriceRangeChange,
  onClearFilters
}) => {
  const [showNotes, setShowNotes] = useState(false);

  const hasActiveFilters = selectedCategory !== 'Todos' || selectedNotes.length > 0;

  const toggleNote = (note) => {
    if (selectedNotes.includes(note)) {
      onNotesChange(selectedNotes.filter(n => n !== note));
    } else {
      onNotesChange([...selectedNotes, note]);
    }
  };

  return (
    <div data-testid="filters-panel" className="mb-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center gap-2 text-gold/60 mr-2">
          <Filter size={16} />
          <span className="font-body text-xs tracking-widest uppercase">Filtrar</span>
        </div>
        
        {categories.map((category) => (
          <button
            key={category}
            data-testid={`filter-category-${category.toLowerCase()}`}
            onClick={() => onCategoryChange(category)}
            className={`
              px-5 py-2 border font-body text-xs tracking-widest uppercase
              transition-all duration-300
              ${selectedCategory === category
                ? 'bg-gold text-burgundy border-gold'
                : 'border-gold/30 text-gold/80 hover:border-gold hover:text-gold'
              }
            `}
          >
            {category}
          </button>
        ))}

        {/* Notes dropdown trigger */}
        <button
          data-testid="notes-filter-btn"
          onClick={() => setShowNotes(!showNotes)}
          className={`
            px-5 py-2 border font-body text-xs tracking-widest uppercase
            transition-all duration-300 flex items-center gap-2
            ${selectedNotes.length > 0
              ? 'bg-gold/20 border-gold text-gold'
              : 'border-gold/30 text-gold/80 hover:border-gold hover:text-gold'
            }
          `}
        >
          Notas {selectedNotes.length > 0 && `(${selectedNotes.length})`}
          <ChevronDown size={14} className={`transition-transform ${showNotes ? 'rotate-180' : ''}`} />
        </button>

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            data-testid="clear-filters-btn"
            onClick={onClearFilters}
            className="px-4 py-2 text-cream/50 hover:text-gold font-body text-xs tracking-widest uppercase flex items-center gap-2 transition-colors"
          >
            <X size={14} />
            Limpiar
          </button>
        )}
      </div>

      {/* Notes expansion panel */}
      {showNotes && (
        <div 
          data-testid="notes-panel"
          className="flex flex-wrap gap-2 p-4 bg-[#0F0303]/50 border border-gold/10 mb-6 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {noteFilters.map((note) => (
            <button
              key={note}
              data-testid={`note-filter-${note.toLowerCase()}`}
              onClick={() => toggleNote(note)}
              className={`
                px-4 py-1.5 border font-body text-[11px] tracking-wider
                transition-all duration-200
                ${selectedNotes.includes(note)
                  ? 'bg-gold text-burgundy border-gold'
                  : 'border-gold/20 text-cream/70 hover:border-gold/50 hover:text-gold'
                }
              `}
            >
              {note}
            </button>
          ))}
        </div>
      )}

      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-cream/40 font-body">Filtros activos:</span>
          {selectedCategory !== 'Todos' && (
            <span className="px-3 py-1 bg-gold/10 text-gold border border-gold/20 font-body tracking-wider">
              {selectedCategory}
            </span>
          )}
          {selectedNotes.map(note => (
            <span 
              key={note}
              className="px-3 py-1 bg-gold/10 text-gold border border-gold/20 font-body tracking-wider flex items-center gap-2"
            >
              {note}
              <button 
                onClick={() => toggleNote(note)}
                className="hover:text-cream transition-colors"
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FiltersPanel;
