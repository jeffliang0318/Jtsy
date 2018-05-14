export const fetchProducts = () => (
  $.ajax({
      method: "GET",
      url: "api/products"
  })
);

export const fetchProduct = id => (
  $.ajax({
      method: "GET",
      url: `api/products/${id}`
  })
);

export const fetchCategory = category => (
  $.ajax({
      method: "GET",
      url: `api/categories/${category}`
  })
);

export const createProduct = product => (
  $.ajax({
      method: "POST",
      url: 'api/products',
      data: { product }
  })
);

export const updateProduct = product => (
  $.ajax({
    method: "PATCH",
    url: `api/products/${product.id}`,
    data: { product }
  })
);

export const deleteProduct = id => (
  $.ajax({
    method: "DELETE",
    url: `api/products/${id}`,
  })
);
