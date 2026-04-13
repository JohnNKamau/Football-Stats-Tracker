// Teams
export function renderTeams(teams) {
  const container = document.getElementById("teams");
  container.innerHTML = "";

  teams.forEach(team => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = team.team.name;
    container.appendChild(div);
  });
}

// Fixtures
export function renderFixtures(fixtures) {
  const container = document.getElementById("fixtures");
  container.innerHTML = "";

  fixtures.slice(0, 10).forEach(match => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `${match.teams.home.name} vs ${match.teams.away.name}`;
    container.appendChild(div);
  });
}

// Player Search
export function renderPlayer(players) {
  const container = document.getElementById("playerResult");
  container.innerHTML = "";

  if (!players || players.length === 0) {
    container.innerHTML = "<p>No player found</p>";
    return;
  }

  const p = players[0];

  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <h3>${p.player.name}</h3>
    <p>Age: ${p.player.age}</p>
    <p>Goals: ${p.statistics[0]?.goals.total || 0}</p>
    <button id="saveFav">Save</button>
  `;

  container.appendChild(div);

  document.getElementById("saveFav").onclick = () => {
    localStorage.setItem("favPlayer", JSON.stringify(p));
    renderFavorite();
  };
}

// Favorite Player
export function renderFavorite() {
  const container = document.getElementById("favoritePlayer");
  container.innerHTML = "";

  const player = JSON.parse(localStorage.getItem("favPlayer"));

  if (!player) {
    container.innerHTML = "<p>No favorite player</p>";
    return;
  }

  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <h3>${player.player.name}</h3>
    <p>Goals: ${player.statistics[0]?.goals.total || 0}</p>
    <button id="removeFav">Remove</button>
  `;

  container.appendChild(div);

  document.getElementById("removeFav").onclick = () => {
    localStorage.removeItem("favPlayer");
    renderFavorite();
  };
}