export const fetchShoppingCartItems = () => (
  $.ajax({
      method: "GET",
      url: "api/shopping_cart_items"
  })
);

export const fetchShoppingCartItem = id => (
  $.ajax({
      method: "GET",
      url: `api/shopping_cart_items/${id}`
  })
);

export const createShoppingCartItem = item => (
  $.ajax({
      method: "POST",
      url: 'api/shopping_cart_items',
      data: { item }
  })
);

export const updateShoppingCartItem = item => (
  $.ajax({
    method: "PATCH",
    url: `api/shopping_cart_items/${item.id}`,
    data: { item }
  })
);

export const deleteShoppingCartItem = id => (
  $.ajax({
    method: "DELETE",
    url: `api/shopping_cart_items/${id}`,
  })
);
