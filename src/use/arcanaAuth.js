import { useStore } from "vuex";
import { useRouter } from "vue-router";

import AuthService from "../services/auth.service";

const FIX_ME = null;

function useArcanaAuth() {
  const store = useStore();
  const router = useRouter();

  const auth = AuthService.getInstance();

  async function initAuth() {
    store.dispatch("showFullScreenLoader", "Initialising Arcana auth...");

    // AUTH-2: Initialise and configure the auth service.
    // a) Initialise the auth service
    // b) Set a disconnect listener. On disconnect, clear store,
    //    route to login and perform a refresh
    // ...

    store.dispatch("hideFullScreenLoader");
  }

  async function isLoggedIn() {
    store.dispatch("showFullScreenLoader", "Checking login status...");

    // AUTH-3: Check if a user is logged in
    const loginStatus = FIX_ME;

    store.dispatch("hideFullScreenLoader");
    return loginStatus;
  }

  async function requestSocialLogin(type) {
    // AUTH-4: Login user with selected social login type
    // ...
  }

  async function fetchUserDetails() {
    store.dispatch("showFullScreenLoader", "Fetching account details...");

    // AUTH-5: Fetch user details
    const userInfo = FIX_ME;

    store.dispatch("addUserInfo", JSON.parse(userInfo));

    // AUTH-6: Fetch user's wallet address
    const walletAddress = FIX_ME;

    store.dispatch("addWalletInfo", { address: walletAddress });

    store.dispatch("hideFullScreenLoader");
  }

  async function logout() {
    // AUTH-7: Logout a user
    // ...
  }

  async function requestPublicKey(email) {
    // AUTH-8: Get public key associated with the email
    // ...
  }

  return {
    fetchUserDetails,
    initAuth,
    isLoggedIn,
    logout,
    requestPublicKey,
    requestSocialLogin,
  };
}

export default useArcanaAuth;
