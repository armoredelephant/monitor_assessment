<script lang="ts">
  import { contact } from "../store";
  export let fieldName: "count";
</script>

<div class="field-wrapper">
  <label for="count"> <span>How Many Monitors?</span> </label>
  <select id="count" name="count" bind:value={$contact[fieldName]}>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
  </select>
</div>
