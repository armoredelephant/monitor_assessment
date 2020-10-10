<script lang="ts">
  import Button from "./Button.svelte";
  import ButtonWrapper from "./ButtonWrapper.svelte";
  import { contact } from "../store";
  import { landingSchema } from "../schema";
  import { extractErrors } from "../helpers";

  let values = {
    name: "",
    ref: "",
    email: "",
    count: 1,
  };

  const handleSubmit = () => {
    console.log("Test");
    landingSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        contact.set(values);
      })
      .catch((err) => console.log(extractErrors(err)));
  };
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
    padding-bottom: 0.5rem;
  }

  .field-wrapper:last-of-type {
    padding-bottom: 0;
  }
</style>

<form on:submit|preventDefault={handleSubmit} class="contact-info">
  <div class="field-wrapper">
    <label for="name"> <span> Name: </span> </label>
    <input type="text" id="name" name="name" bind:value={values.name} />
  </div>
  <div class="field-wrapper">
    <label for="ref"> <span> Reference: </span> </label>
    <input type="text" id="ref" name="ref" bind:value={values.ref} />
  </div>
  <div class="field-wrapper">
    <label for="email"> <span> Email To: </span> </label>
    <input type="text" id="email" name="email" bind:value={values.email} />
  </div>
  <div class="field-wrapper">
    <label for="count"> <span>How Many Monitors?</span> </label>
    <select id="count" name="count" bind:value={values.count}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
    </select>
  </div>
  <ButtonWrapper>
    <Button inverted={true} text="begin" />
  </ButtonWrapper>
</form>
