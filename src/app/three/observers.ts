export function setupScrollObserver(el: Element, onScroll: () => void): () => void {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      window.addEventListener('scroll', onScroll);
    } else {
      window.removeEventListener('scroll', onScroll);
    }
  });
  observer.observe(el);

  return () => {
    window.removeEventListener('scroll', onScroll);
    observer.disconnect();
  };
}

export async function waitForElLoaded(selector: string): Promise<Element> {
  const el = await waitForEl(selector);
  const imgEl = el instanceof HTMLImageElement ? el : el.querySelector('img');
  if (imgEl && !imgEl.complete) {
    await new Promise<void>((resolve) =>
      imgEl.addEventListener('load', () => resolve(), { once: true }),
    );
  }
  return el;
}

export async function waitForEl(selector: string): Promise<Element> {
  return new Promise((resolve) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
