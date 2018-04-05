# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{email: "123@123.com", name: "123", password: "123123"},{email: "456@456.com", name: "456", password: "456456"},
  {{email: "user@user.com", password: "123456", name: "Tester"}])
