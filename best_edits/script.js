document.addEventListener("DOMContentLoaded", async () => {
    const gallery = document.getElementById("video-gallery");
  
    try {
      // 1. Fetch the JSON list from the same folder
      const response = await fetch("./videos.json");
      if (!response.ok) throw new Error("Network response was not OK");
  
      const data = await response.json();
      const videoList = data.videos || [];
  
      // 2. Create video tiles for each entry in JSON
      videoList.forEach((videoFile) => {
        const container = document.createElement("div");
        container.classList.add("video-container");
  
        const videoElement = document.createElement("video");
        videoElement.classList.add("video-tile");
        videoElement.src = `videos/${videoFile}`;
        videoElement.muted = true;
  
        container.appendChild(videoElement);
        gallery.appendChild(container);
  
        // 3. Click to play/pause + expand
        videoElement.addEventListener("click", () => {
          // Pause all other videos
          document.querySelectorAll(".video-tile").forEach((v) => {
            if (v !== videoElement) {
              v.pause();
              v.parentElement.classList.remove("active");
            }
          });
  
          // Toggle this video
          if (videoElement.paused) {
            videoElement.play();
            container.classList.add("active");
          } else {
            videoElement.pause();
            container.classList.remove("active");
          }
        });
      });
    } catch (error) {
      console.error("Error loading videos:", error);
    }
  });
  