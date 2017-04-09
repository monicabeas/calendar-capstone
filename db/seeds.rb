# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 User.create(
  name: "Test User",
  email: "test@gmail.com",
  password_digest: "password",
  )

 Category.create([
  {category: "Coding"},
  {category: "Work"},
  {category: "Personal"}
  ])

 Task.create([
  {title: "Finish Seed Data", 
    due_date: Date.parse("2017-04-10"),
    notes: "Create seed data and test associations in rails console",
    task_type: "coding",
    user_id: 1
  }, 
  {
    title: "Create views",
    due_date: Date.parse("2017-04-12"),
    notes: "Create RESTful views",
    task_type: "coding",
    user_id: 1
  }
  ])

 Event.create([
  {title: "Go to Coding Class", 
    start_time: DateTime.new(2017, 04, 23, 9, 00, 0), 
    end_time: DateTime.new(2017, 04, 23, 17, 00, 0), 
    location: "77 Geary Street", 
    description: "Coding class on 5th floor", 
    user_id: 1, 
    category_id: 1,
  }
  ])


