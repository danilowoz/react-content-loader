jest.mock('Animated', () => {
  return {
    Value: () => {
      return {
        addListener: callback => callback({ value: 0 }),
        setValue: () => {},
      }
    },
    timing: (value, config) => {
      return {
        start: callback => {
          value.setValue(config.toValue)
          callback && callback()
        },
      }
    },
  }
})
