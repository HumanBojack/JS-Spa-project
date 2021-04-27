const pageList = require("./pageList");
const pageDetail = require("./pageDetail");
const router = {
	"": pageList,
	"pageList": pageList,
	"pageDetail": pageDetail
}
module.exports = router;