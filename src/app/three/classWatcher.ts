/* eslint-disable @typescript-eslint/no-explicit-any */

// Full credit goes to https://stackoverflow.com/users/3140273/techwisdom
// https://stackoverflow.com/questions/10612024/event-trigger-on-a-class-change
export class ClassWatcher {
  targetNode: HTMLElement;
  classToWatch: string;
  classAddedCallback: () => any;
  classRemovedCallback: () => any;
  observer: MutationObserver | null;
  lastClassState: boolean;

  constructor(
    targetNode: HTMLElement,
    classToWatch: string,
    classAddedCallback: () => any,
    classRemovedCallback: () => any,
  ) {
    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetNode.classList.contains(this.classToWatch);

    this.init();
  }

  init() {
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  observe() {
    this.observer?.observe(this.targetNode, { attributes: true });
  }

  disconnect() {
    this.observer?.disconnect();
  }

  mutationCallback = (mutationsList: MutationRecord[]) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const currentClassState = (mutation.target as HTMLElement).classList.contains(
          this.classToWatch,
        );
        if (this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            this.classAddedCallback();
          } else {
            this.classRemovedCallback();
          }
        }
      }
    }
  };
}
