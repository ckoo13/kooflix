@genres.each do |genre|
    json.set! genre.id do
        json.partial! '/api/genres/genre', genre: genre
        json.videoIds genre.videos.pluck(:id)
    end
end