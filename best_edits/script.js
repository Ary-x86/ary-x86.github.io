document.addEventListener("DOMContentLoaded", async () => {
    const gallery = document.getElementById("video-gallery");

    try {
        // Fetch the list of videos from JSON
        const response = await fetch("videos.json");
        const data = await response.json();

        data.videos.forEach(video => {
            const container = document.createElement("div");
            container.classList.add("video-container");
            container.setAttribute("data-video", `videos/${video}`);

            const videoElement = document.createElement("video");
            videoElement.classList.add("video-tile");
            videoElement.src = `videos/${video}`;
            videoElement.muted = true;

            container.appendChild(videoElement);
            gallery.appendChild(container);

            // Video Click Event
            videoElement.addEventListener("click", function () {
                document.querySelectorAll(".video-tile").forEach(v => {
                    if (v !== videoElement) {
                        v.pause();
                        v.parentNode.classList.remove("active");
                    }
                });

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
