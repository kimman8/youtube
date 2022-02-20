export default function Views(views) {
  if (views < 1000000) {
    return `${Math.floor(views / 1000)}K views`;
  } else if (views > 1000000) {
    return `${Math.floor(views / 1000000)}M views`;
  } else if (views < 1000) {
    return `${views} views`;
  }
}
