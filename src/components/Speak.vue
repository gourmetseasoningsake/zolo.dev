<template>
  <span :class="classes">
    <span
      class="touch-manipulation font-light text-action-fg cursor-pointer"
      :tabindex="tabindex"
      @click="speak"
      @keydown.enter.prevent.exact="speak">
      <slot>{{ placeholder }}</slot>
    </span>
  </span>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: false
      },
      lang: {
        type: String,
        default: "de-CH"
      },
      fallback: {
        type: String,
        required: true
      },
      focus: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        utter: null
      }
    },
    computed: {
      canSpeak() {
        return Boolean(this.utter)
      },
      classes() {
        return {
          "focus-within": this.focus
        }
      },
      tabindex() {
        return this.focus ? "0" : undefined
      }
    },
    mounted() {
      const voices = speechSynthesis?.getVoices()
        .filter(({ lang }) => lang.startsWith(this.lang.split("-")[0]))
        .sort(a => a === this.lang ? -1 : 1)

      if (voices?.[0]) {
        const utter = new SpeechSynthesisUtterance(this.text)
        utter.lang = voices[0].lang
        utter.voice = voices[0]
        this.utter = utter
      }
    },
    methods: {
      speak() {
        if (this.canSpeak) {
          speechSynthesis.speak(this.utter)
        } else {
          const audio = new Audio(this.fallback)
          audio.play()
        }
      }
    }
  }
</script>