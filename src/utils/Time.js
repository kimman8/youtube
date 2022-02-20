export default function Time(publishDate) {
  const elapsedTime = new Date() - new Date(publishDate);
  if (elapsedTime < 7.2e6) {
    return `${Math.floor(elapsedTime / 3.6e6)} hr ago`;
  } else if (elapsedTime < 8.64e7) {
    return `${Math.floor(elapsedTime / 3.6e6)} hrs ago`;
  } else if (elapsedTime < 1.728e8) {
    return `${Math.floor(elapsedTime / 8.64e7)} day ago`;
  } else if (elapsedTime < 2.592e9) {
    return `${Math.floor(elapsedTime / 8.64e7)} days ago`;
  } else if (elapsedTime < 5.256e9) {
    return `${Math.floor(elapsedTime / 2.628e9)} month ago`;
  } else if (elapsedTime < 3.154e10) {
    return `${Math.floor(elapsedTime / 2.628e9)} months ago`;
  } else if (elapsedTime < 6.307e10) {
    return `${Math.floor(elapsedTime / 3.154e10)} year ago`;
  } else {
    return `${Math.floor(elapsedTime / 3.154e10)} years ago`;
  }
}
