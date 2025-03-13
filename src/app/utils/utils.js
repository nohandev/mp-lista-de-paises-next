export default function formatNumbers (number) {
  if (number >= 1_000) {
    return number >= 1_000_000 
      ? (number / 1_000_000).toFixed(1) + 'M'
      : (number / 1_000).toFixed(1) + 'K'
  }
  return number
}
