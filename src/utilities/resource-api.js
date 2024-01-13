import sendRequest from './send-request';

  const BASE_URL = '/api/resource';

  // Retrieve an unpaid order for the logged in user
  export function getResource() {
    return sendRequest(`${BASE_URL}/cart`);
  }

  // Add an item to the cart
  export function addResourceToCart(itemId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/resources/${resourceId}`, 'POST');
  }

  // Update the item's qty in the cart
  // Will add the item to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  export function setResourceQtyInCart(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { resourceId, newQty });
  }

  // Updates the order's (cart's) isPaid property to true
  export function checkout() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
  }

  // Return all paid orders for the logged in user
  export function getResourceHistory() {
    return sendRequest(`${BASE_URL}/history`);
  }