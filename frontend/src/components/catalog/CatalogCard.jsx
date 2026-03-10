import { Heart, ShoppingBag, Eye } from 'lucide-react';

export const CatalogCard = ({ perfume, onClick, isFeatured = false }) => {
  return (
    <article
      data-testid={`product-card-${perfume.id}`}
      onClick={onClick}
      className={`
        group relative overflow-hidden cursor-pointer
        border border-gold/10 bg-[#2D0A0A]/40
        hover:border-gold/40 transition-all duration-500
        ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}
      `}
    >
      {/* Image container */}
      <div className={`relative overflow-hidden ${isFeatured ? 'aspect-square' : 'aspect-[3/4]'}`}>
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0505] via-[#1A0505]/20 to-transparent opacity-70" />
        
        {/* Featured badge */}
        {perfume.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gold text-burgundy font-body text-[10px] tracking-[0.2em] uppercase">
              Destacado
            </span>
          </div>
        )}

        {/* Quick actions - visible on hover */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
          <button
            data-testid={`add-to-favorites-${perfume.id}`}
            onClick={(e) => {
              e.stopPropagation();
              // Add to favorites logic
            }}
            className="p-2 bg-[#1A0505]/80 border border-gold/30 text-cream/80 hover:text-gold hover:border-gold transition-all"
          >
            <Heart size={16} />
          </button>
          <button
            data-testid={`add-to-cart-${perfume.id}`}
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic
            }}
            className="p-2 bg-[#1A0505]/80 border border-gold/30 text-cream/80 hover:text-gold hover:border-gold transition-all"
          >
            <ShoppingBag size={16} />
          </button>
          <button
            data-testid={`quick-view-${perfume.id}`}
            onClick={onClick}
            className="p-2 bg-[#1A0505]/80 border border-gold/30 text-cream/80 hover:text-gold hover:border-gold transition-all"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {/* Category */}
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/70">
          {perfume.category}
        </span>
        
        {/* Name */}
        <h3 className={`font-heading text-cream mt-1 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {perfume.name}
        </h3>
        
        {/* Brand */}
        <p className="font-body text-xs text-cream/50 mt-1">
          {perfume.brand}
        </p>

        {/* Notes preview */}
        <div className="flex flex-wrap gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {perfume.notes.slice(0, 3).map((note, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-gold/10 border border-gold/20 text-gold/80 font-body text-[9px] tracking-wider"
            >
              {note}
            </span>
          ))}
          {perfume.notes.length > 3 && (
            <span className="px-2 py-0.5 text-gold/50 font-body text-[9px]">
              +{perfume.notes.length - 3}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mt-4">
          <span className={`font-heading text-gold ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
            ${perfume.price}
          </span>
          <span className="font-body text-[10px] text-cream/40 tracking-wider">
            {perfume.concentration}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CatalogCard;
