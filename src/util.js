export const formatCash = (n) => {
  if (n < 1e3) return n.toFixed(0)
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + "K"
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(0) + "M"
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(0) + "B"
  if (n >= 1e12) return +(n / 1e12).toFixed(0) + "T"

  else return "0"
};

export const prettyDate = (date) => {
  return new Date(date).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute:"2-digit",
    second: "2-digit",
  })
}