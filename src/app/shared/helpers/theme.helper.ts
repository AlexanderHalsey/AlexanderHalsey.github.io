export const getColorGradients = (start: string, end: string, steps: number): string[] => {
  const startColor = hex2rgb(start);
  const endColor = hex2rgb(end);

  const colorGradients = [];
  for (let i = 0; i < steps; i++) {
    const r = Math.floor(startColor.r + (endColor.r - startColor.r) * (i / (steps - 1)));
    const g = Math.floor(startColor.g + (endColor.g - startColor.g) * (i / (steps - 1)));
    const b = Math.floor(startColor.b + (endColor.b - startColor.b) * (i / (steps - 1)));
    colorGradients.push(rgbToHex(r, g, b));
  }

  return colorGradients;
};

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const rgbToHex = (r: number, g: number, b: number) => {
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};
