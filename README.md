# Tres Caminos Un Solo Dios - Landing Page

Landing page moderna y elegante para el libro devocional "Tres Caminos Un Solo Dios" de Angel Morel.

## Características

- Bilingüe (Español/Inglés) con botón de cambio de idioma
- Animaciones elegantes con Framer Motion
- Diseño responsive (móvil, tablet, desktop)
- Cada sección ocupa 100% de la altura de pantalla
- Paleta de colores: Negro, Dorado (#ecd56e), Burgundy
- Optimizado para Vercel

## Secciones

1. **Hero** - Mockup del libro con título dorado
2. **El Libro** - Estadísticas animadas (173 páginas, 70 devocionales, 70 oraciones)
3. **Los Tres Caminos** - Tarjetas interactivas (Predestinados, Libre Albedrío, Desobediencia)
4. **El Autor** - Logo grande del ministerio + info
5. **CTA** - Llamada a la acción para comprar en Amazon
6. **Footer** - Logo mediano + "Creado por www.herasi.dev"

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Deploy en Vercel

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Deploy automático

## Estructura

```
tres-caminos-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Paths.tsx
│   ├── Author.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── lib/
│   └── language-context.tsx
├── public/
│   └── images/
│       ├── mockup-libro.png
│       ├── titulo-dorado.png
│       ├── libro-abierto.png
│       └── logo-ministerio.png
└── ...config files
```

## Imágenes requeridas

- `mockup-libro.png` - Mockup del libro sin fondo
- `titulo-dorado.png` - Título dorado PNG
- `libro-abierto.png` - Imagen del libro abierto (devocional David)
- `logo-ministerio.png` - Logo de Alimento a tu Espíritu

## Contacto

- **Autor del libro**: Angel Morel
- **Ministerio**: Alimento a tu Espíritu
- **Web**: www.AlimentoATuEspiritu.org

---

Creado por [www.herasi.dev](https://herasi.dev)
