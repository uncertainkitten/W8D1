# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
  {
    name: "Cool Bench",
    description: "This bench is a nice low temperature bench during the summer",
    lat: 37.862858,
    lng: -122.273500
  },
  {
    name: "Test Bench",
    description: "Great for studying",
    lat: 37.843883,
    lng: -122.270754
  },
  {
    name: "SQL Bench :)",
    description: "Good Bench for ${SQL DROP DATABASE *; --SQL}",
    lat: 37.7941502,
    lng: -122.2853023
  },
  {
    name: "Murder Bench",
    description: "Occasionally bloody, otherwise delightful bench with local flavor",
    lat: 37.768915,
    lng: -122.3790294
  }
])