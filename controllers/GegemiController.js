const Response = require('../helpers/Response');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyD1ZvzaErC5lqyxi8p51oHch3WDIb7NBno");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
module.exports = {
    AnalysisAI: async (req, res) => {
        try {
            console.log("3");
            const { question } = req.body;
            if(question == null || question.length < 1)
            {
                return res.send(Response(202, "Thiếu thông tin câu hỏi", false));
            }
            const result = await model.generateContent( req.body.question);
            var resultText = result.response.text();
            resultText = resultText.replace('html',''); 
            resultText = resultText.replace('```',''); 
            resultText = resultText.replace('```',''); 

            console.log(result);

            res.send(200,resultText);
        } catch (err) {
            
            console.log(err);
        }
    }
}