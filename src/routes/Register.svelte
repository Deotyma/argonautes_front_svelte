<script>
    import TextInput from "../components/TextInput.svelte";
    import Button from "../components/Button.svelte";
    import axios from "axios";
    import { prevent_default } from "svelte/internal";
    //import { text } from "svelte/internal";

    let name = null;
	let description = null;

    const submit = (event) =>{
        event.preventDefault
        axios.post('http://localhost:8000/api/argonautes/register',{name, description})
        console.log (name, description)
    }

</script>

<form on:submit  class='my-form'>
    <TextInput bind:value={name} placeholder={'Votre nom'}, id={name} />
    <TextInput bind:value={description} placeholder={'Votre motivations'}, id={description} />
    <Button type='submit' on:click = {submit}>Envoyer</Button>
</form>