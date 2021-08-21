import { actionTypes } from "./postActions";

const initialState = {
  posts: [],
  currentPage: 1,
  pageCount: 1,
  products: [],
};

const reducer = (state = initialState, action) => {
  const { posts, products } = state;

  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...posts, action.newPost],
      };

    case "GET_POSTS_HANDLER":
      return {
        ...state,
        posts: action.postList,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: posts.filter((item) => item._id !== action.id),
      };
    case "SUBMIT_EDIT_POST":
      return {
        ...state,
        posts: posts.map((el) =>
          el._id === action.id
            ? {
                ...el,
                title: action.title,
                text: action.text,
                images: action.images,
              }
            : el
        ),
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...products, action.newProduct],
      };

    case "GET_PRODUCTS_HANDLER":
      return {
        ...state,
        products: action.productList,
      };
    case actionTypes.PAGE_CLICK:
      return {
        ...state,
        currentPage: action.pageNumber,
        pageCount: action.pageNumber,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: products.filter((item) => item._id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
