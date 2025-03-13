document.addEventListener("DOMContentLoaded", function() {
    // Voorbeeld: twee handmatig ingevulde kaarten en 98 placeholders (totaal 100)
    const cards = [];
    
    // Voeg handmatig ingevulde kaarten toe
    cards.push({
        naam: "Snorlax VMAX",
        set: "Sword & Shield",
        nummer: "142/202",
        prijs: "€35.00",
        afbeelding: "https://images.pokemontcg.io/swsh1/142.png"
    });
    cards.push({
        naam: "Snorlax GX",
        set: "Sun & Moon Promo",
        nummer: "SM05",
        prijs: "€15.00",
        afbeelding: "https://images.pokemontcg.io/smp/SM05.png"
    });
    
    // Voeg de overige kaarten toe als placeholders (totale aantal = 100)
    for (let i = cards.length; i < 100; i++) {
        cards.push({
            naam: `Vul naam in (${i + 1})`,
            set: "Vul set in",
            nummer: "Vul nummer in",
            prijs: "Vul prijs in",
            afbeelding: "Vul URL in"
        });
    }
    
    const container = document.getElementById("card-container");

    // Genereer per kaart een div met een checkbox
    cards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <label class="card-label">
                <input type="checkbox" class="card-checkbox" id="card-${index}">
                <span>Ik heb deze kaart</span>
            </label>
            <img src="${card.afbeelding}" alt="${card.naam}">
            <h2>${card.naam}</h2>
            <p>Set: ${card.set}</p>
            <p>Kaartnummer: ${card.nummer}</p>
            <p>Prijs: ${card.prijs}</p>
        `;
        
        container.appendChild(cardElement);
    });
});
