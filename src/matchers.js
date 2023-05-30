export default function sortPlayer(players) {
  players.sort((a, b) => (a.health > b.health ? -1 : 1));
  return players;
}
