<template>
  <div class="len-toggle" @click="lenToggle" :class="lenlen">
    <div id="language-mode">
      <img src="../../assets/logos/eng-logo.png" alt="english" />
      <img
        :class="{ invisible: esp }"
        src="../../assets/logos/arg-logo.png"
        alt="espanol"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      esp: true,
      language: "es",
    };
  },
  methods: {
    es() {
      this.language = "es";
      this.esp = true;
      this.$emit("GetLanguageMode", this.language);
    },
    en() {
      this.language = "en";
      this.esp = false;
      this.$emit("GetLanguageMode", this.language);
    },
    lenToggle() {
      if (this.language === "es") {
        this.en();
      } else {
        this.es();
      }
    },
  },
  computed: {
    lenlen() {
      return this.language && "lang-toggled";
    },
  },
};
</script>

<style scoped>
#language-mode {
  width: 40px;
  height: 40px;
}
#language-mode img {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
}
.invisible {
  opacity: 0;
}
.len-toggle {
  position: relative;
  margin: 0.25rem;
  padding: 0;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  background-color: transparent;
  border: 1px solid var(--light-color);
  border-radius: 50%;
  outline: 0;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
}
</style>
