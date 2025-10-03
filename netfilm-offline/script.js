const MOVIES = [
  {
    "id": 1,
    "title": "Titanic",
    "year": 1997,
    "genres": [
      "Romance",
      "Drama"
    ],
    "rating": 4.3,
    "runtime": "195 min",
    "trailer": "https://www.youtube.com/embed/kVrqfYjkTdQ",
    "description": "A seventeen-year-old aristocrat falls in love with a poor artist aboard the ill-fated R.M.S. Titanic.",
    "cast": [
      "Leonardo DiCaprio",
      "Kate Winslet"
    ],
    "poster_local": "images/poster_1.jpg"
  },
  {
    "id": 2,
    "title": "Avatar",
    "year": 2009,
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "rating": 4.0,
    "runtime": "162 min",
    "trailer": "https://www.youtube.com/embed/5PSNL1qE6VY",
    "description": "A paraplegic Marine becomes torn between following orders and protecting an alien civilization on Pandora.",
    "cast": [
      "Sam Worthington",
      "Zoe Saldana"
    ],
    "poster_local": "images/poster_2.jpg"
  },
  {
    "id": 3,
    "title": "The Godfather",
    "year": 1972,
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 4.9,
    "runtime": "175 min",
    "trailer": "https://www.youtube.com/embed/sY1S34973zA",
    "description": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    "cast": [
      "Marlon Brando",
      "Al Pacino"
    ],
    "poster_local": "images/poster_3.jpg"
  },
  {
    "id": 4,
    "title": "Inception",
    "year": 2010,
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "rating": 4.5,
    "runtime": "148 min",
    "trailer": "https://www.youtube.com/embed/YoHD9XEInc0",
    "description": "A thief who enters people's dreams is tasked with planting an idea into a CEO's mind.",
    "cast": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt"
    ],
    "poster_local": "images/poster_4.jpg"
  },
  {
    "id": 5,
    "title": "The Dark Knight",
    "year": 2008,
    "genres": [
      "Action",
      "Crime"
    ],
    "rating": 4.8,
    "runtime": "152 min",
    "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY",
    "description": "Batman faces the Joker, a criminal mastermind who creates chaos in Gotham.",
    "cast": [
      "Christian Bale",
      "Heath Ledger"
    ],
    "poster_local": "images/poster_5.jpg"
  },
  {
    "id": 6,
    "title": "Parasite",
    "year": 2019,
    "genres": [
      "Thriller",
      "Drama"
    ],
    "rating": 4.6,
    "runtime": "132 min",
    "trailer": "https://www.youtube.com/embed/SEUXfv87Wpk",
    "description": "Greed and class discrimination threaten a newly formed symbiotic relationship between two families.",
    "cast": [
      "Song Kang-ho",
      "Lee Sun-kyun"
    ],
    "poster_local": "images/poster_6.jpg"
  },
  {
    "id": 7,
    "title": "Forrest Gump",
    "year": 1994,
    "genres": [
      "Drama",
      "Romance"
    ],
    "rating": 4.4,
    "runtime": "142 min",
    "trailer": "https://www.youtube.com/embed/bLvqoHBptjg",
    "description": "Through the eyes of Forrest Gump, history unfolds as he finds himself at the center of major events.",
    "cast": [
      "Tom Hanks",
      "Robin Wright"
    ],
    "poster_local": "images/poster_7.jpg"
  },
  {
    "id": 8,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "genres": [
      "Drama"
    ],
    "rating": 4.9,
    "runtime": "142 min",
    "trailer": "https://www.youtube.com/embed/6hB3S9bIaco",
    "description": "Two imprisoned men bond and find eventual redemption through acts of common decency.",
    "cast": [
      "Tim Robbins",
      "Morgan Freeman"
    ],
    "poster_local": "images/poster_8.jpg"
  },
  {
    "id": 9,
    "title": "Interstellar",
    "year": 2014,
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "rating": 4.5,
    "runtime": "169 min",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E",
    "description": "A team travels through a wormhole to ensure humanity's survival.",
    "cast": [
      "Matthew McConaughey",
      "Anne Hathaway"
    ],
    "poster_local": "images/poster_9.jpg"
  },
  {
    "id": 10,
    "title": "The Lion King",
    "year": 1994,
    "genres": [
      "Animation",
      "Family"
    ],
    "rating": 4.2,
    "runtime": "88 min",
    "trailer": "https://www.youtube.com/embed/7TavVZMewpY",
    "description": "A young lion prince learns about responsibility and bravery on his journey to reclaim the throne.",
    "cast": [
      "Matthew Broderick",
      "Jeremy Irons"
    ],
    "poster_local": "images/poster_10.jpg"
  },
  {
    "id": 11,
    "title": "Gladiator",
    "year": 2000,
    "genres": [
      "Action",
      "Drama"
    ],
    "rating": 4.3,
    "runtime": "155 min",
    "trailer": "https://www.youtube.com/embed/owK1qxDselE",
    "description": "A former general seeks vengeance against the corrupt emperor who destroyed his life.",
    "cast": [
      "Russell Crowe",
      "Joaquin Phoenix"
    ],
    "poster_local": "images/poster_11.jpg"
  },
  {
    "id": 12,
    "title": "Fight Club",
    "year": 1999,
    "genres": [
      "Drama"
    ],
    "rating": 4.2,
    "runtime": "139 min",
    "trailer": "https://www.youtube.com/embed/SUXWAEX2jlg",
    "description": "An insomniac forms an underground fight club that spirals out of control.",
    "cast": [
      "Brad Pitt",
      "Edward Norton"
    ],
    "poster_local": "images/poster_12.jpg"
  },
  {
    "id": 13,
    "title": "La La Land",
    "year": 2016,
    "genres": [
      "Musical",
      "Romance"
    ],
    "rating": 4.0,
    "runtime": "128 min",
    "trailer": "https://www.youtube.com/embed/0pdqf4P9MB8",
    "description": "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    "cast": [
      "Ryan Gosling",
      "Emma Stone"
    ],
    "poster_local": "images/poster_13.jpg"
  },
  {
    "id": 14,
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "genres": [
      "Action",
      "Adventure"
    ],
    "rating": 4.0,
    "runtime": "120 min",
    "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
    "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrant with the help of Max.",
    "cast": [
      "Tom Hardy",
      "Charlize Theron"
    ],
    "poster_local": "images/poster_14.jpg"
  },
  {
    "id": 15,
    "title": "The Social Network",
    "year": 2010,
    "genres": [
      "Drama",
      "Biography"
    ],
    "rating": 4.0,
    "runtime": "120 min",
    "trailer": "https://www.youtube.com/embed/lB95KLmpLR4",
    "description": "The story of the founders of Facebook and the legal battles that followed.",
    "cast": [
      "Jesse Eisenberg",
      "Andrew Garfield"
    ],
    "poster_local": "images/poster_15.jpg"
  },
  {
    "id": 16,
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "rating": 4.0,
    "runtime": "99 min",
    "trailer": "https://www.youtube.com/embed/1Fg5iWmQjwk",
    "description": "A concierge and a lobby boy team up for a madcap caper involving a stolen painting.",
    "cast": [
      "Ralph Fiennes",
      "Tony Revolori"
    ],
    "poster_local": "images/poster_16.jpg"
  },
  {
    "id": 17,
    "title": "Moonlight",
    "year": 2016,
    "genres": [
      "Drama"
    ],
    "rating": 4.2,
    "runtime": "111 min",
    "trailer": "https://www.youtube.com/embed/9NJj12tJ8Xk",
    "description": "A young man grapples with identity and sexuality while growing up in Miami.",
    "cast": [
      "Trevante Rhodes",
      "Mahershala Ali"
    ],
    "poster_local": "images/poster_17.jpg"
  },
  {
    "id": 18,
    "title": "Joker",
    "year": 2019,
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 4.1,
    "runtime": "122 min",
    "trailer": "https://www.youtube.com/embed/zAGVQLHvwOY",
    "description": "A struggling comedian becomes an infamous criminal in Gotham City.",
    "cast": [
      "Joaquin Phoenix",
      "Robert De Niro"
    ],
    "poster_local": "images/poster_18.jpg"
  },
  {
    "id": 19,
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genres": [
      "Animation",
      "Action"
    ],
    "rating": 4.4,
    "runtime": "117 min",
    "trailer": "https://www.youtube.com/embed/g4Hbz2jLxvQ",
    "description": "Miles Morales becomes Spider-Man and discovers a multiverse of Spider-People.",
    "cast": [
      "Shameik Moore",
      "Jake Johnson"
    ],
    "poster_local": "images/poster_19.jpg"
  },
  {
    "id": 20,
    "title": "Toy Story",
    "year": 1995,
    "genres": [
      "Animation",
      "Family"
    ],
    "rating": 4.1,
    "runtime": "81 min",
    "trailer": "https://www.youtube.com/embed/KYz2wyBy3kc",
    "description": "Toys come to life and learn the meaning of friendship and loyalty.",
    "cast": [
      "Tom Hanks",
      "Tim Allen"
    ],
    "poster_local": "images/poster_20.jpg"
  }
];


