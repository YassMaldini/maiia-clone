export function calculateHeight(width: number, aspectRatio: string) {
  // Parse aspect ratio
  const aspectRatioArr = aspectRatio.split(':');
  const aspectRatioWidth = parseInt(aspectRatioArr[0]);
  const aspectRatioHeight = parseInt(aspectRatioArr[1]);

  // Calculate height
  const height = (width * aspectRatioHeight) / aspectRatioWidth;

  return height;
}
