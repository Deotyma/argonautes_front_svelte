<script>
    import {navigate } from "svelte-navigator";
    import { onMount } from 'svelte';
    import axios from 'axios';
    import { useFocus } from "svelte-navigator";
    import Argonaute from "./Argonaute.svelte";
    import { prevent_default } from "svelte/internal";
   

	const registerFocus = useFocus();
    export let argonautes = [];
    let error = null; 

   /*  const fetchArgonautes = (async () => {
		const response = await fetch('http://localhost:8000/api/argonautes')
        argonautes =  await response.json()
        return argonautes

	})() */

    onMount(async () =>{
        try {
            const response = await axios.get(`http://localhost:8000/api/argonautes`);
            console.log(response.data);
            argonautes = response.data;
  }     catch (e) {
            error = e;
            console.error(e);
  }
    });
const clickLink = async (event) => {
        navigate(event.target.pathname)
}  


</script>

<main>
    {#await argonautes}
        <p>Wait</p>
    {:then}
    {#each argonautes as argonaute(argonaute._id)} 
        <h2>{argonaute.name}</h2>
       <!--  <p>{argonaute.description}</p> -->

        <a use:registerFocus href={`/all/${argonaute._id}`}
        on:click|preventDefault= {clickLink}>Qui suis-je?</a>
        <hr>
   {/each}
   {:catch error}
   <p>An error occurred!</p>
   {/await}
</main>