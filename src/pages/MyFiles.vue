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
      <upload-fab />
      <files-list :files="files" pageTitle="My Files" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import UploadFab from "../components/UploadFab.vue";
import UserProfile from "../components/UserProfile.vue";
import FilesList from "../components/FilesList.vue";
import { useStore } from "vuex";
import { useFileMixin } from "../mixins/file.mixin";

export default {
  name: "MyFiles",
  components: { UploadFab, UserProfile, FilesList },
  setup() {
    const store = useStore();
    const fileMixin = useFileMixin();

    // Get files directly from store. No need to call api here
    let files = computed(() => {
      return store.getters.myFiles;
    });

    onMounted(async () => {
      document.title = "My Files | Arcana Demo";
      store.dispatch("showLoader", "Fetching uploaded files...");
      // Update app level limits for storage and bandwidth
      await fileMixin.updateLimits();
      let myfiles = []; // Add sdk function to fetch user uploaded files
      myfiles = myfiles ? myfiles : []; // Reassign blank array in case of undefined

      // Adding file id in list as it is needed for rendering FilesList component
      // Update files in vuex store
      store.dispatch(
        "updateMyFiles",
        myfiles.map((d) => {
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

