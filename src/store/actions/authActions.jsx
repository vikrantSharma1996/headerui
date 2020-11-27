// import fbConfig from '../../components/config/fbConfig'

// export const signIn = (email, password, callback) => async dispatch => {
//   try {
//     fbConfig
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         dispatch({ type: "SIGNIN_SUCCESS" });
//         callback();
//       })
//       .catch(() => {
//         dispatch({
//           type: "SIGNIN_ERROR",
//           payload: "Invalid login credentials"
//         });
//       });
//   } catch (err) {
//     dispatch({ type: "SIGNIN_ERROR", payload: "Invalid login credentials" });
//   }
// };