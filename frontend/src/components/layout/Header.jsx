import { ShoppingBag, Heart, User } from 'lucide-react';
import SearchBar from '../catalog/SearchBar';

export const Header = ({ searchQuery, onSearchChange, cartCount = 0, favoritesCount = 0 }) => {
  return (
    <header 
      data-testid="header"
      className="sticky top-0 z-30 bg-[#1A0505]/80 backdrop-blur-xl border-b border-gold/10"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left section - Title */}
        <div className="hidden md:block">
          <h1 className="font-heading text-xl text-gold tracking-wide">
            Colección
          </h1>
          <p className="font-body text-[10px] text-cream/50 tracking-[0.3em] uppercase mt-1">
            Fragancias exclusivas
          </p>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-xl mx-4 md:mx-8">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>

        {/* Right section - Actions */}
        <div className="flex items-center gap-2">
          <button
            data-testid="favorites-header-btn"
            className="relative p-3 text-cream/60 hover:text-gold transition-colors"
          >
            <Heart size={20} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-burgundy text-[10px] font-body font-semibold flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>
          
          <button
            data-testid="cart-header-btn"
            className="relative p-3 text-cream/60 hover:text-gold transition-colors"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-burgundy text-[10px] font-body font-semibold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            data-testid="user-btn"
            className="p-3 text-cream/60 hover:text-gold transition-colors ml-2"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
