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

  async function getUploadLimit() {
    // STORAGE-2: Fetch Upload limits for the user.
    // ...
  }

  async function getDownloadLimit() {
    // STORAGE-3: Fetch Download limits for the user.
    // ...
  }

  async function myFiles() {
    // STORAGE-4: Fetch user's uploaded files.
    // ...
  }

  async function sharedFiles() {
    // STORAGE-5: Fetch files shared with the user.
    // ...
  }

  async function upload(fileBlob, { onSuccess, onError, onProgress }) {
    // STORAGE-6: Upload a file and return file did.
    // ...
  }

  async function download(fileDid, { onSuccess, onProgress }) {
    // STORAGE-7: Download a file.
    // ...
  }

  async function remove(fileDid) {
    // STORAGE-8: Delete a file.
    // ...
  }

  async function share(fileDid, address) {
    // STORAGE-9: Share a file.
    // ...
  }

  async function getSharedUsers(fileDid) {
    // STORAGE-10: Fetch list of user addresses a particular file is shared with.
    // ...
  }

  async function revoke(fileDid, address) {
    // STORAGE-11: Revoke access to a shared file.
    // ...
  }

  async function changeFileOwner(fileDid, address) {
    // STORAGE-12: Transfer ownership of a file.
    // ...
  }

  return {
    changeFileOwner,
    download,
    getDownloadLimit,
    getSharedUsers,
    getUploadLimit,
    init,
    myFiles,
    remove,
    revoke,
    share,
    sharedFiles,
    upload,
  };
}

const StorageService = Object.freeze(createStorageService());

export default StorageService;
