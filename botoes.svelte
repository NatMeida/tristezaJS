<script>
    let count = 0;
</script>

<button on:click={() => console.log("Oi Nat!")}>Falar oi para a Nat</button>
<button on:click={() => count++}>Somar 1</button>

<p>{count}</p>