import { useState } from 'react';
import { Home, Grid3X3, Heart, ShoppingBag, Settings, Menu, X, Star } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Inicio', id: 'home' },
  { icon: Grid3X3, label: 'Catálogo', id: 'catalog' },
  { icon: Star, label: 'Destacados', id: 'featured' },
  { icon: Heart, label: 'Favoritos', id: 'favorites' },
  { icon: ShoppingBag, label: 'Carrito', id: 'cart' },
  { icon: Settings, label: 'Ajustes', id: 'settings' },
];

export const Sidebar = ({ activeNav, onNavChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        data-testid="mobile-menu-btn"
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-3 bg-[#1A0505]/90 border border-gold/20 text-gold"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        data-testid="sidebar"
        className={`
          fixed left-0 top-0 h-full z-50
          bg-[#0F0303]/95 border-r border-gold/20
          transition-all duration-300 ease-out
          ${isExpanded ? 'w-64' : 'w-20'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo area */}
        <div className="h-24 flex items-center justify-center border-b border-gold/10 relative">
          <div className={`flex flex-col items-center justify-center transition-all duration-300 ${isExpanded ? 'scale-100' : 'scale-90'}`}>
            <span className="font-heading text-lg text-gold tracking-[0.35em] uppercase">
              OP
            </span>
            <span className={`font-body text-[10px] text-cream/60 tracking-[0.3em] uppercase mt-1 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
              Original Parfums
            </span>
          </div>
          
          {/* Close button for mobile */}
          <button
            data-testid="close-sidebar-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileOpen(false);
            }}
            className="absolute top-4 right-4 md:hidden text-gold/60 hover:text-gold p-2 z-50"
          >
            <X size={24} />
          </button>
        </div>

        {/* Toggle expand button - desktop only */}
        <button
          data-testid="toggle-sidebar-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden md:flex absolute -right-3 top-28 w-6 h-6 bg-gold text-burgundy items-center justify-center text-xs hover:bg-gold-light transition-colors"
        >
          {isExpanded ? '<' : '>'}
        </button>

        {/* Navigation */}
        <nav className="mt-8 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            
            return (
              <button
                key={item.id}
                data-testid={`nav-${item.id}`}
                onClick={() => {
                  onNavChange(item.id);
                  setIsMobileOpen(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-4 py-4 mb-1
                  font-body tracking-widest text-xs uppercase
                  transition-all duration-300
                  ${isActive 
                    ? 'text-gold bg-gold/10 border-l-2 border-gold' 
                    : 'text-cream/60 hover:text-gold hover:bg-gold/5 border-l-2 border-transparent'
                  }
                `}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gold/10 ${isExpanded ? '' : 'hidden md:block'}`}>
          <div className={`text-center ${isExpanded ? '' : 'hidden'}`}>
            <p className="font-mono text-[10px] text-gold/40 tracking-widest uppercase">
              Luxury Collection
            </p>
            <p className="font-mono text-[10px] text-gold/30 mt-1">
              Est. 2024
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
