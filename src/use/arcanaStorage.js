import bytes from "bytes";
import { useStore } from "vuex";

import StorageService from "../services/storage.service";
import AuthService from "../services/auth.service";
import useArcanaWallet from "../use/arcanaWallet";
import useToast from "../use/toast";

const FILE_SIZE_LIMIT = bytes("100MB");

function useArcanaStorage() {
  const store = useStore();
  const { toastSuccess, toastError } = useToast();
  const { requestPublicKey } = useArcanaWallet();

  function initStorage() {
    // STORAGE-2: Initialize the storage instance
    // ...
  }

  async function fetchStorageLimits() {
    try {
      // STORAGE-3: Get the access object from storage instance
      // Then get upload limit and download limit using this access object
      // ...
      // const [storageUsed, totalStorage] = ...
      // const [bandwidthUsed, totalBandwidth] = ...

      store.dispatch("updateStorageLimits", {
        totalStorage,
        storageUsed,
      });
      store.dispatch("updateBandwidthLimits", {
        totalBandwidth,
        bandwidthUsed,
      });
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  }

  async function fetchMyFiles() {
    try {
      // STORAGE-4: Get files owned by the user from storage instance
      // ...

      store.dispatch("updateMyFiles", myFiles);
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  }

  async function fetchSharedFiles() {
    try {
      // STORAGE-5: Get files shared with the user from storage instance
      // ...

      store.dispatch("updateSharedWithMe", sharedFiles);
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  }

  async function upload(file) {
    if (file.size > FILE_SIZE_LIMIT) {
      toastError("You are not allowed to upload files bigger than 100MB.");
      throw new Error("File size exceeded maximum");
    }

    console.time("Upload");

    try {
      let uploadDate = new Date(),
        totalSize;

      store.dispatch("showInlineLoader", "Uploading file");

      // STORAGE-6: Upload a file
      // Get uploader object from storage instance
      // Upload a file and get the did
      // Handle progress, success and error events
      // ...
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Upload");
      store.dispatch("hideInlineLoader");
    }
  }

  async function download(file) {
    console.time("Download");

    try {
      store.dispatch("showInlineLoader", "Downloading file");

      // STORAGE-7: Download a file
      // Get downloader object from storage instance
      // Download a file
      // Handle progress and success events
      // ...
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Download");
      store.dispatch("hideInlineLoader");
    }
  }

  async function remove(file) {
    console.time("Delete");

    try {
      store.dispatch("showInlineLoader", "Deleting file");

      // STORAGE-8: Delete a file
      // Get access object from storage instance
      // Delete the file using access object
      // ...

      let myFiles = [...store.getters.myFiles];
      myFiles = myFiles.filter((myFile) => myFile.fileId !== file.fileId);
      store.dispatch("updateMyFiles", myFiles);

      fetchStorageLimits();
      toastSuccess("Delete success");
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Delete");
      store.dispatch("hideInlineLoader");
    }
  }

  async function share(file, email) {
    console.time("Share");

    try {
      store.dispatch("showInlineLoader", "Sharing file");

      // STORAGE-9: Share a file
      // Get public key of user using his email
      // Compute wallet address using public key
      // Get access object from storage instance and share a file to this address
      // ...

      toastSuccess(`Shared file successfully with ${email}`);
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Share");
      store.dispatch("hideInlineLoader");
    }
  }

  async function getSharedUsers(did) {
    try {
      store.dispatch("showInlineLoader", "Fetch shared users");

      // STORAGE-10: Get list of users, the file is shared with
      // ...

      return await access.getSharedUsers(did);
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      store.dispatch("hideInlineLoader");
    }
  }

  async function revoke(fileToRevoke, address) {
    try {
      store.dispatch("showInlineLoader", "Revoking file access");

      // STORAGE-11: Revoke access to a shared file
      // ...

      toastSuccess("File access revoked");
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Revoke");
      store.dispatch("hideInlineLoader");
    }
  }

  async function changeFileOwner(fileToTransfer, email) {
    console.time("Transfer");

    try {
      store.dispatch("showInlineLoader", "Transfering file");

      // STORAGE-12: Transfer ownership of the file
      // Get public key of user using his email
      // Compute wallet address using public key
      // Get access object from storage instance and
      // transfer ownership of this file to that address
      // ...

      let myFiles = [...store.getters.myFiles];
      myFiles = myFiles.filter((file) => file.did !== fileToTransfer.fileId);
      store.dispatch("updateMyFiles", myFiles);

      await fetchStorageLimits();

      toastSuccess(`Transferred file ownership to ${email}`);
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Transfer");
      store.dispatch("hideInlineLoader");
    }
  }

  return {
    changeFileOwner,
    download,
    fetchMyFiles,
    fetchSharedFiles,
    fetchStorageLimits,
    getSharedUsers,
    initStorage,
    remove,
    revoke,
    share,
    upload,
  };
}

export default useArcanaStorage;
