export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private elements: HTMLElement[] = [];
  private originalHTMLs: string[] = [];

  constructor(
    target: string | HTMLElement | (string | HTMLElement)[],
    _options?: { type?: string; linesClass?: string }
  ) {
    let elements: HTMLElement[] = [];
    if (Array.isArray(target)) {
      target.forEach((t) => {
        if (typeof t === "string") {
          elements.push(...Array.from(document.querySelectorAll<HTMLElement>(t)));
        } else if (t instanceof HTMLElement) {
          elements.push(t);
        }
      });
    } else if (typeof target === "string") {
      elements.push(...Array.from(document.querySelectorAll<HTMLElement>(target)));
    } else if (target instanceof HTMLElement) {
      elements.push(target);
    }

    this.elements = elements;

    elements.forEach((el) => {
      this.originalHTMLs.push(el.innerHTML);
      const text = el.textContent || "";
      el.innerHTML = "";
      const wordsArr = text.split(" ");
      wordsArr.forEach((word, wIdx) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "split-word";
        wordSpan.style.display = "inline-block";
        wordSpan.style.whiteSpace = "nowrap";

        const charsArr = word.split("");
        charsArr.forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.className = "split-char";
          charSpan.style.display = "inline-block";
          charSpan.textContent = char;
          wordSpan.appendChild(charSpan);
          this.chars.push(charSpan);
        });

        el.appendChild(wordSpan);
        this.words.push(wordSpan);

        if (wIdx < wordsArr.length - 1) {
          const space = document.createTextNode(" ");
          el.appendChild(space);
        }
      });
    });
  }

  revert() {
    this.elements.forEach((el, idx) => {
      if (this.originalHTMLs[idx] !== undefined) {
        el.innerHTML = this.originalHTMLs[idx];
      }
    });
  }
}
