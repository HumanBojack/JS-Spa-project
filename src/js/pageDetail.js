const pageDetail = (id) => {
	console.log("this is pageDetail");
	console.log(id);

	const preparePage = () => {

    const fetchGame = (url, id) => {
      let finalURL = `${url}${id}?key=${process.env.RAWG_API}`;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description, background_image, rating, developers, platforms, publishers, genres, tags } = response;
          console.log(response);

          let articleDOM = document.querySelector(".main_wrapper .article");
          let infosDOM = document.querySelector(".main_wrapper .game_infos");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released.replace(/(\d+)-(\d+)-(\d+)/i, '$3/$2/$1');
          articleDOM.querySelector("p.description").innerHTML = description;

          infosDOM.querySelector(".note").innerHTML += rating; 
          infosDOM.querySelector(".developer").innerHTML += developers.map(developer => developer.name).join(", ");
          infosDOM.querySelector(".platforms").innerHTML += platforms.map(platform => platform.platform.name).join(", ");
          infosDOM.querySelector(".publisher").innerHTML += publishers.map(publisher => publisher.name).join(", ");
          infosDOM.querySelector(".genre").innerHTML += genres.map(genre => genre.name).join(", ");
          infosDOM.querySelector(".tags").innerHTML += tags.map(tag => tag.name).join(", ");


          let styleElem = document.head.appendChild(document.createElement("style"));
					styleElem.innerHTML = `.main_wrapper:before {background-image: url(${background_image});}`;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", id);
  };

  const render = () => {
  	let mainWrapper = document.querySelector(".main_wrapper");
		mainWrapper.innerHTML = `
        <div class="article">
          <h1 class="title"></h1>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
        </div>
        <div class="game_infos">
			    <div class="note"><span class="category">Note</span></div>
			    <div class="developer"><span class="category">Developer</span></div>
			    <div class="platforms"><span class="category">Platforms</span></div>
			    <div class="publisher"><span class="category">Publisher</span></div>
			    <div class="genre"><span class="category">Genres</span></div>
			    <div class="tags"><span class="category">Tags</span></div>
			  </div>
    `;

    mainWrapper.classList.remove("pageDetail", "pageList");
    mainWrapper.classList.add("pageDetail");
    preparePage();
  };

  render();
}
module.exports = pageDetail;