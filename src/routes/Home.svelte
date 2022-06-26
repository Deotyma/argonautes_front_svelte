<script>
     import {link} from "svelte-navigator";
     import grece1 from "../assets/images/grece1.jpeg";
     import grece2 from "../assets/images/grece2.jpeg";
     import grece3 from "../assets/images/grece3.jpeg";
     import grece4 from "../assets/images/grece4.jpeg";

</script>

<main>
    <container>
        <div class="section">
            <h2>
                Le voyage inoubliable
            </h2>
            <img src={grece1} alt="grece">
        </div>
        <div class="section">
            <img src={grece2} alt="ruines">
            <h2>
                Le traisor inimaginable
            </h2>
        </div>
        <div class="section">
            <h2>
                L'amour jusqu'à la mort
            </h2>
            <img src={grece3} alt="grece">
        </div>
        <div class="section">
            <img src={grece4} alt="ruines">
            <div>
                <h2>
                    Le traisor inimaginable
                </h2>
                <a href="/register" use:link>Réjoins nous</a>
            </div>
            
        </div>
    </container>
</main>

<style>
    .section{
        display: flex;
    }

</style>