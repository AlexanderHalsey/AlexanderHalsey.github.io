export const scrollObserver = (
  querySelector: string,
  {
    enterCallback,
    leaveCallback,
    options,
  }: {
    enterCallback?: (entry: IntersectionObserverEntry) => void;
    leaveCallback?: (entry: IntersectionObserverEntry) => void;
    options: IntersectionObserverInit;
  },
): (() => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) enterCallback?.(entry);
      else leaveCallback?.(entry);
    });
  }, options);

  const elements = document.querySelectorAll(querySelector);
  elements.forEach((element) => observer?.observe(element));

  return () => observer?.disconnect();
};
