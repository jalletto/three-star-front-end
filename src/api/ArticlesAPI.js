
const URL = 'https://cors-anywhere.herokuapp.com/https://threestarapi.herokuapp.com/blog'

const fetchLatestArticles = () => {
  return fetch(`${URL}/`)
    .then(response => response.json())
}

const fetchArticleById = (id) => {
  return fetch(`${URL}/${id}`)
    .then(response => response.json())
}

const fetchArticlesBySection = (section, page=null) => {
  const next_page = page ? page : '1'
  return fetch(`${URL}/latest/${section}?page=${next_page}`)
    .then(response => response.json())
}


export default {
  fetchLatestArticles: fetchLatestArticles,
  fetchArticleById : fetchArticleById,
  fetchArticlesBySection : fetchArticlesBySection
}