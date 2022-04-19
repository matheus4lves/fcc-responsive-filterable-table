import { DEVELOPERS } from "../data/developers.js";

// DOM manipulation
const DEVELOPER_NAMES = document.getElementById("js-developer-names");

// Functionality definition
/* 
  If you put the template literal in just one line, you do not need to include the return statement,
  nor the braces:

  const rowTemplate = rowData => `<tr><td>${rowData.name}</td><td>${rowData.age}</td><td>${rowData.language}</td></tr>`;

*/
const rowTemplate = rowData => {
  return `
  <tr>
    <td>${rowData.name}</td>
    <td>${rowData.age}</td>
    <td>${rowData.language}</td>
  </tr>
`;
};

const showRows = rows => {
  DEVELOPER_NAMES.innerHTML = rows
    .map(row => {
      return rowTemplate(row);
    })
    .join("");
};

const filter = () => {
  let searchTerm = document.getElementById("js-search-input").value.toUpperCase();
  let results = DEVELOPERS.filter(DEVELOPER => {
    return DEVELOPER.language.toUpperCase().includes(searchTerm) ? DEVELOPER : null;
  });

  showRows(results);
};

// Event handling
document.onload = showRows(DEVELOPERS);
document.getElementById("js-search-input").addEventListener("keyup", filter);
