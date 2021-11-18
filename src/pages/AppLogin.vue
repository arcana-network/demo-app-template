<template>
  <div class="bg-white absolute login-container p-10 text-center">
    <img
      src="@/assets/vertical-light.svg"
      style="height: 120px; display: inline"
    />
    <div class="inline-block mt-12">
      By clicking on signin with google, you agree to Arcana Network's
      <a href="/" style="color: #058aff; text-decoration: none"> Privacy </a>
      &
      <a href="/" style="color: #058aff; text-decoration: none"> Terms </a>
    </div>
    <div
      id="google-signin-button"
      @click.stop="overrideClick"
      class="font-ubuntu"
    ></div>
    <a class="google-button" @click.stop="onSignInClick">Sign In with Google</a>
  </div>
</template>

<style scoped>
#google-signin-button {
  position: relative;
  margin: 0 auto;
  margin-top: 2rem;
  width: 240px;
}
.login-container {
  min-width: 320px;
  max-width: 480px;
  width: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.upload-fab {
  background-color: #058aff;
  color: white;
  font-weight: 500;
  box-shadow: 0px 3px 20px #058aff66;
}

.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
    center/15000%;
}
.ripple:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}

@media screen and (max-width: 1024px) {
  .files-container {
    width: calc(100% - 1.5rem);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}

.google-button {
  padding: 0.8em 1.2em;
  border: 1px solid rgb(5, 138, 255);
  background-color: rgb(5, 138, 255);
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin: 1em 0;
  white-space: nowrap;
  font-weight: 800;
  font-size: 1.2em;
}
</style>

<script>
import { onBeforeMount, inject } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Wallet } from "ethers"; // Required for calculation of wallet address from private key
import { useFileMixin } from "../mixins/file.mixin";

export default {
  name: "AppLogin",
  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = inject("$toast");
    const fileMixin = useFileMixin(toast);

    onBeforeMount(() => {
      document.title = "Login | Arcana Demo";
    });

    async function onSignInClick() {
      try {
        // Start loading animation with a message
        store.dispatch("showLoader", "Fetching keys and wallet address...");
        // Mocking timeout. Replace this with actual login functionality
        setTimeout(() => {
          // const wallet = new Wallet(privateKey); // To generate wallet address from private key

          // Stores all the basic user details from google auth to vuex. Replace mock values with actual details
          store.dispatch("addBasicDetails", {
            email: "john-doe@gmail.com", // Replace with actual email
            profileImage: "", // Replace with actual image url
            givenName: "John Doe", // Replace with actual name
          });

          // Calculation of public key
          // const actualPublicKey =
          //   "0x04" + publicKey.X.padStart(64, "0") + publicKey.Y.padStart(64, "0");

          // Stores all the crypto details to vuex
          store
            .dispatch("addCryptoDetails", {
              walletAddress: "", // Actual wallet address calulated at line 110
              privateKey: "<private-key-here>", // Actual private key received from login sdk
              publicKey: "<public-key-here>", // Actual public key received from login sdk
            })
            .then(async () => {
              // Wait till actions are dispatched to vuex store
              toast("Login Success", {
                styles: {
                  backgroundColor: "green",
                },
                type: "success",
              });

              // Route to My Files and then hide loading animation
              router
                .replace({ name: "My Files" })
                .then(() => store.dispatch("hideLoader"));
            });
        }, 2000);
      } catch (e) {
        // Catch errors and then hide loading animations
        toast("Something went wrong", {
          styles: {
            backgroundColor: "red",
          },
          type: "error",
        });
        console.error("error", e);
        store.dispatch("hideLoader");
      }
    }

    return {
      onSignInClick,
    };
  },
};
</script>
