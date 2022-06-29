<script>
    import {navigate } from "svelte-navigator";
    import { onMount } from 'svelte';
    import axios from 'axios';
    import { useFocus } from "svelte-navigator";
    import Argonaute from "./Argonaute.svelte";
    import { prevent_default } from "svelte/internal";
   

	const registerFocus = useFocus();
    let argonautes = [];
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

<main class="container">
    {#await argonautes}
        <p>Wait</p>
    {:then}
    {#each argonautes as argonaute} 
        <div class="card">
            <h2>{argonaute.name}</h2>
       

            <a class="qui" use:registerFocus href={`/all/${argonaute._id}`}
            on:click|preventDefault= {clickLink}>Qui suis-je?</a>
    </div>
   {/each}
   {:catch error}
   <p>An error occurred!</p>
   {/await}
</main>

<style>

    .card{
        display: flex;
        flex-direction: column;
        width: 25vw;
        color: #2E445A;
        padding: 4rem;
        background-color: #BDB0A1;
        margin-top: 2rem;
        box-shadow: 5px 5px 5px #2E445A;
        border-radius: 5px;
        text-align: center;

    }
    .card:hover{
        box-shadow: 10px 10px 10px #2E445A;

    }
    .qui{
        background-color: #2E445A;
        padding: 1rem;
        color: #BDB0A1;
        border-radius: 5px;
        margin: 1rem;
        text-decoration: none;
    }
    .qui:hover{
        border: solid 1px #2E445A;
        background-color: #BDB0A1;
        color: #2E445A;
    }

</style>