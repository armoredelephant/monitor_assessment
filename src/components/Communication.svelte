<script lang="ts">
  export let communication: string;
</script>

<style>
  .communication-wrapper {
    width: 100%;
    min-height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .communication {
    margin: auto 0;
  }
</style>

<div class="communication-wrapper">
  <p class="communication">{communication}</p>
</div>
