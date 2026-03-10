import CatalogCard from './CatalogCard';

export const CatalogGrid = ({ perfumes, onItemClick }) => {
  if (perfumes.length === 0) {
    return (
      <div 
        data-testid="empty-catalog"
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="w-20 h-20 border border-gold/20 flex items-center justify-center mb-6">
          <span className="font-heading text-4xl text-gold/30">0</span>
        </div>
        <h3 className="font-heading text-xl text-cream/80 mb-2">
          Sin resultados
        </h3>
        <p className="font-body text-sm text-cream/50 max-w-sm">
          No se encontraron fragancias que coincidan con tu búsqueda. 
          Intenta ajustar los filtros o buscar otro término.
        </p>
      </div>
    );
  }

  return (
    <div 
      data-testid="catalog-grid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
    >
      {perfumes.map((perfume, index) => (
        <CatalogCard
          key={perfume.id}
          perfume={perfume}
          onClick={() => onItemClick(perfume)}
          isFeatured={index === 0 && perfume.featured}
        />
      ))}
    </div>
  );
};

export default CatalogGrid;
