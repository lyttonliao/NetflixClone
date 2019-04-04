json.id list.id
json.movies do
    json.array! list.movies do |movie|
        json.extract! list, :id, :title, :year, :description
    end
end