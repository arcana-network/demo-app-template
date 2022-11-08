// STORAGE-IMPORT : Import Arcana storage standalone
// ...

const FIX_ME = null;

function createStorageService() {
  let storage;

  async function init() {
    if (!storage) {
      // STORAGE-1: Create an instance of Arcana StorageProvider.
      storage = FIX_ME;
    }
  }

  function getInstance() {
    return storage;
  }

  return {
    init,
    getInstance,
  };
}

const StorageService = Object.freeze(createStorageService());

export default StorageService;
