<template>
  <main>
    <Heading1 :content="title" />
    <Paragraph v-for="p in intro" :content="p" />
  </main>
</template>

<script>
  import Heading1 from "./Heading1.vue"
  import Paragraph from "./Paragraph.vue"

  export default {
    name: "Main",
    components: {
      Heading1,
      Paragraph
    },
    data() {
      return {
        title: "",
        intro: [
          "Ahoi, ich bin Jérôme Imfeld. Ich bin Web-Entwickler und denke mir für Unternehmungen Lösungen aus, wo die Ressourcen bescheiden sind. Ich tue das seit 7 Jahren und kann alles innerhalb von Internetpräsenzen bis Mobile- oder Desktop-Applikationen in Angriff nehmen, als Teil eines bestehenden Teams oder als Lieferant einer einzelnen Sache."
        ]
      }
    }
  }
</script>