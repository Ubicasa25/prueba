const properties = [
  {
    id: 1,
    title: "Casa de lujo en el centro",
    location: "Centro",
    type: "casa",
    operation: "comprar",
    price: 150000,
    description: "Hermosa casa familiar en el corazón de la ciudad.",
    detailedDescription: "Esta casa de 3 dormitorios y 2 baños es ideal para familias que buscan comodidad y ubicación céntrica. Cuenta con un amplio living, cocina moderna con electrodomésticos de acero inoxidable, patio trasero con quincho y garage. Construida en 2015, está en excelente estado con pisos de madera y detalles de diseño premium.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c714935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600566753377-9c7b942e6d39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    squareMeters: 120,
    bedrooms: 3,
    bathrooms: 2,
    owner: "Lionel Messi",
    phone: "1234567890",
    featured: true
  },
  {
    id: 2,
    title: "Departamento moderno",
    location: "Barrio Norte",
    type: "departamento",
    operation: "alquilar",
    price: 500,
    description: "1 dormitorio, balcón, cerca de comercios.",
    detailedDescription: "Departamento luminoso con balcón y vistas al parque. Incluye cocina equipada con electrodomésticos de alta gama, aire acondicionado y calefacción por losa radiante. Ubicado a pasos de tiendas, restaurantes y transporte público. Ideal para solteros o parejas jóvenes que buscan un estilo de vida urbano.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600566753086-1033a4e6b759?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    squareMeters: 50,
    bedrooms: 1,
    bathrooms: 1,
    owner: "Lamine Yamal",
    phone: "0987654321",
    featured: true
  },
  {
    id: 3,
    title: "Terreno amplio",
    location: "Afueras",
    type: "terreno",
    operation: "comprar",
    price: 30000,
    description: "500 m², ideal para construir.",
    detailedDescription: "Terreno de 500 m² en una zona tranquila y de gran potencial, perfecto para construir la casa de tus sueños. Cuenta con acceso a servicios básicos (agua, electricidad) y está a solo 15 minutos del centro de la ciudad. Ideal para inversores o familias que buscan un proyecto personalizado.",
    images: [
      "https://static1.sosiva451.com/16936851/90f924a9-f454-4c37-a4a4-384465f1fff8_u_small.jpg"
    ],
    squareMeters: 500,
    bedrooms: 0,
    bathrooms: 0,
    owner: "Robert Lewandowski",
    phone: "1122334455",
    featured: false
  },
  {
    id: 4,
    title: "Casa de lujo",
    location: "Centro",
    type: "casa",
    operation: "comprar",
    price: 150000,
    description: "Hermosa casa familiar en el corazón de la ciudad.",
    detailedDescription: "Esta casa de 3 dormitorios y 2 baños es ideal para familias que buscan comodidad y ubicación céntrica. Cuenta con un amplio living, cocina moderna con electrodomésticos de acero inoxidable, patio trasero con quincho y garage. Construida en 2015, está en excelente estado con pisos de madera y detalles de diseño premium.",
    images: [
      "https://www.construyehogar.com/wp-content/uploads/2016/01/Casa-moderna-un-piso.jpg",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c714935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600566753377-9c7b942e6d39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    squareMeters: 120,
    bedrooms: 3,
    bathrooms: 2,
    owner: "Neymar Jr",
    phone: "1234567890",
    featured: false
  },
  {
    id: 5,
    title: "Local comercial ",
    location: "Centro",
    type: "local",
    operation: "alquilar",
    price: 800,
    description: "Ideal para negocio, 70 m².",
    detailedDescription: "Local comercial de 70 m² ubicado en el centro de Villa Ángela, perfecto para emprendedores. Tiene una amplia vidriera, espacio para almacenamiento y baño privado. Alta visibilidad y tráfico peatonal, ideal para tiendas o servicios.",
    images: [
      "https://ivancotado.es/wp-content/uploads/2012/03/ivan_cotado_tu_vision_ii_optica_ponferrada_21.jpg"
    ],
    squareMeters: 70,
    bedrooms: 0,
    bathrooms: 1,
    owner: "Emiliano Martinez",
    phone: "9876543210",
    featured: true
  },
  {
    id: 6,
    title: "Oficina moderna en edificio nuevo",
    location: "Barrio Norte",
    type: "oficina",
    operation: "comprar",
    price: 90000,
    description: "Oficina de 60 m² con vistas.",
    detailedDescription: "Oficina de 60 m² en un edificio moderno con vistas panorámicas. Incluye aire acondicionado, iluminación LED, y acceso a sala de reuniones compartida. Perfecta para profesionales o pequeñas empresas que buscan un espacio funcional y bien ubicado.",
    images: [
      "https://sillaoficina365.es/img/cms/BLOG/JUNIO/03/imagen-2.jpg"
    ],
    squareMeters: 60,
    bedrooms: 0,
    bathrooms: 1,
    owner: "Lautaro Martinez",
    phone: "5555555555",
    featured: false
  },
  {
    id: 7,
    title: "Campo de 10 hectáreas",
    location: "Afueras",
    type: "campo",
    operation: "comprar",
    price: 120000,
    description: "Ideal para agricultura o descanso.",
    detailedDescription: "Campo de 10 hectáreas a 20 minutos de Villa Ángela, con acceso a agua y electricidad. Perfecto para proyectos agrícolas, ganaderos o como retiro de fin de semana. Incluye alambrado perimetral y un pequeño galpón.",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    squareMeters: 100000,
    bedrooms: 0,
    bathrooms: 0,
    owner: "El burro de Cavani",
    phone: "6666666666",
    featured: false
  }
];

let currentImageIndex = 0;

function renderProperties(filteredProperties, containerId, isFeatured = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  filteredProperties.forEach(property => {
    if (isFeatured && !property.featured) return;
    const card = document.createElement('div');
    card.className = 'bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition duration-300';
    card.innerHTML = `
      <div class="relative overflow-hidden">
        <img src="${property.images[0]}" alt="${property.title}" class="w-full h-48 sm:h-64 object-cover transition duration-500" loading="lazy">
        ${property.featured ? '<span class="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">Destacado</span>' : ''}
      </div>
      <div class="p-4 sm:p-6">
        <h4 class="text-xl sm:text-2xl font-playfair font-semibold text-white">${property.title}</h4>
        <p class="text-gray-400 mt-2 text-sm sm:text-base">${property.type.charAt(0).toUpperCase() + property.type.slice(1)} - ${property.operation === 'comprar' ? 'Venta' : 'Alquiler'} - $${property.price.toLocaleString()}</p>
        <p class="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-2">${property.description}</p>
        <button onclick="openPropertyModal(${property.id})" class="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:from-indigo-700 hover:to-purple-800 transition duration-300">Ver más detalles</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterProperties() {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const operation = document.getElementById('operationFilter').value;
  const type = document.getElementById('typeFilter').value;
  const sortPrice = document.getElementById('sortPrice').value;

  let filtered = properties.filter(property => {
    const matchesText = property.title.toLowerCase().includes(searchText) || property.location.toLowerCase().includes(searchText);
    const matchesOperation = !operation || property.operation === operation;
    const matchesType = !type || property.type === type;
    return matchesText && matchesOperation && matchesType;
  });

  if (sortPrice) {
    filtered.sort((a, b) => sortPrice === 'asc' ? a.price - b.price : b.price - a.price);
  }

  renderProperties(filtered, 'propertiesContainer');
  renderProperties(filtered.filter(p => p.featured), 'featuredProperties', true);
}

function populateThumbnails(images) {
  const thumbnailContainer = document.getElementById('thumbnailContainer');
  thumbnailContainer.innerHTML = '';
  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.className = `w-16 h-16 object-cover rounded-lg cursor-pointer ${index === currentImageIndex ? 'border-2 border-indigo-500' : ''}`;
    thumbnail.onclick = () => {
      currentImageIndex = index;
      updateImageCarousel(images);
    };
    thumbnailContainer.appendChild(thumbnail);
  });
}

function openPropertyModal(propertyId) {
  const property = properties.find(p => p.id === propertyId);
  if (!property) return;

  currentImageIndex = 0;
  document.getElementById('modalTitle').textContent = property.title;
  document.getElementById('modalPrice').innerHTML = `<span class="mr-2 text-xl">💰</span>Precio: $${property.price.toLocaleString()}`;
  document.getElementById('modalType').innerHTML = `<span class="mr-2 text-xl">🏠</span>Tipo: ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}`;
  document.getElementById('modalOperation').innerHTML = `<span class="mr-2 text-xl">📝</span>Operación: ${property.operation === 'comprar' ? 'Venta' : 'Alquiler'}`;
  document.getElementById('modalLocation').innerHTML = `<span class="mr-2 text-xl">📍</span>Ubicación: ${property.location}`;
  document.getElementById('modalSquareMeters').innerHTML = `<span class="mr-2 text-xl">📏</span>Metros cuadrados: ${property.squareMeters} m²`;
  document.getElementById('modalBedrooms').innerHTML = `<span class="mr-2 text-xl">🛏️</span>Dormitorios: ${property.bedrooms}`;
  document.getElementById('modalBathrooms').innerHTML = `<span class="mr-2 text-xl">🛁</span>Baños: ${property.bathrooms}`;
  document.getElementById('modalDescription').textContent = property.detailedDescription;
  document.getElementById('modalOwner').textContent = `Propietario: ${property.owner}`;
  document.getElementById('modalPhone').textContent = `Teléfono: ${property.phone}`;
  document.getElementById('modalWhatsApp').href = `https://wa.me/${property.phone}?text=Hola, estoy interesado en la propiedad: ${property.title}`;
  document.getElementById('modalWhatsApp').textContent = 'Contactar';

  updateImageCarousel(property.images);
  document.getElementById('propertyModal').classList.remove('hidden');
}

function closePropertyModal() {
  document.getElementById('propertyModal').classList.add('hidden');
}

function updateImageCarousel(images) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = images[currentImageIndex];
  mainImage.alt = `Imagen de la propiedad ${currentImageIndex + 1}`;
  populateThumbnails(images);
}

function prevImage() {
  const property = properties.find(p => p.title === document.getElementById('modalTitle').textContent);
  if (currentImageIndex > 0) {
    currentImageIndex--;
  } else {
    currentImageIndex = property.images.length - 1;
  }
  updateImageCarousel(property.images);
}

function nextImage() {
  const property = properties.find(p => p.title === document.getElementById('modalTitle').textContent);
  if (currentImageIndex < property.images.length - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }
  updateImageCarousel(property.images);
}

// Event listeners para los filtros
document.getElementById('searchInput').addEventListener('input', filterProperties);
document.getElementById('operationFilter').addEventListener('change', filterProperties);
document.getElementById('typeFilter').addEventListener('change', filterProperties);
document.getElementById('sortPrice').addEventListener('change', filterProperties);

// Render inicial
filterProperties();