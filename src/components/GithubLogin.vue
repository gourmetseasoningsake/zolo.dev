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
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const localStateVar = window.sessionStorage.getItem(
      "zolosake:github_state",
    );

    window.sessionStorage.removeItem("zolosake:github_state");
    if (
      localStateVar &&
      urlParams.has("state") &&
      urlParams.has("code") &&
      localStateVar === urlParams.get("state")
    ) {
      fetch(
        import.meta.env.PUBLIC_API_URL +
          import.meta.env.PUBLIC_API_PATH_GITHUB_LOGIN_OAUTH_AUTHORIZE,
        {
          method: "POST",
          body: JSON.stringify({
            code: urlParams.get("code"),
            redirectUri: window.location.origin + this.redirectPath,
          }),
        },
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        })
        .catch(console.log);
    }
  },
  methods: {
    loginOauthUrl() {
      const state = uid();

      window.sessionStorage.setItem("zolosake:github_state", state);
      fetch(
        import.meta.env.PUBLIC_API_URL +
          import.meta.env.PUBLIC_API_PATH_GITHUB_LOGIN_OAUTH_URL,
        {
          method: "POST",
          body: JSON.stringify({
            state,
            redirectUri: window.location.origin + this.redirectPath,
          }),
        },
      )
        .then((resp) => resp.json())
        .then((data) => {
          window.location.assign(data.url);
        })
        .catch(console.log);
    },
  },
};
</script>
