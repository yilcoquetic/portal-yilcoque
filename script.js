const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalLinks = document.getElementById("modalLinks");

const content = {
  gestion: {
    title: "Sistema de Gestión",
    text: "Consulta aquí las políticas, manuales, procedimientos, formatos y demás documentos que YILCOQUE determine como vigentes.",
    links: ["Políticas del Sistema de Gestión", "Procedimientos", "Manuales", "Formatos"]
  },
  laboral: {
    title: "Regulaciones Laborales",
    text: "Espacio destinado a información laboral, reglamentos, derechos, deberes y documentos de consulta para los colaboradores.",
    links: ["Reglamento Interno de Trabajo", "Derechos y deberes", "Normatividad aplicable", "Preguntas frecuentes"]
  },
  documentos: {
    title: "Documentos Importantes",
    text: "Organiza aquí los documentos que los colaboradores consultan con mayor frecuencia.",
    links: ["Formatos para colaboradores", "Comunicados", "Documentos corporativos", "Biblioteca documental"]
  },
  contactos: {
    title: "Contactos del Equipo",
    text: "Encuentra los canales de contacto de Talento Humano, Sistema de Gestión, Tecnología y demás áreas.",
    links: ["Talento Humano", "Sistema de Gestión", "Tecnología", "Directorio interno"]
  }
};

document.querySelectorAll(".resource-card").forEach(card => {
  card.addEventListener("click", () => {
    const item = content[card.dataset.modal];
    modalTitle.textContent = item.title;
    modalText.textContent = item.text;
    modalLinks.innerHTML = item.links
      .map(link => `<a class="modal-link" href="#contactos">${link} →</a>`)
      .join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

document.getElementById("year").textContent = new Date().getFullYear();
