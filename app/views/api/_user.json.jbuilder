json.set! "user" do
  json.extract! user, :id, :username
end

json.set! "session" do
  json.extract! user, :id
end
