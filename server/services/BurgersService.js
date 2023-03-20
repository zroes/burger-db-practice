import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { Burger, fakeDb } from "../db/fakeDb.js";


class BurgersService {
  async getBurgers(query) {
    let burgers = fakeDb.burgers

    if (query.patties)
      burgers = await burgers.filter(b =>
        b.patties == query.patties)
    if (query.cheese)
      burgers = await burgers.filter(b =>
        b.cheese.toLowerCase() == query.cheese.toLowerCase())
    if (query.hasTomato === '' || query.hastomato === '')
      burgers = await burgers.filter(b => b.hasTomato)
    else
      burgers = await burgers

    // switch (query) {
    //   case query.patties:
    //     burgers = await fakeDb.burgers.filter(b =>
    //       b.patties == query.patties)
    //     break;
    //   case query.cheese:
    //     burgers = await fakeDb.burgers.filter(b =>
    //       b.cheese.toLowerCase() == query.cheese.toLowerCase())
    //     break;
    //   default:
    //     burgers = await fakeDb.burgers
    // }
    return burgers
  }
  async getBurgById(id) {
    const burger = await fakeDb.burgers.find(b => b.id == id)
    return burger
  }
  async createBurg(burgData) {
    const burger = new Burger(burgData)
    await fakeDb.burgers.push(burger)
    return burger
  }
  deleteBurgById(id) {
    const burgIndex = fakeDb.burgers.findIndex(b => b.id == id)
    if (burgIndex != -1)
      fakeDb.burgers.splice(burgIndex, 1)
    else
      throw new BadRequest("invalid id")
  }

}

export const burgersService = new BurgersService()