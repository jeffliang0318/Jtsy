# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Product.destroy_all

user1 = User.create({email: "bearing@cearing.com", name: "Bear", password: "password"})
user2 = User.create({email: "456@456.com", name: "456", password: "456456"})
user3 = User.create({email: "user@user.com", password: "123456", name: "Tester"})

products = Product.create([
  {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522966546/bearing-1595147_960_720.png",
    title: "Bearings with Housings-BGSRB624ZZ",
    description: "Direct Mount, Standard with Pilot, Retained",
    quantity: 20, price: 38.62},
  {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522966545/black_rails.jpg",
    title: "Bearings with Housings-BGSRB624ZZ",
    description: "Direct Mount, Standard with Pilot, Retained", price: 38.62},
  {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522966545/product1.jpg",
    title: "bearing" ,description: "Direct Mount, Standard with Pilot, Retained",
    quantity: 20, price: 20.5}
  ])

  # {user_id: 1, img_url: "./figure this out later", title: "Bearings with Housings-BGSRB624ZZ", description: "Direct Mount, Standard with Pilot, Retained", quantity: 20, price: 12}
