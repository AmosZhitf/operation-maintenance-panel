<template>
  <vnud-card class="card-stats">
    <div class="statistics statistics-horizontal">
      <div class="info info-horizontal">
        <div class="row">
          <div class="col-5" v-if="$slots.icon || icon">
            <div class="icon icon-circle" :class="`icon-${type}`">
              <slot name="icon">
                <i :class="icon"></i>
              </slot>
            </div>
          </div>
          <div class="col-7 text-right" v-if="$slots.content || title">
            <slot>
              <h3 v-if="title" class="info-title">{{ title }}</h3>
              <h6 v-if="subTitle" class="stats-title">{{ subTitle }}</h6>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <template v-slot:footer>
      <div class="stats" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </template>
  </vnud-card>
</template>
<script>
import VnudCard from "./Card.vue";

export default {
  name: "stats-card",
  components: {
    VnudCard,
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    icon: String,
    title: String,
    subTitle: String,
  },
};
</script>
<style></style>
