 <script>
    import { onMount } from 'svelte';
    import axios from 'axios';  
    import { useFocus} from "svelte-navigator";
    import {navigate } from "svelte-navigator";
    import { prevent_default } from "svelte/internal";
    //import Button from '../components/Button.svelte';
	const registerFocus = useFocus();
    export let argonaute = {}
    let error = null;

    console.log($$props)
    export let id 
    console.log(id)
   // const aId = window.location.search;

onMount(async () =>{

            const response = await axios.get(`http://localhost:8000/api/argonautes/${id}`);
            console.log(response.data);
            argonaute = response.data;

    });

    const suprim = async() =>{
        await axios.delete(`http://localhost:8000/api/argonautes/${id}`)
    }

    const clickLink = async (event) => {
        navigate(event.target.pathname)
    }

</script>
      
 <main>
    {#await argonaute}
        <p>Wait</p>
    {:then}
     <h2>{argonaute.name}</h2>
     <h2>{argonaute.description}</h2>

    <p on:click={suprim}>Suprimer</p>
    <!-- <Button type= "submit" on:click={suprim}>Supprimer</Button> -->
    <a use:registerFocus href={`/modif/${argonaute._id}`}
        on:click|preventDefault= {clickLink}>Modifier</a>
   

   {:catch error}
   <p>An error occurred!</p>
   {/await}
</main>