<template>
  <div>Hello {{ value }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "World - Development"
    };
  },
  mounted () {
    // eslint-disable-next-line
    let hi
    // eslint-disable-next-line
    console.log(hi)
  }
};
</script>
