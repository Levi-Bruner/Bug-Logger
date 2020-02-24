import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async deleteNoteByBugId(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async closeBug(id, update) {
    let bug = await _repository.findById(id);
    if (bug["closed"] == false) {
      bug["closed"] = true
    }
    return "Closed bug."
  }
  async update(id, update) {
    let bug = _repository.findById(id);
    return await _repository.findByIdAndUpdate(id, update, { new: true })
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
