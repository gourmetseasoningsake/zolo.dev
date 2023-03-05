<!--
NB: Using this template as is emits the warning: [Vue warn]: Extraneous non-props attributes (slot) were passed to
component but could not be automatically inherited because component renders fragment or text root nodes.
You can ignore it or add a wrapping div. For more info, see https://github.com/vuejs/core/issues/5933
-->

<template>
  <Section
      v-for="(item, i) in items"
      :key="i"
      divideBefore>
    <Section neutral full focus>
      <Heading2>{{ item.title }}</Heading2>
      <Paragraph>{{ item.description }}</Paragraph>
    </Section>
    <Section neutral full focus>
      <DataList
        :title="item.title + ' Meta'"
        :items="item.meta" />
    </Section>
    <MediaGallery
      v-if="item.media?.length"
      :title="item.title + ' Galerie'"
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
    components: {MediaGallery, Section, Heading2, Paragraph, DataList, Image},
    props: {
      items: {
        type: Array,
        default() { return []; }
      }
    }
  }
</script>