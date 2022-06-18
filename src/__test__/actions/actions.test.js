import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  const payload = ProductMock;
  const expected = action => ({
    type: action,
    payload,
  });

  test('addToCartAction', () => {
    expect(actions.addToCart(payload)).toEqual(expected('ADD_TO_CART'));
  });

  test('removeFromCartAction', () => {
    expect(actions.removeFromCart(payload)).toEqual(
      expected('REMOVE_FROM_CART')
    );
  });
});
