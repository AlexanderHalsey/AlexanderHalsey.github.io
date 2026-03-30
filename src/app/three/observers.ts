export function setupScrollObserver(el: Element, onScroll: () => void): void {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      window.addEventListener('scroll', onScroll);
    } else {
      window.removeEventListener('scroll', onScroll);
    }
  });
  observer.observe(el);
}

export async function waitForElLoaded(selector: string): Promise<Element> {
  const el = await waitForEl(selector);
  const imgEl = el instanceof HTMLImageElement ? el : el.querySelector('img');
  if (imgEl && !imgEl.complete) {
    await new Promise<void>((resolve) =>
      imgEl.addEventListener('load', () => resolve(), { once: true }),
    );
  }
  // In SSR production builds, Angular replaces the prerendered DOM during bootstrap,
  // leaving the grabbed element detached (getBoundingClientRect returns zeros).
  // Poll with rAF so we always check after a layout pass with a fresh DOM query.
  if (el instanceof HTMLElement && el.getBoundingClientRect().height === 0) {
    return new Promise<Element>((resolve) => {
      const poll = () => {
        const current = document.querySelector(selector);
        if (current instanceof HTMLElement && current.getBoundingClientRect().height > 0) {
          resolve(current);
        } else {
          requestAnimationFrame(poll);
        }
      };
      requestAnimationFrame(poll);
    });
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
