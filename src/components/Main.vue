<template>
  <main>
    <Paragraph v-for="p in intro" :content="p" />
  </main>
</template>

<script>
  import Paragraph from "./Paragraph.vue"

  export default {
    name: "Main",
    components: {
      Paragraph
    },
    data() {
      return {
        intro: [
          "Ahoi, ich bin Jérôme Imfeld. Ich bin Web-Entwickler und denke mir für Unternehmungen Lösungen aus, wo die Ressourcen knapp sind. Ich tue das seit 7 Jahren und kann alles Mögliche rund um Web- oder Desktop-Applikationen in Angriff nehmen, als Teil eines bestehenden Teams oder als Lieferant einer einzelnen Sache."
        ]
      }
    }
  }
</script>