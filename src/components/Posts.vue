<template>
  <Section
    v-for="(item, i) in items" :key="i"
    class="divide-before">
    <div class="mb-8">
      <Heading2>{{ item.title }}</Heading2>
      <Paragraph>{{ item.description }}</Paragraph>
    </div>
    <DataList class="mb-8" :title="item.title + ' Meta'" :items="item.meta"></DataList>
    <ul class="flex flex-wrap -m-4 pt-1 pb-2">
      <li 
        v-for="(mediaItem, j) in item.media" :key="j"
        class="relative w-full pb-[66.665%] sm:w-1/2 sm:pb-[33.333%] lg:w-1/3 lg:pb-[22.222%]">
        <Image 
          width="3" 
          height="2" 
          class="absolute object-cover object-right-top p-4" 
          :dataSource="mediaItem.source" />
      </li>
    </ul>
  </Section>
</template>


<script>
  import Section from "./Section.vue"
  import Heading2 from "./Heading2.vue"
  import Paragraph from "./Paragraph.vue"
  import DataList from "./DataList.vue"
  import Image from "./Image.vue"

//w-full md:w-1/2 xl:w-1/3 p-4
  export default {
    components: { Section, Heading2, Paragraph, DataList, Image },
    props: {
      items: {
        type: Array,
        default() { return []; }
      }
    }
  }
</script>