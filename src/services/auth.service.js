// AUTH-IMPORT: Import Arcana auth
// ...

function createAuthService() {
  // AUTH-1: Create a new instance of Arcana AuthProvider.
  // const wallet = ...

  async function init() {
    // AUTH-2: Initialize the wallet with App Mode (UI / NoUI).
    // ...
  }

  function setHook(event, handler) {
    // AUTH-3: Listen to events from the wallet.
    // ...
    const provider = wallet.provider;
    provider.on(event, handler);
  }

  function getInstance() {
    return wallet;
  }

  return {
    init,
    setHook,
    getInstance,
    computeAddress,
  };
}

const AuthService = Object.freeze(createAuthService());

export default AuthService;
