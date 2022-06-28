// AUTH-IMPORT: Import Arcana auth
// ...

const FIX_ME = null;

function createAuthService() {
  // AUTH-1: Create a new instance of Arcana AuthProvider.
  const auth = FIX_ME;

  function getInstance() {
    return auth;
  }

  return { getInstance };
}

const AuthService = Object.freeze(createAuthService());

export default AuthService;
