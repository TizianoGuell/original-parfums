import { X, Heart, ShoppingBag, Minus, Plus, Star, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

export const ItemDetailModal = ({ perfume, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!perfume) return null;

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content 
          data-testid="item-detail-modal"
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] h-[85vh]",
            "bg-[#1A0505] border border-gold/30 shadow-2xl overflow-hidden",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          )}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left - Image */}
          <div className="relative h-64 md:h-full overflow-hidden bg-[#0F0303]">
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A0505]/50 hidden md:block" />
            
            {/* Featured badge */}
            {perfume.featured && (
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-gold text-burgundy font-body text-xs tracking-[0.2em] uppercase">
                  Destacado
                </span>
              </div>
            )}
          </div>

          {/* Right - Details */}
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Close button */}
            <button
              data-testid="close-modal-btn"
              onClick={() => onClose(false)}
              className="absolute top-4 right-4 p-2 text-cream/50 hover:text-gold transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="flex-1 p-8 md:p-10">
              {/* Category & Brand */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">
                  {perfume.category}
                </span>
                <span className="w-1 h-1 bg-gold/30 rounded-full" />
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/50">
                  {perfume.brand}
                </span>
              </div>

              {/* Name */}
              <h2 className="font-heading text-3xl md:text-4xl text-cream mb-2">
                {perfume.name}
              </h2>

              {/* Rating placeholder */}
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={star <= 4 ? 'fill-gold text-gold' : 'text-gold/30'}
                  />
                ))}
                <span className="font-body text-xs text-cream/50 ml-2">(24 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-heading text-4xl text-gold">
                  ${perfume.price}
                </span>
                <span className="font-body text-sm text-cream/40">
                  {perfume.size} · {perfume.concentration}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-cream/70 leading-relaxed mb-8">
                {perfume.description}
              </p>

              {/* Notes */}
              <div className="mb-8">
                <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">
                  Notas Olfativas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {perfume.notes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-gold/20 text-cream/80 font-body text-xs tracking-wider hover:border-gold/50 hover:text-gold transition-colors cursor-default"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Concentration info */}
              <div className="p-4 bg-gold/5 border border-gold/10 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-cream/60">Concentración</span>
                  <span className="font-body text-xs text-gold">{perfume.concentration}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-body text-xs text-cream/60">Tamaño</span>
                  <span className="font-body text-xs text-gold">{perfume.size}</span>
                </div>
              </div>
            </div>

            {/* Bottom actions - sticky */}
            <div className="border-t border-gold/10 p-6 bg-[#1A0505]/95 backdrop-blur-sm">
              {/* Quantity selector */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-xs text-cream/60 tracking-wider uppercase">
                  Cantidad
                </span>
                <div className="flex items-center border border-gold/20">
                  <button
                    data-testid="decrease-quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-cream/60 hover:text-gold transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-body text-cream">{quantity}</span>
                  <button
                    data-testid="increase-quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-cream/60 hover:text-gold transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  data-testid="add-to-favorites-modal-btn"
                  className="p-4 border border-gold/30 text-cream/70 hover:text-gold hover:border-gold transition-all"
                >
                  <Heart size={20} />
                </button>
                <button
                  data-testid="add-to-cart-btn"
                  className="flex-1 flex items-center justify-center gap-3 py-4 bg-gold text-burgundy font-body text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
                >
                  <ShoppingBag size={18} />
                  Añadir al Carrito
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ItemDetailModal;
