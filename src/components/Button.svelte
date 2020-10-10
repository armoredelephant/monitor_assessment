<script lang="ts">
  export let text: string;
  export let inverted: boolean;
</script>

<style>
  .btn-primary {
    background-color: #fff;
    color: #000;
  }

  .btn-primary:active,
  .btn-primary:hover,
  .btn-primary:focus {
    background-color: #000;
    color: #fff;
  }

  .btn-secondary {
    background-color: #000;
    color: #fff;
  }

  .btn-secondary:active,
  .btn-secondary:hover,
  .btn-secondary:focus {
    background-color: transparent;
    color: #000;
  }
</style>

<button class={inverted ? 'btn-secondary' : 'btn-primary'}>{text}</button>
