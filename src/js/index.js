import "../sass/style.scss";
const pageList = require("./pageList");
const pageDetail = require("./pageDetail");
const router = require("./router")

console.log("index.js");
pageList();
pageDetail();

const getRoute = () => {
	let path = window.location.hash.substring(1).split("/");
	let pageArgument = path[1] || "";
	router[path[0]](pageArgument);
}

window.addEventListener("hashchange", getRoute);
window.addEventListener("DOMContentLoaded", getRoute);