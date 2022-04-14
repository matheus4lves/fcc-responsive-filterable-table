// DOM manipulation
const DEVELOPER_NAMES = document.getElementById("js-developer-names");
const ROWS = DEVELOPER_NAMES.getElementsByTagName("tr");

// Definition of functions
const filter = () => {
  let searchTerm = document.getElementById("js-search-input").value.toUpperCase();

  for (i = 0; i < ROWS.length; i++) {
    let column = ROWS[i].getElementsByTagName("td")[2];
    let language = column.textContent;

    console.log(language.toUpperCase().startsWith(searchTerm));
    ROWS[i].style.display = language.toUpperCase().startsWith(searchTerm) ? "" : "none";
  }
};

// Event handling
document.getElementById("js-search-input").addEventListener("keyup", filter);
