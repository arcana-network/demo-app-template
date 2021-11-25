import { useStore } from "vuex";
import { Wallet } from "ethers";

import padPublicKey from "../utils/padPublicKey";

const ARCANA_APP_ID = import.meta.env.VITE_ARCANA_APP_ID;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// AUTH-1: Create an instance of Arcana AuthProvider.
// const authInstance = ...

function useArcanaAuth() {
  const store = useStore();

  function isLoggedIn() {
    // AUTH-2: Check if the user is already logged in.
    // ...
  }

  async function login() {
    // AUTH-3: Sign in a user.
    if (!isLoggedIn()) {
      store.dispatch("showLoader", "Logging in...");
      // AUTH-3a: If user does not have an active session, trigger the Google authentication process.
      // ...
    }

    store.dispatch(
      "showLoader",
      "Fetching keys and generating wallet address..."
    );

    // AUTH-3b: Fetch the user's information and save it.
    // const { userInfo, privateKey } = ...;
    // store.dispatch("addBasicDetails", {
    //   email: ...,
    //   profileImage: ...,
    //   givenName: ...
    // });

    // AUTH-3c: Fetch the user's public key and create a wallet.
    // const publicKey = ...;
    // const actualPublicKey = padPublicKey(publicKey);
    // const wallet = new Wallet(privateKey);
    // store.dispatch("addCryptoDetails", {
    //   walletAddress: ...,
    //   privateKey: ...,
    //   publicKey: ...,
    // });

    store.dispatch("hideLoader");
  }

  function handleRedirect() {
    // AUTH-4: Handle auth flow on the redirect page.
    // ...
  }

  async function logout() {
    // AUTH-5: Log a user out.
    // ...
    store.dispatch("clearStore");
  }

  return {
    handleRedirect,
    isLoggedIn,
    login,
    logout,
  };
}

export default useArcanaAuth;
