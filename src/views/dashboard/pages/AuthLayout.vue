<template>
  <div>
    <div class="wrapper wrapper-full-page">
      <div
        class="full-page section-image"
        :class="pageClass"
        filter-color="black"
        data-image="/img/bg13.jpg"
      >
        <div class="content">
          <div class="container">
            <router-view></router-view>
          </div>
        </div>

        <div
          class="full-page-background"
          style="background-image: url('/img/bg13.jpg')"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    backgroundColor: {
      type: String,
      default: "black",
    },
  },
};
</script>
<style lang="scss"></style>
