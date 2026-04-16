// Teams (clickable)
export function renderTeams(teams, onClick) {
  const container = document.getElementById("teams");
  container.innerHTML = "";

  teams.forEach(team => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
    <img src="${team.team.logo}" width="50">
      <p>${team.team.name}</p>
`;
    div.onclick = () => onClick(team);

    container.appendChild(div);
  });
}

// Team Details
export function renderTeamDetails(team) {
  const container = document.getElementById("teamDetails");

  container.innerHTML = `
    <div class="card">
      <h3>${team.team.name}</h3>
      <p>Country: ${team.team.country}</p>
      <p>Founded: ${team.team.founded || "N/A"}</p>
    </div>
  `;
}

// Fixtures with dates
export function renderFixtures(fixtures) {
  const container = document.getElementById("fixtures");
  container.innerHTML = "";

  fixtures.slice(0, 80).forEach(match => {
    const date = new Date(match.fixture.date).toLocaleString();

    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
<p>
  <img src="${match.teams.home.logo}" width="25">
  ${match.teams.home.name} vs 
  <img src="${match.teams.away.logo}" width="25">
  ${match.teams.away.name}
</p>

    <small>${date}</small>
    `;

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

  const goals = p.statistics?.[0]?.goals?.total ?? "N/A";

const teamName = p.statistics?.[0]?.team?.name ?? "Unknown";

div.innerHTML = `
  <img src="${p.player.photo}" width="100">
  <h3>${p.player.name}</h3>
  <p>Team: ${teamName}</p>
  <p>Age: ${p.player.age}</p>
  <p>Goals: ${goals}</p>
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

  const goals = player.statistics?.[0]?.goals?.total ?? "N/A";

const teamName = player.statistics?.[0]?.team?.name ?? "Unknown";

div.innerHTML = `
  <img src="${player.player.photo}" width="100">
  <h3>${player.player.name}</h3>
  <p>Team: ${teamName}</p>
  <p>Goals: ${goals}</p>
  <button id="removeFav">Remove</button>
`;

  container.appendChild(div);

  document.getElementById("removeFav").onclick = () => {
    localStorage.removeItem("favPlayer");
    renderFavorite();
  };
}

// Team Search Results
export function renderTeamSearch(results, onClick) {
  const container = document.getElementById("teamDetails");
  container.innerHTML = "";

  if (!results || results.length === 0) {
    container.innerHTML = "<p>No team found</p>";
    return;
  }

  results.forEach(team => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = team.team.name;

    div.onclick = () => onClick(team);

    container.appendChild(div);
  });
}