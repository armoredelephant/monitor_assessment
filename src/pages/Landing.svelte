<script lang="ts">
  import Communication from "../components/Communication.svelte";
  import MainContainer from "../components/MainContainer.svelte";
  import PageHeader from "../components/PageHeader.svelte";
  import LandingForm from "../components/LandingForm.svelte";
  import { contact } from "../store";
</script>

<MainContainer>
  <PageHeader title="Monitor Assessment" />
  <Communication communication="Testerooski" />
  <LandingForm />
  <p>{JSON.stringify($contact)}</p>
</MainContainer>
