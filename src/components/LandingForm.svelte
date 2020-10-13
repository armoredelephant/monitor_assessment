<script lang="ts">
  import Button from "./Button.svelte";
  import ButtonWrapper from "./ButtonWrapper.svelte";
  import { contact } from "../store";
  import { landingSchema } from "../schema";
  import { extractErrors } from "../helpers";
  import TextField from "./TextField.svelte";
  import SelectField from "./SelectField.svelte";

  const handleSubmit = () => {
    console.log("Test");
    landingSchema
      .validate(contact, { abortEarly: false })
      .then(() => {
        console.log("valid.");
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
</style>

<form on:submit|preventDefault={handleSubmit} class="contact-info">
  <TextField fieldName="name" />
  <TextField fieldName="ref" />
  <TextField fieldName="email" />
  <SelectField fieldName="count" />
  <ButtonWrapper>
    <Button inverted={true} text="begin" />
  </ButtonWrapper>
</form>
