export const ProductApi = {
  getAll: () => {
    return fetch("http://localhost:3001/api/products", {
      headers: {
        Authorization: "Bearer "
      }
    }).then(res => res.json())
  }
}
