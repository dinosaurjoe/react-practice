# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ideas = Idea.create(
  [
    {
      title: "Development Blog",
      body: "A blog for path to becomming developer"
    },
    {
      title: "Checklist for Moving",
      body: "What to pack, what you need when you get there, etc"
    },
    {
      title: "Places to visit",
      body: "A list of places you would like to go"
    },
    {
      title: "GoLang MUD",
      body: "Traditional RP MUD game created using GoLang"
    }
  ])
