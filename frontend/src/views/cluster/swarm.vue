<template>
  <div class="temp-container">
    <p class="warn-content">
      即将来临
    </p>
  </div>
</template>

<script>
export default {
  name: 'i18n',
  computed: {
    lang: {
      get() {
        return this.$store.state.app.language
      },
      set(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.temp-container {
  margin: 10px 20px 0;
  overflow: hidden;
}
.warn-content {
  text-align: center;
  color: #42b983;
  font-weight: 600;
}
</style>
