import { gql } from "apollo-boost";

import { GET_CART_HIDDEN, GET_CART_ITEMS, GET_ITEM_COUNT } from "./querys";
import { addItemToCart, getCartItemCount } from "./cartUtils";

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }
  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });
      return !cartHidden;
    },

    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCart = addItemToCart(cartItems, item);
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCart },
      });
      cache.writeQuery({
        query: GET_ITEM_COUNT,
        data: { itemsCount: getCartItemCount(newCart) },
      });
      return newCart;
    },
  },
};