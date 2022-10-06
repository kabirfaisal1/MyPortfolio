var searchResults = document.getElementById("result");
var searchInput = document.getElementById("searchInput");

var search_terms = ['About Me','Projects', 'Skill', 'Work','Projects'];
var item;
function autocompleteMatch(input) {
    if (input == '') {
      return [];
    }
    var reg = new RegExp(input);
    return search_terms.filter(function(term) {
        if (term.match(reg)) {
            return term;
        }
    });
  }

  function showResults(val) {

    searchResults.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (i=0; i<terms.length; i++) {
        if(terms[i].toLowerCase.match(val)){
            searchResults.style.setProperty("visibility", "visible")
            list += '<li>' + terms[i] + '</li>';
        }else{
            searchResults.style.setProperty("visibility", "hidden")
        }
    }
    searchResults.innerHTML = '<ul>' + list + '</ul>';
  }

  searchResults.addEventListener("click", ()=>{
    searchInput.textContent = item ;
    searchResults.style.setProperty("visibility", "hidden");
    
  })