let selectedGenres = [];
let selectedMovie = MOVIES[0];

const genresEl = document.getElementById('genres');
const gridEl = document.getElementById('grid');
const detailEl = document.getElementById('detail');
const searchEl = document.getElementById('search');

const ALL_GENRES = [...new Set(MOVIES.flatMap(m => m.genres))].sort();

function createGenreCheckbox(g) {
  const id = 'g_' + g.replace(/\s+/g,'_');
  const wrapper = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = id;
  input.onclick = () => toggleGenre(g);
  const label = document.createElement('label');
  label.htmlFor = id;
  label.style.marginLeft = '8px';
  label.innerText = g;
  wrapper.appendChild(input);
  wrapper.appendChild(label);
  return wrapper;
}

ALL_GENRES.forEach(g => {
  genresEl.appendChild(createGenreCheckbox(g));
});

function toggleGenre(g) {
  if (selectedGenres.includes(g)) selectedGenres = selectedGenres.filter(x=>x!==g);
  else selectedGenres.push(g);
  renderGrid();
}

function resetFilters() {
  selectedGenres = [];
  document.querySelectorAll('#genres input').forEach(cb=>cb.checked=false);
  searchEl.value = '';
  renderGrid();
}

function renderDetail(m) {
  const stars = '★'.repeat(Math.round(m.rating)) + '☆'.repeat(5-Math.round(m.rating));
  detailEl.innerHTML = `
    <div style="display:flex;gap:16px;align-items:flex-start">
      <div style="flex:1">
        <div style="background:#000;padding:0;border-radius:8px;overflow:hidden">
          <iframe class="detail-iframe" src="${m.trailer}" allowfullscreen></iframe>
        </div>
        <h2 style="margin:12px 0 4px">${m.title} <small style="color:#6b7280">(${m.year})</small></h2>
        <div class="meta">${m.genres.join(' • ')} • ${m.runtime} • <span class="rating">${m.rating.toFixed(1)}</span></div>
        <p style="margin-top:8px">${m.description}</p>
        <div class="meta"><strong>Cast:</strong> ${m.cast ? m.cast.join(', ') : 'N/A'}</div>
      </div>
      <div style="width:200px">
        <img src="${m.poster_local}" style="width:100%;border-radius:8px;margin-bottom:8px">
        <div style="background:#f3f4f6;padding:8px;border-radius:8px;font-size:13px">
          <div><strong>Year:</strong> ${m.year}</div>
          <div><strong>Genres:</strong> ${m.genres.join(', ')}</div>
          <div><strong>Runtime:</strong> ${m.runtime}</div>
        </div>
      </div>
    </div>
  `;
}

