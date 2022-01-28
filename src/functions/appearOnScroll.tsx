const ratio = .1

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  });
}

export const observer = new IntersectionObserver(handleIntersect, options)