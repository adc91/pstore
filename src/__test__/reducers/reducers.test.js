import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  const payload = ProductMock;
  const initialState = {
    cart: [],
  };
  const action = action => ({
    type: action,
    payload,
  });

  test('Return Initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action('ADD_TO_CART'))).toEqual(expected);
  });

  test('REMOVE_FROM_CART', () => {
    const expected = {
      cart: [],
    };
    expect(reducer(initialState, action('REMOVE_FROM_CART'))).toEqual(expected);
  });
});
