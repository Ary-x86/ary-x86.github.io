document.addEventListener("DOMContentLoaded", async () => {
    const gallery = document.getElementById("video-gallery");
    if (!gallery) {
        console.error("Error: #video-gallery not found.");
        return;
    }

    const modal = document.getElementById("video-modal");
    if (!modal) {
        console.error("Error: #video-modal not found.");
        return;
    }

    const modalContent = modal.querySelector(".modal-content");
    const closeBtn = modal.querySelector(".close-button");

    if (!modalContent || !closeBtn) {
        console.error("Error: Modal elements not found.");
        return;
    }

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        const video = modalContent.querySelector("video");
        if (video) {
            video.pause();
            modalContent.removeChild(video);
        }
    });

    // Fetch videos.json
    try {
        const response = await fetch("./videos.json");
        if (!response.ok) throw new Error("Failed to load videos.json");
        const data = await response.json();

        data.videos.forEach(videoObj => {
            const tile = document.createElement("div");
            tile.classList.add("thumbnail");

            const img = document.createElement("img");
            img.src = videoObj.thumbnail;
            img.alt = videoObj.title || "Video Thumbnail";
            tile.appendChild(img);

            if (videoObj.title) {
                const overlay = document.createElement("div");
                overlay.classList.add("title-overlay");
                overlay.textContent = videoObj.title;
                tile.appendChild(overlay);
            }

            tile.addEventListener("click", () => {
                const videoElement = document.createElement("video");
                videoElement.src = "videos/" + videoObj.file;
                videoElement.controls = true;
                videoElement.autoplay = true;

                const existingVideo = modalContent.querySelector("video");
                if (existingVideo) modalContent.removeChild(existingVideo);

                modalContent.appendChild(videoElement);
                modal.style.display = "block";
            });

            gallery.appendChild(tile);
        });
    } catch (error) {
        console.error("Error loading videos:", error);
    }
});
