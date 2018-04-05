export const fetchProducts = data => (
  $.ajax({
      method: "GET",
      url: "api/products",
      data
  })
);

export const fetchProduct = id => (
  $.ajax({
      method: "GET",
      url: `api/products/${id}`
  })
);

export const createProduct = product => (
  $.ajax({
      method: "POST",
      url: `api/products`,
      data: { product }
  })
);
