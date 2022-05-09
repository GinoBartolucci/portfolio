<template>
  <div class="mode-toggle" @click="modeToggle" :class="darkDark">
    <div class="toggle">
      <div id="dark-mode" type="checkbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    }
  },

  methods: {
    dark() {
      this.darkMode = true;
      this.$emit('GetDarkMode',this.darkMode);
    },

    light() {
      this.darkMode = false;
      this.$emit('GetDarkMode', this.darkMode)
    },

    modeToggle() {
      if (
        this.darkMode
      ) {
        this.light();
      } else {
        this.dark();
      }
    },
  },

  computed: {
    darkDark() {
      return this.darkMode && "darkmode-toggled";
    },
  },
};
</script>

<style>
.mode-toggle {
  position: sticky;
top: 10px;
box-sizing:border-box;
margin-left: calc(100% - 44px);
  padding: 0;
  width: 44px;
  height: 24px;
  min-width: 36px;
  min-height: 20px;
  background-color: #262626;
  border: 0;
  border-radius: 24px;
  outline: 0;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  appearance: none;
  transition: background-color 0.5s ease;
}
.mode-toggle .toggle {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid transparent;
  box-shadow: inset 0 0 0 2px #a5abba;
  overflow: hidden;
  transition: transform 0.5s ease;
}
.mode-toggle .toggle #dark-mode {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.mode-toggle .toggle #dark-mode:before {
  content: "";
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  float: left;
  background-color: #a5abba;
  transition: border-radius 0.5s ease, width 0.5s ease, height 0.5s ease,
    left 0.5s ease, transform 0.5s ease;
}
.dark-mode .mode-toggle {
  background-color: #333333;
}
.dark-mode .mode-toggle .toggle {
  transform: translateX(19px);
}
.dark-mode .mode-toggle .toggle #dark-mode:before {
  border-radius: 50%;
  width: 150%;
  height: 85%;
  left: 40%;
  transform: translate(-10%, -40%), rotate(-35deg);
}
</style>