function renderGrid() {
  const q = searchEl.value.trim().toLowerCase();
  const filtered = MOVIES.filter(m=>{
    const matchesQuery = !q || m.title.toLowerCase().includes(q) || (m.cast && m.cast.join(' ').toLowerCase().includes(q));
    const matchesGenres = selectedGenres.length===0 || selectedGenres.every(g=>m.genres.includes(g));
    return matchesQuery && matchesGenres;
  });
  gridEl.innerHTML = '';
  if (filtered.length===0) {
    gridEl.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#666;padding:30px">No movies found.</div>';
    return;
  }
  filtered.forEach(m=>{
    const div = document.createElement('div');
    div.className = 'movie-item';
    div.onclick = ()=>{selectedMovie=m;renderDetail(m);window.scrollTo({top:0,behavior:"smooth"})};
    div.innerHTML = `
      <img src="${m.poster_local}" alt="${m.title}">
      <div class="movie-info">
        <div style="font-weight:600">${m.title}</div>
        <div style="color:#6b7280;font-size:13px">${m.year} • ${m.genres.join(', ')}</div>
      </div>
    `;
    gridEl.appendChild(div);
  });
  if (selectedMovie) renderDetail(selectedMovie);
}

searchEl.oninput = ()=>renderGrid();

// initialize
renderGrid();
