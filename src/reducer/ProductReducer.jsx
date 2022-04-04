
const checkCategories = (categories, category) => {
  if (categories.includes(category)) {
    return categories.filter((cat) => cat !== category);
  } else {
    return [...categories, category];
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "categories":
      return {
        ...state,
        categories: checkCategories(state.categories, action.payload),
      };
    case "Rating":
      return {
        ...state,
        rating: action.payload,
      };
    case "Sort":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "CLEAR":
      return {
        rating: "",
        sortBy: "",
        categories: [],
      };
    default:
      return state;
  }
};

export { reducer };
