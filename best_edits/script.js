document.addEventListener("DOMContentLoaded", async () => {
    const gallery = document.getElementById("video-gallery");
    const modal = document.getElementById("video-modal");
    const modalContent = modal.querySelector(".modal-content");
  
    // Function to close the modal and remove the video element
    function closeModal() {
      modal.style.display = "none";
      const video = modalContent.querySelector("video");
      if (video) {
        video.pause();
        modalContent.removeChild(video);
      }
    }
  
    // Close modal if click outside modal-content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    // Close button event listener
    const closeBtn = modalContent.querySelector(".close-button");
    closeBtn.addEventListener("click", closeModal);
  
    // Fetch the videos JSON file
    try {
      const response = await fetch("./videos.json");
      if (!response.ok) throw new Error("Network error");
  
      const data = await response.json();
      const videoList = data.videos || [];
  
      videoList.forEach((videoObj) => {
        // Create thumbnail container
        const tile = document.createElement("div");
        tile.classList.add("thumbnail");
  
        // Create image element for thumbnail
        const img = document.createElement("img");
        img.src = videoObj.thumbnail; // e.g., "thumbnails/video1.jpg"
        img.alt = videoObj.title || "Video Thumbnail";
  
        tile.appendChild(img);
  
        // Optional: Title overlay on thumbnail
        if (videoObj.title) {
          const overlay = document.createElement("div");
          overlay.classList.add("title-overlay");
          overlay.textContent = videoObj.title;
          tile.appendChild(overlay);
        }
  
        // On thumbnail click, open modal and load video
        tile.addEventListener("click", () => {
          // Create video element dynamically with sound and controls
          const videoElement = document.createElement("video");
          videoElement.src = "videos/" + videoObj.file;
          videoElement.controls = true;
          videoElement.autoplay = true;
  
          // Remove any existing video if present
          const existingVideo = modalContent.querySelector("video");
          if (existingVideo) {
            modalContent.removeChild(existingVideo);
          }
  
          modalContent.appendChild(videoElement);
          modal.style.display = "block";
        });
  
        gallery.appendChild(tile);
      });
    } catch (error) {
      console.error("Error loading videos:", error);
    }
  });
  