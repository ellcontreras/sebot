<template>
  <div class="input-message">
    <input
      type="text"
      class="input"
      v-model="message"
      placeholder="Cuentanos tu día..."
      style="width: 90%!important"
    >
    <button class="button is-primary" style="width: 10% !important;" @click="addMessage">Enviar</button>
  </div>
</template>

<script>
export default {
  name: "InputMessage",
  data: () => ({
    message: ""
  }),
  methods: {
    addMessage() {
      this.$store.dispatch("addMessage", {
        text: this.message,
        who: "mine"
      });

      this.$axios.post("http://localhost:5000", {
        message: this.message,
      }).then(res => {
          console.log(res);
          this.$store.dispatch("addMessage", {
              text: res.data,
              who: "bot"
          });
      })

      this.message = "";
    }
  }
};
</script>

<style scoped>
.input {
  border-radius: 8px;
}

.input-message {
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>

