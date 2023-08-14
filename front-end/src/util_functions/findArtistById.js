export default function findArtistById(array, idToFind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === idToFind) {
      return array[i];
    }
    return null;
  }
}
