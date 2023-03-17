<template>
  <button
    type="button"
    :title="title"
    @click="loginOauthUrl">
    Login mit github
  </button>
</template>

<script>
import {uid} from "../utils/random";

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    redirectPath: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      storageKeys: {
        state: import.meta.env.PUBLIC_STORAGE_KEYS_PREFIX + ":gh:state",
      },
    };
  },
  async created() {
    // const urlParams = new URLSearchParams(window.location.search);
    // const localStateVar = window.sessionStorage.getItem(this.storageKeys.state);
    //
    // window.sessionStorage.removeItem(this.storageKeys.state);
    // if (
    //   localStateVar &&
    //   urlParams.has("state") &&
    //   urlParams.has("code") &&
    //   localStateVar === urlParams.get("state")
    // ) {
    //   const access = await fetch(import.meta.env.PUBLIC_API_LOGIN_GH_AUTH, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       code: urlParams.get("code"),
    //       redirectUri: import.meta.env.SITE + this.redirectPath,
    //     }),
    //   })
    //     .then((resp) => resp.json())
    //     .catch(console.log);
    //
    //   console.log(access);
    //
    //   const user = await fetch(`https://api.github.com/user`, {
    //     method: "GET",
    //     headers: {
    //       Authorization: "Bearer " + access.access_token,
    //       Accept: "application/json",
    //     },
    //   })
    //     .then((resp) => resp.json())
    //     .catch(console.log);
    //
    //   console.log(user);
    // }
  },
  methods: {
    loginOauthUrl() {
      const state =
        btoa(import.meta.env.SITE.trim() + this.redirectPath.trim()) +
        "_ _" +
        uid();

      window.sessionStorage.setItem(this.storageKeys.state, state);
      fetch(import.meta.env.PUBLIC_API_LOGIN_GH_URL, {
        method: "POST",
        body: JSON.stringify({
          state,
          redirectUri: import.meta.env.PUBLIC_API + "/login/github/authorize2", //import.meta.env.SITE + this.redirectPath,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          window.location.assign(data.url);
        })
        .catch(console.log);
    },
  },
};
</script>
