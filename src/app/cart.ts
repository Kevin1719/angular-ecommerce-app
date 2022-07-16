export class Cart {
  id: number = 0;
  title: string = '';
  price: number = 0;
  description: string = '';
  category: string = '';
  image: string = '';
  rating: { rate: string, count: number } = {
    rate: "",
    count: 0
  }


  constructor(id: number, title: string, price: number, description: string,
              category: string, image: string, rating: { rate: string, count: number }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this.rating = rating;
  }
}
