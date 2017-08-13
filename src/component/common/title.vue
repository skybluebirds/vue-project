<template>
  <section class="title">
    <header class="mint-header">
      <div class="mint-header-button is-left">
        <a href="#/" class="router-link-active">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-back"></i>
            </span>
            <label class="mint-button-text">返回</label>
          </button>
        </a>
      </div>
      <h1 class="mint-header-title">{{title}}</h1>
      <div class="mint-header-button is-right"> </div>
    </header>
  </section>
</template>

<script>
export default {
  props: ['title']
}
</script>


<style lang="less">
.title {
  header {
    background-color: #fff;
    color: #000;
    border-bottom: 1px solid #eee;
  }
}
</style>

