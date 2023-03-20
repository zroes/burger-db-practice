import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:burgID', this.getBurgById)
      .post('', this.createBurg)
      .delete('/:burgID', this.deleteBurgById)
  }
  async getBurgers(req, res, next) {
    try {
      const query = req.query
      const burgers = await burgersService.getBurgers(query)
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async getBurgById(req, res, next) {
    try {
      const id = req.params.burgID
      const burger = await burgersService.getBurgById(id)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async createBurg(req, res, next) {
    try {
      const burgData = req.body
      const burg = await burgersService.createBurg(burgData)
      return res.send(burg)
    } catch (error) {
      next(error)
    }
  }
  async deleteBurgById(req, res, next) {
    try {
      const id = req.params.burgID
      await burgersService.deleteBurgById(id)
      return res.send('burger deleted :)')
    } catch (error) {
      next(error)
    }
  }
}