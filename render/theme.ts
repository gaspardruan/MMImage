import {
  DefaultThemes,
  MMImageTheme,
  LoadedFluxTheme,
  defaultDark,
  defaultLight,
} from '../typings/themes-defaults';

export function getTheme(name?: string | null): LoadedFluxTheme {
  let theme: LoadedFluxTheme | null;
  switch (name) {
    case DefaultThemes.DARK:
      theme = defaultDark;
      break;
    case DefaultThemes.LIGHT:
      theme = defaultLight;
      break;
    default:
      theme = defaultDark;
  }

  return { ...theme, css: getCssStringForTheme(theme) };
}

/**
 * Get the CSS string for a theme.
 *
 * @param {MMImageTheme} theme
 * @returns {Promise<string>}
 */
function getCssStringForTheme(theme: MMImageTheme): string {
  let cssContent = '';

  Object.keys(theme.common).forEach((_key) => {
    const key = _key as keyof MMImageTheme['common'];
    cssContent += `    --${_key}: ${theme.common[key]};\n`;
  });

  return `\n  html, body {\n${cssContent}  }\n`;
}
