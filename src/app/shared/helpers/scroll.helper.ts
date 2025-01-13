export const scrollObserver = (
  querySelector: string,
  {
    enterCallback,
    leaveCallback,
    options,
  }: {
    enterCallback?: (entry: IntersectionObserverEntry, index: number) => void;
    leaveCallback?: (entry: IntersectionObserverEntry, index: number) => void;
    options: IntersectionObserverInit;
  },
): (() => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) enterCallback?.(entry, index);
      else leaveCallback?.(entry, index);
    });
  }, options);

  const elements = document.querySelectorAll(querySelector);
  elements.forEach((element) => observer?.observe(element));

  return () => observer?.disconnect();
};
