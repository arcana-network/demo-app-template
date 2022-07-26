import bytes from "bytes";
import { useStore } from "vuex";

import StorageService from "../services/storage.service";
import AuthService from "../services/auth.service";
import useArcanaAuth from "../use/arcanaAuth";
import useToast from "../use/toast";

const FILE_SIZE_LIMIT = bytes("100MB");

const FIX_ME = null;

function useArcanaStorage() {
  const store = useStore();
  const { toastSuccess, toastError } = useToast();
  const { requestPublicKey } = useArcanaAuth();

  function initStorage() {
    // STORAGE-2: Initialize the storage instance
    // ...
  }

  async function fetchStorageLimits() {
    const storage = StorageService.getInstance();

    try {
      // STORAGE-3: Fetch storage limits
      // a) Get the access object from storage instance
      const access = FIX_ME;
      // b) Get upload limit and download limit using this access object
      // ...
      const [storageUsed, totalStorage] = [FIX_ME, FIX_ME];
      const [bandwidthUsed, totalBandwidth] = [FIX_ME, FIX_ME];

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
    const storage = StorageService.getInstance();

    try {
      // STORAGE-4: Get files owned by the user from storage instance
      const myFiles = FIX_ME;

      store.dispatch("updateMyFiles", myFiles);
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  }

  async function fetchSharedFiles() {
    const storage = StorageService.getInstance();

    try {
      // STORAGE-5: Get files shared with the user from storage instance
      const sharedFiles = FIX_ME;

      store.dispatch("updateSharedWithMe", sharedFiles);
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  }

  async function upload(file) {
    const storage = StorageService.getInstance();

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
      // a) Get uploader object from storage instance
      const uploader = FIX_ME;
      // b) Handle progress, success and error events
      // c) Upload a file and get the did
      const did = FIX_ME;

      function onProgress(uploaded, total) {
        store.dispatch(
          "showInlineLoader",
          `Uploaded ${bytes(uploaded)} / ${bytes(total)}`
        );
        totalSize = total;
      }

      function onError(error) {
        console.error(error);
        toastError(error.message);
        store.dispatch("hideInlineLoader");
      }

      function onSuccess() {
        fetchStorageLimits();
        toastSuccess("Upload success");
        store.dispatch("addMyFiles", {
          did,
          createdAt: uploadDate,
          size: totalSize,
        });
        store.dispatch("hideInlineLoader");
      }
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Upload");
      store.dispatch("hideInlineLoader");
    }
  }

  async function download(file) {
    const storage = StorageService.getInstance();

    console.time("Download");

    try {
      store.dispatch("showInlineLoader", "Downloading file");

      // STORAGE-7: Download a file
      // a) Get downloader object from storage instance
      const downloader = FIX_ME;
      // b) Handle progress and success events
      // c) Download a file

      function onProgress(downloaded, total) {
        store.dispatch(
          "showInlineLoader",
          `Downloaded ${bytes(downloaded)} / ${bytes(total)}`
        );
      }

      function onSuccess() {
        fetchStorageLimits();
        toastSuccess("Download success");
        store.dispatch("hideInlineLoader");
      }
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      console.timeEnd("Download");
      store.dispatch("hideInlineLoader");
    }
  }

  async function remove(file) {
    const storage = StorageService.getInstance();

    console.time("Delete");

    try {
      store.dispatch("showInlineLoader", "Deleting file");

      // STORAGE-8: Delete a file
      // a) Get access object from storage instance
      const access = FIX_ME;
      // b) Delete the file using access object
      // ...

      store.dispatch("removeMyFiles", file);
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
    const storage = StorageService.getInstance();

    console.time("Share");

    try {
      store.dispatch("showInlineLoader", "Sharing file");

      // STORAGE-9: Share a file
      // a) Get public key of user using his email
      const publicKey = FIX_ME;
      // b) Compute wallet address using public key
      const address = FIX_ME;
      // c) Get access object from storage instance
      const access = FIX_ME;
      // d) Share a file to this address
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
    const storage = StorageService.getInstance();

    try {
      store.dispatch("showInlineLoader", "Fetch shared users");

      // STORAGE-10: Get list of users, the file is shared with
      // a) Get access object from storage instance
      const access = FIX_ME;
      // b) Get shared users
      const sharedUsers = FIX_ME;

      return sharedUsers;
    } catch (error) {
      console.error(error);
      toastError(error.message);
    } finally {
      store.dispatch("hideInlineLoader");
    }
  }

  async function revoke(fileToRevoke, address) {
    const storage = StorageService.getInstance();

    try {
      store.dispatch("showInlineLoader", "Revoking file access");

      // STORAGE-11: Revoke access to a shared file
      // a) Get access object from storage instance
      const access = FIX_ME;
      // b) Revoke share access
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
    const storage = StorageService.getInstance();

    console.time("Transfer");

    try {
      store.dispatch("showInlineLoader", "Transfering file");

      // STORAGE-12: Transfer ownership of the file
      // a) Get public key of user using his email
      const publicKey = FIX_ME;
      // b) Compute wallet address using public key
      const address = FIX_ME;
      // c) Get access object from storage instance and
      const access = FIX_ME;
      // d) Transfer ownership of this file to that address
      // ...

      store.dispatch("removeMyFiles", fileToTransfer);
      fetchStorageLimits();
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
