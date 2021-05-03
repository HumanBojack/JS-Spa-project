import "../sass/style.scss";
const pageList = require("./pageList");
const pageDetail = require("./pageDetail");
const router = require("./router")

const getRoute = () => {
	let path = window.location.hash.substring(1).split("/");
	let pageArgument = path[1] || "";
	router[path[0]](pageArgument);
}

window.addEventListener("hashchange", getRoute);
window.addEventListener("DOMContentLoaded", getRoute);

let search = document.querySelector('form input[type="submit"]');
let searchBar = document.querySelector('form input[type="text"]');
search.addEventListener("click", (event) => {
	event.preventDefault();
	router["pageList"](searchBar.value);
});
