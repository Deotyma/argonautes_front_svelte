 <script>
// @ts-nocheck

	// @ts-ignore
import { Router, Route, useParams} from "svelte-navigator";
import Navbar from "./components/Navbar.svelte";
import Home from "./routes/Home.svelte";
import All from "./routes/All.svelte";
import Register from "./routes/Register.svelte";
import Argonaute from "./routes/Argonaute.svelte";
import Modif from "./routes/Modif.svelte";

//let id = {params._id}

</script>

<Router>
  <Navbar />

  <div>
		<Route path="/">
      <Home />
		</Route>
    <Route path="/all">
      <All />
		</Route>
    <Route path="/register">
      <Register />
		</Route>
    <Route path="all/:id" let:params>
      <Argonaute id={params.id}/>
    </Route>
    <Route path="modif/:id" let:params>
      <Modif id={params.id}/>
    </Route>

   

	</div>

</Router>


<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  

  @media (min-width: 480px) {
  
  }
</style>
