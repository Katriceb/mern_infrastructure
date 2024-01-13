const Resource = require('../../models/resource.cjs');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const resources = await Resource.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    resouces.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(resources);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const resource = await Resource.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}