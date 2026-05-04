// Typewriter helper. typeText(el, text, speed, onDone)
function typeText(el, text, speed, onDone) {
  el.textContent = '';
  let i = 0;
  const tick = () => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(tick, speed);
    } else if (onDone) {
      onDone();
    }
  };
  tick();
}

// Type a sequence of lines, each followed by a newline.
function typeLines(el, lines, speed, lineDelay, onDone) {
  el.textContent = '';
  let li = 0;
  const nextLine = () => {
    if (li >= lines.length) {
      if (onDone) onDone();
      return;
    }
    const line = lines[li];
    let ci = 0;
    const tick = () => {
      if (ci < line.length) {
        el.textContent += line.charAt(ci);
        ci++;
        setTimeout(tick, speed);
      } else {
        el.textContent += '\n';
        li++;
        setTimeout(nextLine, lineDelay);
      }
    };
    tick();
  };
  nextLine();
}
