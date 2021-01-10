function fetchImage(keyWord, page) {
  return fetch(
    `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=19008570-42b7cc415e1b0453677c4c4a2&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('No response from server'));
  });
}

const api = { fetchImage };

export default api;
