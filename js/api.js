const API_KEY = "764663c502ded1545bce13b9cef98916"; // 🔴 PUT YOUR API KEY HERE
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
    headers: { "x-apisports-key": API_KEY }
  });
  const data = await res.json();
  return data.response;
}

export async function fetchPlayer(name) {
  const res = await fetch(`${BASE_URL}/players?search=${name}&season=2023`, {
    headers: { "x-apisports-key": API_KEY }
  });
  const data = await res.json();
  return data.response;
}