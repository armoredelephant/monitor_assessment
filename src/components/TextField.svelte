<script lang="ts">
  import { contact } from "../store";
  export let fieldName: "name" | "ref" | "email";
</script>

<div class="field-wrapper">
  <label for={fieldName}><span> {fieldName}: </span></label>
  <input
    type="text"
    id={fieldName}
    name={fieldName}
    bind:value={$contact[fieldName]} />
</div>
