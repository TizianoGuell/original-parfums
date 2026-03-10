import { Search, X } from 'lucide-react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search 
          size={18} 
          className="text-gold/50 group-focus-within:text-gold transition-colors" 
        />
      </div>
      
      <input
        data-testid="search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar fragancias, notas, marcas..."
        className="
          w-full py-3 pl-12 pr-10
          bg-[#0F0303]/60 border border-gold/20
          text-cream placeholder:text-cream/30
          font-body text-sm tracking-wide
          focus:outline-none focus:border-gold/50 focus:bg-[#0F0303]/80
          transition-all duration-300
        "
      />
      
      {value && (
        <button
          data-testid="clear-search-btn"
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-cream/40 hover:text-gold transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
