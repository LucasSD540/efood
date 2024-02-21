class Restaurant {
  description: string
  image: string
  name: string
  origin: string
  classification: number
  id: number
  emphasis: 'yes' | 'not'

  constructor(
    description: string,
    image: string,
    name: string,
    origin: string,
    classification: number,
    id: number,
    emphasis: 'yes' | 'not'
  ) {
    this.description = description
    this.image = image
    this.name = name
    this.origin = origin
    this.classification = classification
    this.id = id
    this.emphasis = emphasis
  }
}

export default Restaurant
