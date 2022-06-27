import { useStore } from "vuex";
import { useRouter } from "vue-router";

import AuthService from "../services/auth.service";

function useArcanaWallet() {
  const store = useStore();
  const router = useRouter();

  async function initWallet() {
    store.dispatch("showFullScreenLoader", "Initialising Arcana wallet...");

    // AUTH-4: Initialise the wallet using AuthService
    // After initialization, set a disconnect listener
    // On disconnect, clear store, route to login and perform a refresh
    // ...

    store.dispatch("hideFullScreenLoader");
  }

  async function isLoggedIn() {
    store.dispatch("showFullScreenLoader", "Checking login status...");
    // AUTH-5: Check if a user is logged in
    // ...

    store.dispatch("hideFullScreenLoader");
    return loginStatus;
  }

  async function requestSocialLogin(type) {
    // AUTH-6: Login user with selected social login type
    // ...
  }

  async function fetchUserDetails() {
    store.dispatch("showFullScreenLoader", "Fetching account details...");

    // AUTH-7: Fetch user details
    // ...

    store.dispatch("addUserInfo", JSON.parse(userInfo));

    // AUTH-8: Fetch user's wallet address
    // ...

    store.dispatch("addWalletInfo", { address: walletAddress });

    store.dispatch("hideFullScreenLoader");
  }

  async function logout() {
    // AUTH-9: Logout a user
    // ...
  }

  async function requestPublicKey(email) {
    // AUTH-10: Get public key associated with the email
    // ...
  }

  return {
    fetchUserDetails,
    initWallet,
    isLoggedIn,
    logout,
    requestPublicKey,
    requestSocialLogin,
  };
}

export default useArcanaWallet;
