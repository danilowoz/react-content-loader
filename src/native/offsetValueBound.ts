const offsetValueBound = (value: number): number => {
  if (value > 1) {
    return 1
  }

  if (value < 0) {
    return 0
  }

  return value
}

export default offsetValueBound
