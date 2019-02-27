function getPictures() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
    let output = '<h2>Colors</h2>';
    data.forEach(function(pic) {
      output += `
      <div>
            <h3>${pic.title}</h3>
            <img src="${pic.url}" width="30" height="30">

      </div>
      `  
    })
    document.getElementById('output').innerHTML = output;
    }) 
}

getPictures();