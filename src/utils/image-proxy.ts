export function imageProxy(image_url?: string) {
  let imageURL = ''
  if (image_url) {
    imageURL = `/v1/imageproxy?url=${encodeURIComponent(image_url)}`
  }
  return imageURL
}