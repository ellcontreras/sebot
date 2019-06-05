<template>
  <div class="columns">
    <Chat class="column"/>
    <div class="column">
      <About/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from "@/components/Chat.vue";
import About from "@/components/About.vue";

export default {
  name: "home",
  components: {
    Chat,
    About
  }
};
</script>
