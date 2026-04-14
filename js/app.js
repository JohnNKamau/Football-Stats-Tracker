
import { 
    fetchTeams, 
    fetchFixtures, 
    fetchPlayer, 
    searchTeamByName 
} 

from "./api.js";

import {
  renderTeams,
  renderFixtures,
  renderPlayer,
  renderFavorite,
  renderTeamDetails,
  renderTeamSearch
}

from "./ui.js";

let premierLeagueTeams = [];


// // Load Teams
// document.getElementById("loadTeams").onclick = async () => {
//   const teams = await fetchTeams();


// premierLeagueTeams = teams; // this only shows premier league teams


//   renderTeams(teams, (team) => {
//     renderTeamDetails(team);
//   });
// };


// Search Team

document.getElementById("searchTeam").onclick = () => {
  const name = document.getElementById("teamSearchInput").value.toLowerCase();

  const results = premierLeagueTeams.filter(team =>
    team.team.name.toLowerCase().includes(name)
  );

  renderTeamSearch(results, (team) => {
    renderTeamDetails(team);
  });
};

// Fixtures
document.getElementById("loadFixtures").onclick = async () => {
  const fixtures = await fetchFixtures();
  renderFixtures(fixtures);
};


// Player Search
document.getElementById("searchPlayer").onclick = async () => {
  const name = document.getElementById("playerInput").value;
  const players = await fetchPlayer(name);
  renderPlayer(players);
};

// Load favorite on start
renderFavorite();


async function init() {
  const teams = await fetchTeams();

  premierLeagueTeams = teams;

  renderTeams(teams, (team) => {
    renderTeamDetails(team);
  });
  
}

init();