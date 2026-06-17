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
async function loadFactoryData() {

    const response =
    await fetch("./data/factory_data.json");

    const data =
    await response.json();

    const factoryMap =
    document.querySelector(".factory-map");

    data.zones.forEach(zone=>{

        if(zone.x && zone.y){

            const marker =
            document.createElement("div");

            marker.className =
            "marker";

            marker.innerText =
            zone.name;

            marker.style.left =
            zone.x + "%";

            marker.style.top =
            zone.y + "%";

            factoryMap.appendChild(marker);

        }

    });

}

loadFactoryData();
