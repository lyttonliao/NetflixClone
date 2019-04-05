json.extract! list, :id
json.movies do
    json.array! list.movies do |movie|
        json.extract! movie, :id, :title, :year, :description
    end
end