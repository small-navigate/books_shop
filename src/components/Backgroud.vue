<template>
  <div class="bg">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: linear-gradient(
    to top right,
    rgba(224, 73, 13, 0.4),
    rgba(4, 149, 245, 0.5)
  );
}
</style>