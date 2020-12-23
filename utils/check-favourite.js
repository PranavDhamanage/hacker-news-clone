export default function checkFavourite(favourites, story) {
  return favourites.some((favourite) => {
    return favourite.id === story.id;
  });
}
