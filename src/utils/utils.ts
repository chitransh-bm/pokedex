export function getImageById(id:any) {
  id = addPad(id);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}

export function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function addPad(id:any) {
  return id.toString().padStart(3, "0");
}
