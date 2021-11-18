<template>
  <div
    class="
      bg-white
      files-container
      fixed
      right-3
      top-16
      lg:top-4
      overflow-y-auto
    "
  >
    <div id="my-files-container" class="transition-fade">
      <user-profile />
      <files-list :files="files" pageTitle="Shared With Me" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "@vue/runtime-core";
import UserProfile from "../components/UserProfile.vue";
import FilesList from "../components/FilesList.vue";
import { useStore } from "vuex";

export default {
  name: "SharedWithMe",
  components: { UserProfile, FilesList },
  setup() {
    const store = useStore();
    // Get files from store
    let files = computed(() => {
      return store.getters.sharedWithMe;
    });

    onMounted(async () => {
      document.title = "Shared With Me | Arcana Demo";
      store.dispatch("showLoader", "Fetching shared files...");
      // Need to call shared with me api here to update it once mounted
      let sharedFiles = [];
      // Update the store with new shared with me files list
      store.dispatch(
        "updateSharedWithMe",
        // Adding file id in list as it is needed for rendering FilesList component
        sharedFiles.map((d) => {
          d["fileId"] = d["did"];
          return d;
        })
      );
      store.dispatch("hideLoader");
    });

    return {
      files,
    };
  },
};
</script>
