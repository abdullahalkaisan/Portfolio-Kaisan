const videoURL = [
    "https://assets.mixkit.co/videos/preview/mixkit-people-having-a-work-meeting-around-a-table-4547-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-man-in-a-suit-works-from-the-kitchen-4830-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-business-people-at-work-meeting-4809-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-two-coworkers-talking-and-laughing-4872-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-young-man-sitting-scrolling-on-his-cell-phone-4801-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-girl-working-on-a-computer-4938-large.mp4"
]

const video = document.querySelector('video');



const getRandomNumber = randomNumber();

function randomNumber () {
    return Math.floor(Math.random()*videoURL.length);
}

video.src = videoURL[getRandomNumber];

console.log(getRandomNumber);







