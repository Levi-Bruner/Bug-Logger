import express from "express";
import bugsService from "../services/BugsService";
import notesService from "../services/NotesService"

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.createBug)
      .put("/:id", this.editBug)
      .delete("/:id", this.closeBug)
      .delete("/:id/notes/:id", this.deleteNoteByBugId)
  }

  async getAll(req, res, next) {
    try {
      let data = await bugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugsService.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotesByBugId(req, res, next) {
    try {
      let data = await notesService.findNotesByBugId(req.params.id)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async createBug(req, res, next) {
    try {
      let data = await bugsService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async editBug(req, res, next) {
    try {
      let data = await bugsService.update(req.params.id, req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async closeBug(req, res, next) {
    try {
      await bugsService.closeBug(req.params.id, req.body)
    } catch (error) {
      next(error);
    }
    res.send("Closed bug.")
  }
  async deleteNoteByBugId(req, res, next) {
    try {
      await notesService.deleteNoteByBugId(req.params.id);
      res.send("Deleted successfully")
    } catch (error) {
      next
    }
  }
}
