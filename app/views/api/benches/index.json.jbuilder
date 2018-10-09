json.array! @benches do |bench|
  json.set! :name, bench.name
  json.set! :description, bench.description
end