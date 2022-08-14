<template>
<dl>
  <DataListItem v-for="({key, value}, i) in items"></li>
</dl>
</template>


<script>
import DataListItem from './DataListItem.vue'

export default {
    components: { DataListItem },
    props: {
        items: {
            type: Array,
            default() { return []; }
        }
    },
}
</script>