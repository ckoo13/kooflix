json.extract! video, :id, :title, :description, :rating, :runtime, :year, :video_type
json.thumbnailUrl url_for(video.thumbnail)
json.videoUrl url_for(video.video)