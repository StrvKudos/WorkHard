const requestURL = '../Hardware/business.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing'
    const companies = jsonObject['main'];

    for (let i = 0; i < companies.length; i++ ) {

        let card = document.createElement('div');

        let h6 = document.createElement('h6');       
        let c_info = document.createElement("h4");
        let c_link = document.createElement("button");
        let image = document.createElement("img");

        h6.textContent = companies[i].name;
        c_info.textContent = companies[i].price;

        c_link.textContent = "Add to Cart";
        c_link.setAttribute("onclick", "window.open('" + companies[i].link + "', '_blank')"); 
        c_link.setAttribute("class", "addcart")

        image.setAttribute('src', companies[i].logo); // pasted content
        card.appendChild(image);
        card.appendChild(h6);
        card.appendChild(c_info);
        card.appendChild(c_link);
      
        document.querySelector('.directory-grid').appendChild(card);
    }
  });