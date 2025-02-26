import os
import json

def get_video_files(video_folder):
    # Get the list of video files in the specified folder
    video_extensions = {'.mp4', '.avi', '.mov', '.mkv', '.flv', '.wmv'}
    videos = [f for f in os.listdir(video_folder) if os.path.splitext(f)[1].lower() in video_extensions]
    return videos

def save_to_json(videos, output_file):
    # Create a dictionary in the desired format
    data = {"videos": videos}
    
    # Write the data to a JSON file
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=2)

def main():
    project_folder = os.getcwd()  # Get the current working directory
    video_folder = os.path.join(project_folder, "videos")  # Subfolder containing videos
    output_file = os.path.join(project_folder, "videos.json")  # Output JSON file
    
    if not os.path.exists(video_folder):
        print(f"Error: Folder '{video_folder}' does not exist.")
        return
    
    videos = get_video_files(video_folder)
    save_to_json(videos, output_file)
    
    print(f"JSON file '{output_file}' created successfully.")

if __name__ == "__main__":
    main()
