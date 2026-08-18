// ========================================
// Stretch Records - Main JavaScript
// Load artists from artists.json
// ========================================

// Select the container
const artistsGrid = document.getElementById("artistsGrid");

// ========================================
// Function to create an artist card
// ========================================
function createArtistCard(artist) {
  const article = document.createElement("article");
  article.className = "artist-card";

  // Artist image
  const img = document.createElement("img");
  img.className = "artist-image";
  img.src = artist.photo;
  img.alt = artist.name;

  // Artist info container
  const info = document.createElement("div");
  info.className = "artist-info";

  // Name
  const name = document.createElement("h2");
  name.className = "artist-name";
  name.textContent = artist.name;

  // Genre
  const genre = document.createElement("p");
  genre.className = "artist-genre";
  genre.textContent = artist.genre;

  // Blurb
  const blurb = document.createElement("p");
  blurb.className = "artist-blurb";
  blurb.textContent = artist.blurb;

  // Songs table
  const table = document.createElement("table");
  table.className = "songs-table";

  // Table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>#</th><th>Song</th><th>Duration</th>";
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Table body
  const tbody = document.createElement("tbody");
  artist.songs.forEach((song, index) => {
    const row = document.createElement("tr");

    // Song number
    const numberCell = document.createElement("td");
    numberCell.className = "song-number";
    numberCell.textContent = index + 1;
    row.appendChild(numberCell);

    // Song title
    const titleCell = document.createElement("td");
    titleCell.className = "song-title";
    titleCell.textContent = song.title;
    if (song.lang) {
      titleCell.setAttribute("lang", song.lang);
    }
    row.appendChild(titleCell);

    // Song duration
    const durationCell = document.createElement("td");
    durationCell.className = "song-duration";
    durationCell.textContent = song.duration;
    row.appendChild(durationCell);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Assemble the card
  info.appendChild(name);
  info.appendChild(genre);
  info.appendChild(blurb);
  info.appendChild(table);
  article.appendChild(img);
  article.appendChild(info);

  return article;
}

// ========================================
// Three-line fetch() pattern
// ========================================
fetch("artists.json")
  .then((response) => response.json())
  .then((artists) => {
    for (const artist of artists) {
      const card = createArtistCard(artist);
      artistsGrid.appendChild(card);
    }
  })
  .catch((error) => {
    console.error("Error loading artists:", error);
  });
