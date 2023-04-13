const getAllDiets = require("../controllers/getAllDiets")

const getAllDietsHandler= async (req, res) => {
  try {
    const allDiets = await getAllDiets();
    res.status(200).send(allDiets);
  } catch (error) {
    res.status(404).send({error: error.message});
  }
}

module.exports = { getAllDietsHandler };