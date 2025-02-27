
module.exports = function (app) {
    const GegemiController = require("../../../controllers/GegemiController");
    app.route("/api/skin/analysisAI").post(GegemiController.AnalysisAI);
};
