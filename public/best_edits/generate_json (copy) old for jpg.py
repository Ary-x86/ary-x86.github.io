import os
import json
import subprocess

def get_video_files(video_folder):
    video_extensions = {'.mp4', '.avi', '.mov', '.mkv', '.flv', '.wmv'}
    return [f for f in os.listdir(video_folder) if os.path.splitext(f)[1].lower() in video_extensions]

def generate_thumbnail(video_folder, thumbnail_folder, video_file):
    os.makedirs(thumbnail_folder, exist_ok=True)
    video_path = os.path.join(video_folder, video_file)
    thumbnail_path = os.path.join(thumbnail_folder, os.path.splitext(video_file)[0] + ".jpg")
    
    # Generate a medium-sized compressed thumbnail using ffmpeg
    command = [
        "ffmpeg", "-i", video_path, "-ss", "00:00:01", "-vframes", "1", "-vf", "scale=320:-1", "-q:v", "5", thumbnail_path
    ]
    subprocess.run(command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return thumbnail_path

def save_to_json(videos, output_file, video_folder, thumbnail_folder):
    data = {"videos": []}
    
    for idx, video in enumerate(videos, start=1):
        thumbnail = generate_thumbnail(video_folder, thumbnail_folder, video)
        data["videos"].append({
            "file": video,
            "thumbnail": os.path.relpath(thumbnail, video_folder),
            "title": f"Epic Edit #{idx}"
        })
    
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=2)

def main():
    project_folder = os.getcwd()
    video_folder = os.path.join(project_folder, "videos")
    thumbnail_folder = os.path.join(video_folder, "thumbnails")
    output_file = os.path.join(project_folder, "videos.json")
    
    if not os.path.exists(video_folder):
        print(f"Error: Folder '{video_folder}' does not exist.")
        return
    
    videos = get_video_files(video_folder)
    save_to_json(videos, output_file, video_folder, thumbnail_folder)
    
    print(f"JSON file '{output_file}' created successfully.")

if __name__ == "__main__":
    main()
