<template>
  <dt>{{ key }}</dt>
  <dd>{{ value }}</dd>
</template>


<script>
export default {
  props: {
    key: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>