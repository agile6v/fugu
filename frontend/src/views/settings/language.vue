<template>
  <div>
    <el-card class="box-card" style="margin-top:40px;">
      <div slot="header" class="clearfix">
        <svg-icon icon-class="international" />
        <span style='margin-left:10px;'>{{$t('i18n.title')}}</span>
      </div>
      <div>
        <el-radio-group v-model="lang" size="small">
          <el-radio label="zh" border>简体中文</el-radio>
          <el-radio label="en" border>English</el-radio>
        </el-radio-group>
      </div>
    </el-card>
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

<style scoped>
.box-card {
  width: 600px;
  margin: 20px auto;
}
.block {
  padding: 25px;
}
</style>
