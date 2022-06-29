<script>
    import TextInput from "../components/TextInput.svelte";
    import axios from "axios";
    import { onMount } from 'svelte';
    let argonaute ={}
    
    console.log($$props)
    export let id 
    console.log(id)

    onMount(async () =>{

        const response = await axios.get(`http://localhost:8000/api/argonautes/${id}`);
        console.log(response.data);
        argonaute = response.data;

    });

    /* let name = argonaute.name;
	let description = argonaute.description; */

    const modif = async() =>{
        axios.put(`http://localhost:8000/api/argonautes/${id}`,{name: argonaute.name, description: argonaute.description})
        //console.log (name, description)
       
    }
</script>

<main>
    <h1>{argonaute.name}</h1>
    <TextInput id={argonaute._id} on:input bind:value = {argonaute.name} placeholder= {argonaute.name}/>
    <TextInput id={argonaute._id} on:input bind:value = {argonaute.description} placeholder= {argonaute.description}/>

    <p on:click={modif}>Modifier</p>

</main>