<script lang="ts">
import {defineComponent} from "vue";

interface SpeakData {
  utter: SpeechSynthesisUtterance | null;
}

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    lang: {
      type: String,
      required: true,
    },
    fallback: {
      type: String,
      required: true,
    },
    focusWithin: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  data(): SpeakData {
    return {
      utter: null,
    };
  },
  computed: {
    classesParent() {
      return {
        "focus-within": this.focusWithin,
      };
    },
    classesChild() {
      return {
        focus: this.focus,
      };
    },
    tabindex() {
      return this.focusWithin || this.focus ? "0" : undefined;
    },
  },
  mounted() {
    // const voices = speechSynthesis
    //   ?.getVoices()
    //   .filter(({lang}) => lang.startsWith(this.lang.split("-")[0]))
    //   .sort((a) => (a === this.lang ? -1 : 1));
    //
    // if (voices?.[0]) {
    //   const utter = new SpeechSynthesisUtterance(this.text);
    //   utter.lang = voices[0].lang;
    //   utter.voice = voices[0];
    //   this.utter = utter;
    // }
  },
  methods: {
    speak() {
      if (this.utter) {
        speechSynthesis.speak(this.utter);
      } else {
        const audio = new Audio(this.fallback);
        audio.play();
      }
    },
  },
});
</script>

<template>
  <span :class="classesParent">
    <span
      role="button"
      class="touch-manipulation font-light text-action-fg cursor-pointer"
      :class="classesChild"
      :tabindex="tabindex"
      @click="speak"
      @keydown.enter.prevent.exact="speak">
      <slot>{{ placeholder }}</slot>
    </span>
  </span>
</template>
