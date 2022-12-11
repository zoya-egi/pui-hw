import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImage = document.querySelectorAll(".img-rotate");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

animatedImage.forEach(image => {
    const animatedImageTimeline = new ScrollTimeline({
        scrollOffsets: [
            { target: image, edge: "end", threshold: "0" },
            { target: image, edge: "start", threshold: "1" },
        ],
    });


    image.animate(
        {
            transform: ["perspective(1000px) rotateX(90deg)",
                "perspective(1000px) rotate(0)"],
            opacity: ["0", "1"]
        },
        {
            duration: 1,
            timeline: animatedImageTimeline,
        }
    );

});


scrollTracker.animate(
    { transform: ['scaleX(0)', 'scaleX(1)'] },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }
);

