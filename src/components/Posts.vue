<!--
NB: Using this template as is emits the warning: [Vue warn]: Extraneous non-props attributes (slot) were passed to
component but could not be automatically inherited because component renders fragment or text root nodes.
You can ignore it or add a wrapping div. For more info, see https://github.com/vuejs/core/issues/5933
NB(210323): added a wrapping div with display: contents, @see ./Content.vue
-->
<script lang="ts">
import {defineComponent} from "vue";
import Section from "./Section.vue";
import Division from "./Division.vue";
import Content from "./Content.vue";
import Heading2 from "./Heading2.vue";
import Paragraph from "./Paragraph.vue";
import DataList from "./DataList.vue";
import Image from "./Image.vue";
import MediaGallery from "./MediaGallery.vue";

export default defineComponent({
  components: {
    Content,
    MediaGallery,
    Section,
    Division,
    Heading2,
    Paragraph,
    DataList,
    Image,
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<template>
  <Content>
    <Section
      v-for="(item, i) in items"
      :key="i"
      divide-between>
      <Division
        px
        my>
        <Heading2>{{ item.title }}</Heading2>
        <Paragraph>{{ item.description }}</Paragraph>
      </Division>
      <Division
        px
        my>
        <MediaGallery
          v-if="item.media?.length"
          :title="item.title + ' Galerie'"
          :items="item.media" />
      </Division>
      <Division
        px
        my>
        <DataList
          :title="item.title + ' Meta'"
          :items="item.meta" />
      </Division>
    </Section>
  </Content>
</template>
