const format = date => date.toLocaleDateString('en-US', {year: "numeric", month: "short", day: "numeric"})

export default date => {
  return (date instanceof Date) ? format(date) : format(new Date(date))
}