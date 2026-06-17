async function loadFactoryData() {

    const response = await fetch("./data/factory_data.json");

    const data = await response.json();

    const container = document.getElementById("container");

    data.zones.forEach(zone => {

        container.innerHTML += `
        
        <div class="zone">

            <h2>${zone.name}</h2>

        </div>

        `;

    });

}

loadFactoryData();