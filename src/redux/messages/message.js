import axios from "axios";

const GET_GREETINGS = "GET_GREETINGS";
const base_url = "http://127.0.0.1:3001/messages";
const message = "";
export const getMessage = (message) => ({
  type: GET_GREETINGS,
  payload: message,
});

export const getMessages = () => (dispatch) => {
  console.log("asdasdasd");
  axios.get(base_url).then((result) => {
    console.log(result);
    dispatch(getMessage(result));
  });
};
const messagesReducer = (state = message, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
  //   console.log(action.payload);
  //   console.log(state);
};

export default messagesReducer;
