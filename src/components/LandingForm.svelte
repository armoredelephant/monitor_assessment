<script>
  import { contact } from "../store";
</script>

<style>
  .contact-info {
    border: 1px solid #c4c4c4;
    align-self: center;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    padding: 1rem;
    min-width: 303px;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  .field-wrapper {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    flex-flow: row;
  }
</style>

<form class="contact-info">
  <div class="field-wrapper">
    <label for="name"> <span> Name: </span> </label>
    <input type="text" id="name" name="name" bind:value={$contact.name} />
  </div>
  <div class="field-wrapper">
    <label for="ref"> <span> Reference: </span> </label>
    <input type="text" id="ref" name="ref" bind:value={$contact.ref} />
  </div>
  <div class="field-wrapper">
    <label for="email"> <span> Email To: </span> </label>
    <input type="text" id="email" name="email" bind:value={$contact.email} />
  </div>
  <div class="field-wrapper">
    <label for="count"> <span>How Many Monitors?</span> </label>
    <select id="count" name="count" bind:value={$contact.count}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
    </select>
  </div>
</form>
