<template>
  <nav>
    <ul class="flex justify-end -mx-2">
      <li class="px-1" v-for="link in links">
        <Link
          class="block px-1 uppercase"
          :key="link.href" 
          :href="link.href" 
          :title="link.title" 
          :current="link.href === href">
          {{ link.text }}
        </Link>     
      </li>
    </ul>
  </nav>
</template>


<script>
  import Link from "./Link.vue"

  export default {
    name: "MainNav",
    components: { Link },
    data() {
      return {
        links: [
          { href: "/", title: "Ahoi", text: "Ahoi" },
          { href: "/rechtliches", title: "Rechtliches", text: "Rechtliches" }
        ]
      }
    },
    props: {
      href: {
        type: String,
        required: false
      }
    }
  }
</script>