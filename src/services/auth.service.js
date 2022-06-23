// AUTH-IMPORT: Import auth from window instead of npm
// ...

function createAuthService() {
  // AUTH-1: Create a new instance of Arcana AuthProvider.
  // ...

  async function init() {
    // AUTH-2: Initialize the wallet with App Mode (UI / NoUI).
    // ...
  }

  async function isLoggedIn() {
    // AUTH-3: Check if the user is already logged in.
    // ...
  }

  async function requestSocialLogin(type) {
    // AUTH-4: Sign in user with SSO with selected login type.
    // ...
  }

  async function requestUserInfo() {
    // AUTH-5: Fetch the logged in user's information.
    // ...
  }

  async function requestPublicKey(email) {
    // AUTH-6: Fetch public key for the email.
    // ...
  }

  async function logout() {
    // AUTH-7: Log a user out.
    // ...
  }

  async function requestWalletInfo() {
    // AUTH-8: Fetch all the available accounts from the wallet.
    // ...
  }

  function setHook(event, handler) {
    // AUTH-9: Listen to events from the wallet.
    // ...
  }

  return {
    computeAddress,
    init,
    isLoggedIn,
    logout,
    requestPublicKey,
    requestSocialLogin,
    requestUserInfo,
    requestWalletInfo,
    setHook,
  };
}

const AuthService = Object.freeze(createAuthService());

export default AuthService;
