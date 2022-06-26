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
</script>

<main>
    <!-- section 1 -->
    <div class="section">
        <img class="img1" src={grece1} alt="grece"/>
        <p class="text1">Un voyage magnifique t'attand...</p>
        <img class="img2"  src={voyage} alt="voyage"/>
    </div>
    <!--section 2  -->
    <div class="section">
        <img class="img3" src={tresor} alt="tresor"/>
        <p class="text2">Un trésor inestimable reien que pour toi...</p>
        <img class="img4"  src={grece2} alt="ruines">
    </div>
    <!-- section 3 -->
    <div class="section">
        <img class="img5" src={grece3} alt="grece">
        <p class="text3">Un amour pour la vie et pour la mort...</p>
        <img class="img6"  src={amour} alt="amour">

    </div>
    <!-- section 4 -->
    <div class="section">
        <img class="img7"  src={rejoint} alt="rejoint nous">
        <a class="text4"href="/register" use:link>Réjoint notre aventure...</a>
        <img class="img8" src={grece4} alt="ruines">
    </div>
</main>

<style>
    .section{
        display: flex;
    }
    img{
        height:auto;
        width: 100%;
        border-radius: 10px;

    }

    .img1, .img4, .img5, .img8{
        box-shadow: 10px 10px 5px #2E445A;
    }

    .text1{
        position: relative;
        right: 200px;
        bottom: 100px;
        font-size: 25px;
        color: black;
    }

</style>