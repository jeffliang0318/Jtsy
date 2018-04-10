export const fetchShoppingCarts = () => (
  $.ajax({
      method: "GET",
      url: "api/shopping_cart_items"
  })
);

export const fetchShoppingCart = id => (
  $.ajax({
      method: "GET",
      url: `api/shopping_cart_items/${id}`
  })
);

export const createShoppingCart = id => (
  $.ajax({
      method: "POST",
      url: 'api/shopping_cart_items',
      data: { id }
  })
);

export const updateShoppingCart = cart => (
  $.ajax({
    method: "PATCH",
    url: `api/shopping_cart_items/${cart.id}`,
    data: { cart }
  })
);
