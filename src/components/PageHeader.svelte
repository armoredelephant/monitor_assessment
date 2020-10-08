<script lang="ts">
  export let title: string;
</script>

<style>
  .page-header-wrapper {
    display: flex;
    width: 100%;
    height: 103px;
    justify-content: center;
    border-bottom: 1px solid #c4c4c4;
  }
  .page-header {
    color: #000;
    letter-spacing: 0.18rem;
    text-transform: uppercase;
    font-size: 18px;
    margin: auto 0;
  }
</style>

<div class="page-header-wrapper">
  <h2 class="page-header">{title}</h2>
</div>
