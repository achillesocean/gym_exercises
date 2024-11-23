export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '31d777e36amsh4239aea759378e5p17465djsnb42101517fb6',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '31d777e36amsh4239aea759378e5p17465djsnb42101517fb6',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

// make connection with rapid api
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json()
  return data
}