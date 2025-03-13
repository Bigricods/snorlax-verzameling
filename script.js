document.addEventListener("DOMContentLoaded", function() {
    const cards = [
        {
            naam: "Snorlax VMAX",
            set: "Sword & Shield",
            nummer: "142/202",
            prijs: "€35.00",
            afbeelding: "https://images.pokemontcg.io/swsh1/142.png"
        },
        {
            naam: "Snorlax GX",
            set: "Sun & Moon Promo",
            nummer: "SM05",
            prijs: "€15.00",
            afbeelding: "https://images.pokemontcg.io/smp/SM05.png"
        }
    ];

    const container = document.getElementById("card-container");

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <img src="${card.afbeelding}" alt="${card.naam}">
            <h2>${card.naam}</h2>
            <p>Set: ${card.set}</p>
            <p>Kaartnummer: ${card.nummer}</p>
            <p>Prijs: ${card.prijs}</p>
        `;

        container.appendChild(cardElement);
    });
});
