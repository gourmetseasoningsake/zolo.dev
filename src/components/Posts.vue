<template>
  <ul>
    <li
      v-for="(post, i) in items" :key="i"
      class="flex flex-wrap border-b">
      <div class="flex flex-col justify-end w-full md:w-1/2 p-8">
        <Heading2>{{ post.title }}</Heading2>
        <Paragraph>{{ post.description }}</Paragraph>
        <Paragraph>{{ post.stack }}</Paragraph>
      </div>
      <div class="w-full md:w-1/2">
        <img class="object-cover w-full h-full" src="/resources/images/work-crm-map-1.png" />
      </div>
    </li>
  </ul>
</template>


<script>
  import Heading2 from './Heading2.vue'
  import Paragraph from './Paragraph.vue'

  export default {
    components: { Heading2, Paragraph },
    props: {
        items: {
            type: Array,
            default() { return []; }
        }
    }
}
</script>