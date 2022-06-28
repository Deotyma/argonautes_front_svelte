<script>
     import {link} from "svelte-navigator";
     import grece1 from "../assets/images/grece1.jpeg";
     import grece2 from "../assets/images/grece2.jpeg";
     import grece3 from "../assets/images/grece3.jpeg";
     import grece4 from "../assets/images/grece4.jpeg";
     import voyage from "../assets/images/voyage.png";
     import tresor from "../assets/images/tresor.png"
     import amour from "../assets/images/amour.png";
     import rejoint from "../assets/images/regoint.png";
     import { onMount } from "svelte";
     import simpleParallax from 'simple-parallax-js'

     onMount(()=>{
         const image1 = document.getElementsByClassName("img1");
            new simpleParallax(image1,{
                scale: 1.5,
                delay: 0.5,
                orientation: "down"
            });

            const image2 = document.getElementsByClassName("img2");
            new simpleParallax(image2,{
                scale: 0.8,
                delay: 0.8,
                orientation:'right'
            });

            const image3 = document.getElementsByClassName("img3");
            new simpleParallax(image3,{
                scale: 0.8,
                delay: 0.8,
                orientation:'left'
            });
        }
     )
</script>

<main>
    <!-- section 1 -->
    <div class="section">
        <img class="img1" src={grece1} alt="grece"/>
        <div>
            <p class="text1">Un voyage magnifique t'attand...</p>
            <img class="img2"  src={voyage} alt="voyage"/>
        </div>
    </div>
    <!--section 2  -->
    <div class="section">
        <div>
            <img class="img3" src={tresor} alt="tresor"/>
            <p class="text2">Un trésor inestimable reien que pour toi...</p>
        </div>    
        <img class="img1"  src={grece2} alt="ruines">
    </div>
    <!-- section 3 -->
    <div class="section">
        <img class="img1" src={grece3} alt="grece">
        <div>
            <p class="text3">Un amour pour la vie et pour la mort...</p>
            <img class="img2"  src={amour} alt="amour">
        </div>
    </div>
    <!-- section 4 -->
    <div class="section">
        <div>
            <img class="img3"  src={rejoint} alt="rejoint nous">
            <a class="text4" href="/register" use:link>Réjoint notre aventure...</a>
        </div>
        <img class="img1" src={grece4} alt="ruines">
    </div>
</main>

<style>
    .section{
        display: flex;
        align-items: center;
        padding: 2rem;
    }
    img{
        height:auto;
        width: 100%;
        border-radius: 10px;

    }

    .img1{
        box-shadow: 10px 10px 5px #2E445A;
    }

    .text1, .text2, .text3, .text4 {
        font-size: 35px;
        color: #2E445A;
        text-align: center;
    }

</style>