const API_KEY = "764663c502ded1545bce13b9cef98916"; 
const BASE_URL = "https://v3.football.api-sports.io";

export async function fetchTeams() {
  const res = await fetch(`${BASE_URL}/teams?league=39&season=2023`, {
    headers: { "x-apisports-key": API_KEY }
  });
  const data = await res.json();
  return data.response;
}


export async function fetchFixtures() {
  const res = await fetch(`${BASE_URL}/fixtures?league=39&season=2023`, {
    headers:  { "x-apisports-key": API_KEY }
  });
  const data = await res.json();
  return data.response;
}


export async function fetchPlayer(name) {
  const res = await fetch(`${BASE_URL}/players?search=${name}&season=2023&league=39`, {
    headers: { "x-apisports-key": API_KEY }
  });
  const data = await res.json();
  return data.response || [];
}

export async function searchTeamByName(name) {
  const res = await fetch(`${BASE_URL}/teams?search=${name}`, {
    headers: { "x-apisports-key": API_KEY }
  });
  const data = await res.json();



// only display premier league teams

  const filtered = data.response.filter(team =>{
    return team.league && team.league.id ===39;
  });
  
  return filtered;
}