export const animationIcon = (
  state: number, stateSetter: (arg: number) => void, nbIcons: number, setIsHidden: (arg: boolean) => void
) => {
  if (state < 0) {
    setIsHidden(true)
    stateSetter((50 + 50) * (nbIcons - 1))

    setTimeout(() => {
      setIsHidden(false)
    }, 2000)
  }
  else stateSetter(state - 50)
}