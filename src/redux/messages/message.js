import axios from "axios";

const base_url = "http://127.0.0.1:3000/message";
const GET_MESSAGES = "GET_MESSAGES";

const getMessage = (message) => ({
  type: GET_MESSAGES,
  payload: message,
});

const getMessages = () => (dispatch) => {
  axios.get(base_url).then((result) => {
    const greeting = result.data;
    dispatch(getMessage(greeting));
  });
};
const messagesReducer = (state = "", action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

export default messagesReducer;
export { getMessage, getMessages };
