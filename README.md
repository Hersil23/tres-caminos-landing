# Tres Caminos Un Solo Dios - Landing Page

Landing page moderna y elegante para el libro devocional "Tres Caminos Un Solo Dios" de Angel Morel.

## Características

- 🌐 **Bilingüe**: Soporte completo para español e inglés
- ✨ **Animaciones**: Transiciones suaves con Framer Motion
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- 🎨 **Diseño Premium**: Estética elegante con colores dorado, negro y burgundy
- ⚡ **Rendimiento**: Optimizado con Next.js 14
- 🚀 **Listo para Vercel**: Deploy con un click

## Secciones

1. **Hero** - Presentación del libro con animaciones
2. **Acerca del Libro** - Descripción y estadísticas
3. **Los Tres Caminos** - Los Predestinados, Libre Albedrío, Hijos de Desobediencia
4. **El Autor** - Información de Angel Morel
5. **CTA** - Llamada a la acción para comprar
6. **Footer** - Contacto y redes sociales

## Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## Instalación

```bash
# Clonar el repositorio
git clone <tu-repo>

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

O usa el CLI de Vercel:

```bash
npm i -g vercel
vercel
```

## Estructura del Proyecto

```
tres-caminos-landing/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── Navbar.tsx       # Navegación
│   ├── Hero.tsx         # Sección hero
│   ├── About.tsx        # Acerca del libro
│   ├── Paths.tsx        # Los tres caminos
│   ├── Author.tsx       # Información del autor
│   ├── CTA.tsx          # Llamada a la acción
│   └── Footer.tsx       # Pie de página
├── lib/
│   └── language-context.tsx  # Contexto de idiomas
├── public/
│   └── images/          # Imágenes del libro
└── ...config files
```

## Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.ts`:
- `gold` - Dorado principal
- `burgundy` - Rojo vino
- `dark` - Tonos oscuros

### Traducciones
Todas las traducciones están en `lib/language-context.tsx`

### Imágenes
Reemplaza las imágenes en `public/images/`:
- `book-flyer.jpeg` - Portada principal
- `hero-banner.jpeg` - Banner del hero
- `author-card.jpeg` - Tarjeta del autor

## Contacto

- **Autor del libro**: Angel Morel
- **Ministerio**: Alimento a tu Espíritu
- **Web**: www.AlimentoATuEspiritu.org
- **Instagram**: @alimentoatuespiritu

---

Desarrollado con ❤️ por [@herasi.dev](https://herasi.dev)
