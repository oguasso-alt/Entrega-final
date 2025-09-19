// Actualizar año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Noticias demo en tres idiomas
const noticias = [
  {
    title: "Entrega de paquetes alimentarios",
    body: "Se distribuyeron más de 1,000 paquetes con alimentos básicos a niños y familias necesitadas, garantizando su nutrición durante el mes.",
    img: "img/foto4.jpg",
    lang: "es"
  },
  {
    title: "Community Food Drive Success",
    body: "Over 500 children received daily meals thanks to our volunteers and donors, improving nutrition in vulnerable communities.",
    img: "img/foto6.jpg",
    lang: "en"
  },
  {
    title: "Campagne d'éducation nutritionnelle",
    body: "Nous avons lancé des ateliers pour enseigner aux familles une alimentation saine et comment lutter contre la malnutrition infantile.",
    img: "img/foto5.jpg",
    lang: "fr"
  }
];

// Renderizar noticias
const news = document.getElementById('news');
news.innerHTML = '';

noticias.forEach(n => {
  const div = document.createElement('div');
  div.className = 'card news-item';

  const img = document.createElement('img');
  img.src = n.img;
  img.alt = n.title;

  const body = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = n.title;
  h4.style.margin = '0 0 6px';
  h4.style.fontFamily = 'Montserrat';

  const p = document.createElement('p');
  p.textContent = n.body;
  p.style.color = 'var(--muted)';
  p.style.margin = 0;

  body.appendChild(h4);
  body.appendChild(p);
  div.appendChild(img);
  div.appendChild(body);
  news.appendChild(div);
});

// Endpoints de ejemplo para voluntarios
const API_USERS = 'https://randomuser.me/api/?results=4&nat=us,es,fr';

// Crear perfil de voluntario
function makeVolunteer(user) {
  const cont = document.createElement('div');
  cont.className = 'vol';
  
  const img = document.createElement('img');
  img.className = 'avatar';
  img.src = user.picture.medium;
  img.alt = user.name.first;
  
  const meta = document.createElement('div');
  const name = document.createElement('div');
  name.textContent = user.name.first + ' ' + user.name.last;
  name.style.fontWeight = '700';
  
  const role = document.createElement('div');
  role.textContent = user.location.city + ', ' + user.nat;
  role.style.color = 'var(--muted)';
  role.style.fontSize = '0.9rem';
  
  meta.appendChild(name);
  meta.appendChild(role);
  cont.appendChild(img);
  cont.appendChild(meta);
  
  return cont;
}

// Fetch voluntarios (RandomUser)
fetch(API_USERS)
  .then(r => r.json())
  .then(resp => {
    const users = resp.results || [];
    const vols = document.getElementById('vols');
    vols.innerHTML = '';
    users.forEach(u => vols.appendChild(makeVolunteer(u)));
  })
  .catch(err => {
    console.error('Error cargando usuarios', err);
    document.getElementById('vols').innerHTML = '<div class="card">No se pudieron cargar los perfiles de voluntarios.</div>';
  });

// Formulario de contacto demo
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias — tu mensaje para apoyar a niños en situación de hambre se ha registrado (demo).');
  e.target.reset();
});
