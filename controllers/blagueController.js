const Blague = require('../models/blague');

exports.createBlague = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: 'Blague sans texte' });
    }
    const blagueExistante = await Blague.findOne({
      where: {
        content: req.body.content
      }
    });
    if (blagueExistante) {
      return res.status(409).json({ message: 'Blague déjà existante', blagueExistante });
    }
    const blague = await Blague.create(req.body);
    return res.status(201).json(blague);
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

exports.getAllBlague = async (req, res) => {
  try {
    const blagues = await Blague.findAll();
    return res.status(200).json(blagues);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getBlagueID = async (req, res) => {
  try {
    const blague = await Blague.findByPk(req.params.id);
    if (!blague) {
      return res.status(404).json({ message: 'Blague inexistante' });
    }
    return res.status(200).json(blague);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getBlagueRandom = async (req, res) => {
  try {
    const blagueCount = await Blague.count();

    if (blagueCount === 0) {
      return res.status(404).json({ message: 'Aucune blague trouvée ' });
    }

    const blagues = await Blague.findAll();
    const indexRandom = Math.floor(Math.random() * blagues.length);

    return res.status(200).json(blagues[indexRandom]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateBlague = async (req, res) => {
  try {
    const blague = await Blague.update({ content: req.body.content },
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (!blague) {
      return res.status(404).json({ message: 'Blague inexistante' });
    }
    return res.status(200).json(blague);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteBlague = async (req, res) => {
  try {
    const blague = await Blague.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!blague) {
      return res.status(404).json({ message: 'Blague inexistante' });
    }
    return res.status(200).json({ message: 'Blague supprimée ' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

