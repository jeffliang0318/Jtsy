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
    {user_id: user3.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1522966545/black_rails.jpg",
      title: "Bearings with Housings-BGSRB624ZZ",
      description: "Direct Mount, Standard with Pilot, Retained", price: 38.62},
    {user_id: user3.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523339498/Screen_Shot_2018-04-09_at_10.44.32_PM.png",
      title: "Step motor-TQR200MKE" ,description: "Category Motor Voltage Specifications DC Holding torque(N·m) 0.1 Frame Size NEMA 11,
      Closed Loop Feedback None, Step angle(°): 1.8, Reduction Gear: None",
      quantity: 20, price: 20.5},
    {user_id: user3.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523339263/All_radiation_sensors.jpg",
      title: "radiation_sensors" ,description: "Diameter 25, Stroke 31mm, Rod Tip Shape:	Female Thread",
      quantity: 20, price: 263.77},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523339263/Digital_Soft_Starter_with_Motor_Protection_and_In_Built_By_Pass.jpg",
      title: "Digital Soft Starter with Motor Protection and In Built By Pass" ,description: "Type: Axis output of rotary actuator on one side, Main Body Shape: Round shape
  Angle of Oscillation:90°,Torque(N・m):1～Less than 3 / 3～Less than 6 / 6～Less than 10",
      quantity: 30, price: 165.82},
    {user_id: user1.id, img_url: "http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523339263/leuze_mlc500t30-150_3_6.jpg",
      title: "Linear motion sensor-MKR50-70-R" ,description: "Motion sensors stand guard, ready to react to various situations, such as movement in your living room, windows or doors being opened or closed, or a broken window.",
      quantity: 5, price: 279.54}
  ])

  # {user_id: 1, img_url: "./figure this out later", title: "Bearings with Housings-BGSRB624ZZ", description: "Direct Mount, Standard with Pilot, Retained", quantity: 20, price: 12}
