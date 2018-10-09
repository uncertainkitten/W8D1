@benches.each do |bench|
  json.set! "#{bench.id}" do
    json.set! :id, bench.id
    json.set! :name, bench.name
    json.set! :description, bench.description
  end
end