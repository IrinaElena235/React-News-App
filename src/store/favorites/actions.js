export function addToFavorites(newsDetails) {
    return {
      type: "ADD_TO_FAVORITES",
      payload: newsDetails,
    };
  }
  
  export function removeFromFavorites(newsId) {
    return {
      type: "REMOVE_FROM_FAVORITES",
      payload: newsId,
    };
  }