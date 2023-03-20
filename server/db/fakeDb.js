export class Burger {

  constructor(data) {
    this.id = data.id
    this.patties = data.patties || 1
    this.cheese = data.cheese || 'cheddar'
    this.hasTomato = data.hasTomato
    this.hasLettuce = data.hasLettuce
    this.hasBacon = data.hasBacon
    this.hasAvo = data.hasAvo

  }
}

class FakeDb {
  burgers = [
    new Burger({
      patties: 2,
      cheese: 'jack',
      hasTomato: false,
      hasLettuce: true,
      hasBacon: true,
      hasAvo: true,
      id: 1
    }),
    new Burger({
      patties: 1,
      cheese: 'cheddar',
      hasTomato: true,
      hasLettuce: true,
      hasBacon: false,
      hasAvo: false,
      id: 2
    }),
    new Burger({
      patties: 3,
      cheese: 'american',
      hasTomato: false,
      hasLettuce: false,
      hasBacon: true,
      hasAvo: false,
      id: 3
    }),
    new Burger({
      patties: 1,
      cheese: 'gouda',
      hasTomato: true,
      hasLettuce: true,
      hasBacon: true,
      hasAvo: true,
      id: 4
    }),
    new Burger({
      patties: 2,
      cheese: 'cheddar',
      hasTomato: true,
      hasLettuce: false,
      hasBacon: false,
      hasAvo: true,
      id: 5
    }),
  ]
}

export const fakeDb = new FakeDb()