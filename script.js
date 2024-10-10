document.getElementById('medForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    const medName = document.getElementById('medName').value;
    const medQuantity = document.getElementById('medQuantity').value;
    const medLocation = document.getElementById('medLocation').value;

    // Crea un nuevo elemento de fila en la tabla
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${medName}</td>
        <td>${medQuantity}</td>
        <td>${medLocation}</td>
    `;

    // Agrega la fila a la lista
    document.getElementById('medList').appendChild(row);

    // Limpia los campos del formulario
    document.getElementById('medForm').reset();
});