<template>
  <Section
    v-for="(item, i) in items"
    :key="i"
    divideBefore>
    <Section neutral full tabindex="0">
      <Heading2>{{ item.title }}</Heading2>
      <Paragraph>{{ item.description }}</Paragraph>
    </Section>
    <Section neutral full tabindex="0">
      <DataList
        :title="item.title + ' Meta'"
        :items="item.meta" />
    </Section>
    <MediaGallery
        v-if="item.media.length"
        :title="item.title + ' Gallery'"
        :items="item.media" />
  </Section>
</template>


<script>
  import Section from "./Section.vue"
  import Heading2 from "./Heading2.vue"
  import Paragraph from "./Paragraph.vue"
  import DataList from "./DataList.vue"
  import Image from "./Image.vue"
  import MediaGallery from "./MediaGallery.vue"

  export default {
    components: {MediaGallery, Section, Heading2, Paragraph, DataList, Image },
    props: {
      items: {
        type: Array,
        default() { return []; }
      }
    }
  }
</script>