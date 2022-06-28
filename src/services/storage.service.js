// STORAGE-IMPORT : Import Arcana storage standalone
// ...

function createStorageService() {
  let storage;

  async function init() {
    if (!storage) {
      // STORAGE-1: Create an instance of Arcana StorageProvider.
      // storage = ...
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
