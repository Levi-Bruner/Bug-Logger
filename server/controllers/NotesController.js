import express from "express";
import notesService from "../services/NotesService";
import bugsService from "../services/BugsService"

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .post("", this.createNote)
      .delete("/:id", this.deleteNote)
  }

  async getAll(req, res, next) {
    try {
      let data = await notesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async createNote(req, res, next) {
    try {
      let data = await notesService.createNote(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async deleteNote(req, res, next) {
    try {
      await bugsService.deleteNoteByBugId(req.params.id);
      res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }
}