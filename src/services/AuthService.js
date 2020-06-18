import nookies from "nookies";
import axios from "axios";
/**
 * @description fetches user from jwt cookie
 * @param {object} ctx the next server context
 * @returns User if user is found by jwt token, or error if not.
 */
export const fetchUser = async (ctx) => {
  // this is just checking whether or not the ctx is coming from _app since ctx is actually nested on app
  const appCtx = ctx.ctx;
  let token = null;
  if (appCtx) token = nookies.get(appCtx).user_token;
  else token = nookies.get(ctx).user_token;
  if (token) {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const res = await axios.get(
        "https://order-task-be.herokuapp.com//users/me"
      );
      return { user: res.data };
    } catch (error) {
      console.log("error", error);
      // nookies.destroy('user_token');
      return error;
    }
  } else {
    return { error: { message: "No token found" } };
  }
};
