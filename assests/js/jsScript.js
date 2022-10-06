var searchResults = document.getElementById("result");

var search_terms = ['About Me', 'Projects', 'Skill', 'Work', 'Projects'];

function autocompleteMatch(input) {
    if (input == '') {
      return [];
    }
    var reg = new RegExp(input)
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
      list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
  }