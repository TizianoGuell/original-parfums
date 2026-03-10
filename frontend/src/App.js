import { useState, useMemo } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout components
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

// Catalog components
import FiltersPanel from "./components/catalog/FiltersPanel";
import CatalogGrid from "./components/catalog/CatalogGrid";
import ItemDetailModal from "./components/catalog/ItemDetailModal";

// Data
import { perfumes } from "./data/perfumes";

const CatalogPage = () => {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [activeNav, setActiveNav] = useState("catalog");
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter perfumes based on search, category, and notes
  const filteredPerfumes = useMemo(() => {
    return perfumes.filter((perfume) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        perfume.name.toLowerCase().includes(searchLower) ||
        perfume.brand.toLowerCase().includes(searchLower) ||
        perfume.description.toLowerCase().includes(searchLower) ||
        perfume.notes.some((note) => note.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory =
        selectedCategory === "Todos" || perfume.category === selectedCategory;

      // Notes filter
      const matchesNotes =
        selectedNotes.length === 0 ||
        selectedNotes.some((note) =>
          perfume.notes.some(
            (perfumeNote) =>
              perfumeNote.toLowerCase().includes(note.toLowerCase())
          )
        );

      // Navigation filter (featured)
      const matchesNav =
        activeNav !== "featured" || perfume.featured === true;

      return matchesSearch && matchesCategory && matchesNotes && matchesNav;
    });
  }, [searchQuery, selectedCategory, selectedNotes, activeNav]);

  // Handlers
  const handleClearFilters = () => {
    setSelectedCategory("Todos");
    setSelectedNotes([]);
    setSearchQuery("");
  };

  const handleItemClick = (perfume) => {
    setSelectedPerfume(perfume);
    setIsModalOpen(true);
  };

  const handleNavChange = (navId) => {
    setActiveNav(navId);
    // Reset filters when changing nav
    if (navId !== "catalog" && navId !== "featured") {
      // For other nav items, just show all
      setSelectedCategory("Todos");
      setSelectedNotes([]);
    }
  };

  // Calculate counts
  const resultsCount = filteredPerfumes.length;
  const totalCount = perfumes.length;

  return (
    <div 
      data-testid="catalog-page"
      className="min-h-screen bg-burgundy"
    >
      {/* Sidebar */}
      <Sidebar activeNav={activeNav} onNavChange={handleNavChange} />

      {/* Main content area */}
      <div className="md:ml-64 transition-all duration-300">
        {/* Header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          cartCount={0}
          favoritesCount={0}
        />

        {/* Main content */}
        <main className="p-6 md:p-8 lg:p-10">
          {/* Page title section */}
          <div className="mb-10">
            <h1 data-testid="page-title" className="font-heading text-4xl md:text-5xl text-gold mb-2">
              {activeNav === "featured" ? "Destacados" : 
               activeNav === "favorites" ? "Favoritos" :
               activeNav === "cart" ? "Carrito" :
               activeNav === "settings" ? "Ajustes" :
               activeNav === "home" ? "Inicio" : "Catálogo"}
            </h1>
            <p className="font-body text-sm text-cream/60">
              {activeNav === "featured" 
                ? `${filteredPerfumes.filter(p => p.featured).length} fragancias destacadas`
                : resultsCount === totalCount
                  ? `Mostrando ${totalCount} fragancias exclusivas`
                  : `${resultsCount} de ${totalCount} fragancias`}
            </p>
          </div>

          {/* Filters */}
          <FiltersPanel
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedNotes={selectedNotes}
            onNotesChange={setSelectedNotes}
            onClearFilters={handleClearFilters}
          />

          {/* Catalog Grid */}
          <CatalogGrid
            perfumes={filteredPerfumes}
            onItemClick={handleItemClick}
          />
        </main>

        {/* Footer */}
        <footer className="border-t border-gold/10 py-8 px-6 md:px-10 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl text-gold tracking-[0.2em] uppercase">
                  Original
                </span>
                <span className="font-body text-[10px] text-cream/60 tracking-[0.45em] uppercase mt-1">
                  Parfums
                </span>
              </div>
              <span className="font-body text-xs text-cream/40 tracking-widest uppercase">
                Luxury Collection
              </span>
            </div>
            <p className="font-body text-xs text-cream/30">
              © 2024 Original Parfums. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>

      {/* Detail Modal */}
      <ItemDetailModal
        perfume={selectedPerfume}
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="*" element={<CatalogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
