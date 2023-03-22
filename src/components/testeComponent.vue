<template>

{{$store.state.user.first_name}}
{{$store.state.user.last_name}}
</template>


<script>
export default {
  created() {
    console.log(this.$store.state.user);
  }
}
</script>

<style scoped>

</style>