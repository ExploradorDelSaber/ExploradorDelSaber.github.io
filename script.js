// Datos de ejemplo
const data = {
  "Matemáticas": [
    { title: "Sumas básicas", url: "https://example.com/sumas.pdf" },
    { title: "Restas avanzadas", url: "https://example.com/restas.pdf" }
  ],
  "Ciencias": [
    { title: "La célula", url: "https://example.com/celula.pdf" },
    { title: "Energía y fuerzas", url: "https://example.com/energia.pdf" }
  ],
  "Historia": [
    { title: "Civilización Maya", url: "https://example.com/maya.pdf" }
  ]
};

const categoriesEl = document.getElementById('categories');
const docsEl = document.getElementById('docs');

// Crear lista de categorías
Object.keys(data).forEach(cat => {
  const li = document.createElement('li');
  li.textContent = cat;
  li.className = 'category-item';
  li.addEventListener('click', () => showDocs(cat));
  categoriesEl.appendChild(li);
});

// Mostrar documentos por categoría
function showDocs(category) {
  docsEl.innerHTML = `<h2>${category}</h2>`;
  data[category].forEach(doc => {
    const p = document.createElement('p');
    p.className = 'doc-item';
    p.innerHTML = `<a href="${doc.url}" target="_blank">${doc.title}</a>`;
    docsEl.appendChild(p);
  });
}

// Mostrar primera categoría al cargar
showDocs(Object.keys(data)[0]);
