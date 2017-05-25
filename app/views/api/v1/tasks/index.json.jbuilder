json.array! @tasks do |task|
  json.id task.id
  json.text task.title 
  json.completed task.completed
end