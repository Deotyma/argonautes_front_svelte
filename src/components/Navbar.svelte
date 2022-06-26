<script>
    import {link} from "svelte-navigator";
</script>

<nav>
    <a href="/" use:link>Home</a>
    <a href="/all" use:link>Equipe</a>
    <a href="/register" use:link>Register</a>
    <!-- <a href="/argonaute" use:link>Argonaute</a> -->
</nav>

<style>
    nav {
        padding: 2rem;
        text-align: center;


    }
    a {
        color: #2E445A;
        font-size: large;
        text-decoration: none;
        padding: 1rem;
        font-weight: bolder;

    }

    a:hover {
        background-color: #BDB0A1;
        border-radius: 5px;
    }

    a:focus{
        background-color: #2E445A;
        color:#BDB0A1;
    }

</style>