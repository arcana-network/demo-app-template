import { useStore } from "vuex";
import bytes from "bytes";

const successToast = {
  styles: {
    backgroundColor: "green",
  },
  type: "success",
};

const errorToast = {
  styles: {
    backgroundColor: "red",
  },
  type: "error",
};

const NO_SPACE = "No space left for user";
const UNAUTHORIZED = "UNAUTHORIZED";

// Function takes toast as parameter to render toast messages when needed
/**
 *
 * @param {any} toast
 */
export function useFileMixin(toast) {
  const store = useStore();

  /**
   *
   * @returns {{bandwidthUsed: Number, totalBandwidth: Number, storageUsed: Number, totalStorage: Number}}
   */
  async function updateLimits() {
    // Fetch storage and bandwidth limits from api
    const [storageUsed, totalStorage] = [0, 2097152]; // Api instead of [0,0]
    const [bandwidthUsed, totalBandwidth] = [0, 2097152]; // Api instead of [0,0]

    // Update store for storage and bandwidth limits
    store.dispatch("updateStorage", {
      totalStorage,
      storageUsed,
    });
    store.dispatch("updateBandwidth", {
      totalBandwidth,
      bandwidthUsed,
    });

    return {
      bandwidthUsed,
      totalBandwidth,
      storageUsed,
      totalStorage,
    };
  }

  /**
   *
   * @param {{fileId: String, name: String, uploaded_on: String|Date}} file
   * @returns {void}
   */
  async function download(file) {
    // Show loader before starting download
    store.dispatch(
      "showLoader",
      "Downloading chunks from distributed storage..."
    );

    let did = file.fileId;
    // Need this calculation in case did misses 0x at the start
    did = did.substring(0, 2) !== "0x" ? "0x" + did : did;

    // Call download api to actually start downloading the file

    //

    // HANDLE ERRORS GRACEFULLY
    // console.error(error);
    // if (error.message === NO_SPACE) {
    //   toast(
    //     "Download failed. Bandwidth limit exceeded. Upgrade your account to continue",
    //     errorToast
    //   );
    //   store.dispatch("hideLoader");
    // } else if (error.code === UNAUTHORIZED) {
    //   toast(
    //     "Seems like you don't have access to download this file",
    //     errorToast
    //   );
    //   store.dispatch("hideLoader");
    // } else {
    //   toast("Something went wrong. Try again", errorToast);
    //   store.dispatch("hideLoader");
    // }

    // Update limits on success
    updateLimits();
    // Show toast message
    toast("All chunks downloaded", successToast);
    toast(
      "Transaction successfully updated in arcana network's blockchain",
      successToast
    );
    store.dispatch("hideLoader");

    // Show download progress message on loading screen
    // store.dispatch("showLoader", `Completed ${bytes(a)} out of ${bytes(b)}`);
  }

  /**
   *
   * @param {{fileId: String, name: String, uploaded_on: String|Date}} fileToShare
   * @param {String} email
   * @returns {void}
   */
  async function share(fileToShare, email) {
    store.dispatch("showLoader", "Sharing file...");
    try {
      // Fetch public key of the recipient to share file with

      //
      store.dispatch(
        "showLoader",
        "Encrypting file data with recipient's public key......"
      );

      // Calculation of public key
      // const actualPublicKey =
      //   "0x04" + publicKey.X.padStart(64, "0") + publicKey.Y.padStart(64, "0");

      let did = fileToShare.fileId;
      // Need this calculation in case did misses 0x at the start
      did = did.substring(0, 2) != "0x" ? "0x" + did : did;

      store.dispatch("showLoader", `Sharing file with ${email}`);
      // Share file with recipient via api

      //
      toast(`Shared file successfully with ${email}`, successToast);
      store.dispatch("hideLoader");
    } catch (e) {
      // Handle errors
      console.error(e);
      toast("Something went wrong. Try again", errorToast);
      store.dispatch("hideLoader");
    }
  }

  /**
   *
   * @param {{fileId: String, name: String, uploaded_on: String|Date}} fileToDelete
   * @returns {void}
   */
  async function remove(fileToDelete) {
    store.dispatch("showLoader", "Deleting file...");
    try {
      let did = fileToDelete.fileId;
      // Need this calculation in case did misses 0x at the start
      did = did.substring(0, 2) != "0x" ? "0x" + did : did;

      // Call delete api

      //

      // Updating limits after delete
      updateLimits();

      // Updating store after file delete
      let myFiles = [...store.getters.myFiles];
      myFiles = myFiles.filter((file) => file.fileId !== fileToDelete.fileId);
      store.dispatch("updateMyFiles", myFiles);

      toast(`File Deleted`, successToast);
      store.dispatch("hideLoader");
    } catch (e) {
      // Error handling
      console.error(e);
      toast("Something went wrong. Try again", errorToast);
      store.dispatch("hideLoader");
    }
  }

  /**
   *
   * @param {File} fileToUpload
   * @returns {void}
   */
  async function upload(fileToUpload) {
    try {
      store.dispatch("showLoader", "Encrypting file...");
      store.dispatch("showLoader", "Uploading file to distributed storage...");
      let uploadDate, totalSize, did;

      uploadDate = new Date();

      // Start upload via api

      //

      // did = fileDid;

      // HANDLE ERRORS
      // console.error(error);
      // if (error.message === NO_SPACE) {
      //   toast(
      //     "Upload failed. Storage limit exceeded. Upgrade your account to continue",
      //     errorToast
      //   );
      //   store.dispatch("hideLoader");
      // } else if (error.code === UNAUTHORIZED) {
      //   toast("Upload failed. Kindly login and try again", errorToast);
      //   store.dispatch("hideLoader");
      // } else {
      //   toast("Something went wrong. Try again", errorToast);
      //   store.dispatch("hideLoader");
      // }

      // On upload progress
      // store.dispatch(
      //   "showLoader",
      //   `Uploaded ${bytes(uploaded)} out of ${bytes(total)}`
      // );
      // totalSize = total;

      // On upload success
      //Update limits
      updateLimits();
      toast("Upload Success", successToast);
      toast(
        "Transaction successfully updated in arcana network's blockchain",
        successToast
      );
      // Update store
      let myFiles = [...store.getters.myFiles];
      myFiles.push({
        fileId: did,
        did,
        createdAt: uploadDate,
        size: totalSize,
      });
      store.dispatch("updateMyFiles", myFiles);
      store.dispatch("hideLoader");

      // On upload error
      // console.error("Error caught", err);
      // toast("Something went wrong. Try again", errorToast);
      // store.dispatch("hideLoader");
    } catch (e) {
      // Handle unknown errors
      console.error(e);
      toast("Something went wrong. Try again", errorToast);
      store.dispatch("hideLoader");
    }
  }

  return {
    download,
    remove,
    upload,
    share,
    updateLimits,
  };
}
