<template>
  <div>{{ name }} is mounted! {{ country ? country : "" }}</div>
</template>
<script>
export default {
  props: {
    name: String,
    country: String,
  },
};
</script>
