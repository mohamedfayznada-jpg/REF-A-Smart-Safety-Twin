async function loadFactoryData() {

    const response =
        await fetch("./data/factory_data.json");

    const data =
        await response.json();

    const factoryMap =
        document.querySelector(".factory-map");

    data.zones.forEach(zone => {

        if (zone.x && zone.y) {

            const marker =
                document.createElement("div");

            marker.className = "marker";

            marker.innerText = zone.name;

            marker.style.left =
                zone.x + "%";

            marker.style.top =
                zone.y + "%";

           marker.addEventListener("click",()=>{

    alert(zone.name);

});

factoryMap.appendChild(marker);

        }

    });

}

loadFactoryData();
