// json2html.js

export default function json2html(data) {
    // Determine unique headers by collecting all keys across objects
    const headers = new Set();
    data.forEach(row => Object.keys(row).forEach(key => headers.add(key)));

    // Begin creating the HTML table with the specified data-user attribute
    let html = '<table data-user="satyasaitippu746@gmail.com">';
    
    // Create the table header
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    
    // Create the table body
    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody></table>';

    return html;
}
