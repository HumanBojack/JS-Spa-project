const index = require("./index");
const pageList = (argument = "") => {
	console.log("this is pageList");

	const preparePage = () => {
		cleanedArgument = argument.replace(/\s+/g, "-");
		let articles = "";

		const fetchList = (url, argument) => {
			let finalURL = url;
			if (argument) {
				finalURL = url + "&search=" + argument;
			}

			fetch(finalURL)
				.then(response => response.json())
				.then(response => {
					response.results.forEach(article => {
						let platforms = article.platforms.map(platform => `<a data-name="${platform.platform.slug}" >${platform.platform.name}</a>`);
						articles += `
						<div class="game">
					    <img src="${article.background_image}" alt="game_poster">
					    
					    <p class="appear">${article.release}</p>
					    <p class="appear">${article.rating} - ${article.ratings_count} votes</p>
					    <p class="appear">${article.genres.map(genre => genre.name).join(", ")}</p>
					    <a href="#pageDetail/${article.id}" class="title"">${article.name}</a>
					    <div class="platforms">${platforms.join(', ')}</div>
					  </div>`; // .replace(/(\d+)-(\d+)-(\d+)/i, '$3/$2/$1')
					});
					document.querySelector(".main_wrapper").innerHTML = articles;
					document.querySelectorAll(".platforms *").forEach(platform => {
				  	platform.addEventListener("click", function(event){
				  		event.preventDefault();
				  		console.log(this.dataset.name);
				  	})
				  });
				});
		}
		fetchList(`https://api.rawg.io/api/games?page_size=9&key=${process.env.RAWG_API}`, cleanedArgument);
		// Use either the 'next' link in in the json to fetch the new items or load everything the first time and display when clicking next.
	}




	const render = () => {
		let mainWrapper = document.querySelector(".main_wrapper");
		mainWrapper.innerHTML = `Loading articles`;
		mainWrapper.classList.remove("pageDetail", "pageList");
    mainWrapper.classList.add("pageList");
    preparePage();
	}

	render();

}
module.exports = pageList;