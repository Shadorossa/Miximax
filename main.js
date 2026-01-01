// Cargar jugadores al inicio
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('playerGrid');
    playersData.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        const isChecked = localStorage.getItem(player.id) === 'true' ? 'checked' : '';

        card.innerHTML = `
            <img src="${player.img}" alt="${player.name}">
            <h3>${player.name}</h3>
            <label class="switch">
                <input type="checkbox" id="${player.id}" ${isChecked} onchange="savePreference('${player.id}')">
                <span class="slider"></span>
            </label>
            <p>Miximax Activo</p>
        `;
        grid.appendChild(card);
    });
});

function savePreference(id) {
    const checkbox = document.getElementById(id);
    localStorage.setItem(id, checkbox.checked);
}

// Lógica de manipulación Hex
async function applyChanges() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) return alert("Selecciona el archivo chara_param primero");

    const file = fileInput.files[0];
    const arrayBuffer = await file.arrayBuffer();
    let uint8Array = new Uint8Array(arrayBuffer);

    playersData.forEach(player => {
        const active = document.getElementById(player.id).checked;
        const searchHex = active ? player.hexOriginal : player.hexModified;
        const replaceHex = active ? player.hexModified : player.hexOriginal;

        uint8Array = replaceByteSequence(uint8Array, searchHex, replaceHex);
    });

    downloadFile(uint8Array, file.name);
}

function replaceByteSequence(data, searchHex, replaceHex) {
    const searchBytes = hexToBytes(searchHex);
    const replaceBytes = hexToBytes(replaceHex);

    // Algoritmo simple de búsqueda y reemplazo
    for (let i = 0; i <= data.length - searchBytes.length; i++) {
        let match = true;
        for (let j = 0; j < searchBytes.length; j++) {
            if (data[i + j] !== searchBytes[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            data.set(replaceBytes, i);
        }
    }
    return data;
}

function hexToBytes(hex) {
    let bytes = [];
    for (let c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return new Uint8Array(bytes);
}

function downloadFile(data, fileName) {
    const blob = new Blob([data], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
}

// Guardar e Importar TXT
function saveConfig() {
    let config = {};
    playersData.forEach(p => config[p.id] = document.getElementById(p.id).checked);
    const blob = new Blob([JSON.stringify(config)], { type: "text/plain" });
    downloadFile(blob, "config_miximax.txt");
}

function loadConfig(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const config = JSON.parse(reader.result);
        for (const id in config) {
            const el = document.getElementById(id);
            if (el) {
                el.checked = config[id];
                savePreference(id);
            }
        }
    };
    reader.readAsText(event.target.files[0]);
}