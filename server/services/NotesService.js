import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async createNote(data) {
    return await _repository.create(data);
  }
  deleteNoteByBugId(id) {
    throw new Error("Method not implemented.");
  }
  async findNotesByBugId(id) {
    return await _repository.find({ bug: id })
  }
  async getAll() {
    return await _repository.find({});
  }
}

const notesService = new NotesService();
export default notesService;
