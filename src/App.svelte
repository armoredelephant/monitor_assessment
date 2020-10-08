<script lang="ts">
  import Landing from "./pages/Landing.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 0 1em;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-content: center;
    align-items: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  @media (max-width: 640px) {
    main {
      margin: 0;
    }
  }
</style>

<main>
  <Landing />
</main>
