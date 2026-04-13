import { fetchTeams, fetchFixtures, fetchPlayer } from "./api.js";
import { renderTeams, renderFixtures, renderPlayer, renderFavorite } from "./ui.js";

document.getElementById("loadTeams").onclick = async () => {
  const teams = await fetchTeams();
  renderTeams(teams);
};

document.getElementById("loadFixtures").onclick = async () => {
  const fixtures = await fetchFixtures();
  renderFixtures(fixtures);
};

document.getElementById("searchPlayer").onclick = async () => {
  const name = document.getElementById("playerInput").value;
  const players = await fetchPlayer(name);
  renderPlayer(players);
};

// Load favorite on start
renderFavorite();