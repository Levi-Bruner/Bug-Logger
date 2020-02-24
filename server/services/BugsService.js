import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async deleteNoteByBugId(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async closeBug(id) {
    return await _repository.findByIdAndUpdate(id, { closed: true });
  }
  async update(id, update) {
    let bug = _repository.findById(id);
    //FIXME you can use a findone and filter by more than one property
    if (bug["closed"] = false) {
      return await _repository.findByIdAndUpdate(id, update, { new: true })
    }
    // throw new Error("Cannot edit a closed bug.");
  }
  async findById(id) {
    return await _repository.findById(id);
  }
  async getAll() {
    return await _repository.find({});
  }
  async create(body) {
    return await _repository.create(body);
  }
}

const bugsService = new BugsService();
export default bugsService;
