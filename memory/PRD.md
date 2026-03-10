# Original Parfums - Catálogo Visual Dinámico

## Problem Statement
Construir solo el frontend de una aplicación que funcione como un catálogo visual dinámico de contenido para perfumes/fragancias con estética luxury borgoña/dorado.

## Architecture
- **Frontend Only**: React + TailwindCSS
- **No Backend**: Datos mockeados en frontend
- **Design System**: Luxury theme con colores burgundy (#1A0505) y gold (#D4AF37)

## User Personas
- Usuarios que exploran catálogos de perfumes de lujo
- Compradores de fragancias premium

## Core Requirements (Static)
- Grid responsive de tarjetas de productos
- Filtros por categoría y notas olfativas
- Búsqueda en tiempo real
- Modal de detalle de producto
- Sidebar de navegación
- Diseño luxury borgoña/dorado

## What's Been Implemented (March 2026)
- ✅ Layout principal con sidebar y header
- ✅ Grid de catálogo con 12 productos mock
- ✅ Filtros por categoría (Todos, Hombre, Mujer, Unisex)
- ✅ Filtros por notas olfativas
- ✅ Barra de búsqueda con filtrado en tiempo real
- ✅ Modal de detalle de producto
- ✅ Navegación sidebar (Inicio, Catálogo, Destacados, Favoritos, Carrito, Ajustes)
- ✅ Diseño responsive (desktop + mobile)
- ✅ Tema luxury con tipografías Playfair Display y Montserrat
- ✅ Hover effects y animaciones

## Prioritized Backlog
### P0 - MVP Complete ✅
- [x] Grid de productos
- [x] Filtros y búsqueda
- [x] Modal de detalle

### P1 - Next Phase
- [ ] Funcionalidad de favoritos (persistir en localStorage)
- [ ] Funcionalidad de carrito (añadir/eliminar productos)
- [ ] Página de checkout mock

### P2 - Future
- [ ] Animaciones de transición entre vistas
- [ ] Modo comparación de productos
- [ ] Integración con backend real
- [ ] Sistema de autenticación

## Component Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   └── catalog/
│       ├── SearchBar.jsx
│       ├── FiltersPanel.jsx
│       ├── CatalogGrid.jsx
│       ├── CatalogCard.jsx
│       └── ItemDetailModal.jsx
├── data/
│   └── perfumes.js (mock data)
└── App.js
```

## Next Tasks
1. Implementar funcionalidad de favoritos con localStorage
2. Implementar funcionalidad de carrito
3. Añadir página de detalle de producto (ruta separada)
4. Mejorar animaciones de entrada de tarjetas
