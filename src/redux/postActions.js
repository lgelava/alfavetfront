export const actionTypes = {
  ADD_POST: "ADD_POST",
  GET_POSTS_HANDLER: "GET_POSTS_HANDLER",
  PAGE_CLICK: "PAGE_CLICK",
  DELETE_POST: "DELETE_POST",
  SUBMIT_EDIT_POST: "SUMBIT_EDIT_POST",
};

export const addPost = (newPost) => ({
  type: actionTypes.ADD_POST,
  newPost,
});

export const getPostsHandler = (postList) => ({
  type: actionTypes.GET_POSTS_HANDLER,
  postList,
});

export const deletePost = (id) => ({
  type: actionTypes.DELETE_POST,
  id,
});

export const pageClick = (pageNumber) => ({
  type: actionTypes.PAGE_CLICK,
  pageNumber,
});

export const submitEditPost = (id, title, text, images) => ({
  type: actionTypes.SUBMIT_EDIT_POST,
  id,
  title,
  text,
  images,
});
