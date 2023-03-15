<template>
  <button
    type="button"
    :title="title"
    @click="loginOauthUrl">
    Login mit github
  </button>
</template>

<script>
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
  methods: {
    loginOauthUrl() {
      fetch(
        import.meta.env.PUBLIC_API_URL +
          import.meta.env.PUBLIC_API_PATH_GITHUB_LOGIN_OAUTH_URL,
        {
          method: "POST",
          body: JSON.stringify({
            redirectUri: window.location.origin + this.redirectPath,
          }),
        },
      )
        .then((resp) => resp.json())
        .then((data) => {
          window.sessionStorage.setItem("zolosake:gh_state", data.state);
          window.location.assign(data.url);
        })
        .catch(console.log);
    },
  },
};
</script>
