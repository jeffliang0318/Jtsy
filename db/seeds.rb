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
    quantity: 20, price: 20.5},
  {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522993688/Rotary_Clamp_Cylinders.jpg",
    title: "Rotary Clamp Cylinders-MKRCA25-31-R" ,description: "Diameter 25, Stroke 31mm, Rod Tip Shape:	Female Thread",
    quantity: 20, price: 263.77},
  {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522994089/prna.jpg",
    title: "Small High Rotor/Standard Type, PRNA Series" ,description: "Type: Axis output of rotary actuator on one side, Main Body Shape: Round shape
Angle of Oscillation:90°,Torque(N・m):1～Less than 3 / 3～Less than 6 / 6～Less than 10",
    quantity: 30, price: 165.82},
  {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522993688/Rotary_Clamp_Cylinders.jpg",
    title: "Rotary Clamp Cylinders-MKRCA50-70-R" ,description: "Diameter 50, Stroke 70mm, Rod Tip Shape:	Female Thread",
    quantity: 5, price: 279.54},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522966546/bearing-1595147_960_720.png",
      title: "Bearings with Housings-BGSRB624ZZ",
      description: "Direct Mount, Standard with Pilot, Retained",
      quantity: 20, price: 38.62},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522966545/black_rails.jpg",
      title: "Bearings with Housings-BGSRB624ZZ",
      description: "Direct Mount, Standard with Pilot, Retained", price: 38.62},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522966545/product1.jpg",
      title: "bearing" ,description: "Direct Mount, Standard with Pilot, Retained",
      quantity: 20, price: 20.5},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522993688/Rotary_Clamp_Cylinders.jpg",
      title: "Rotary Clamp Cylinders-MKRCA25-31-R" ,description: "Diameter 25, Stroke 31mm, Rod Tip Shape:	Female Thread",
      quantity: 20, price: 263.77},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522994089/prna.jpg",
      title: "Small High Rotor/Standard Type, PRNA Series" ,description: "Type: Axis output of rotary actuator on one side, Main Body Shape: Round shape
  Angle of Oscillation:90°,Torque(N・m):1～Less than 3 / 3～Less than 6 / 6～Less than 10",
      quantity: 30, price: 165.82},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522993688/Rotary_Clamp_Cylinders.jpg",
      title: "Rotary Clamp Cylinders-MKRCA50-70-R" ,description: "Diameter 50, Stroke 70mm, Rod Tip Shape:	Female Thread",
      quantity: 5, price: 279.54}
  ])

  # {user_id: 1, img_url: "./figure this out later", title: "Bearings with Housings-BGSRB624ZZ", description: "Direct Mount, Standard with Pilot, Retained", quantity: 20, price: 12}
