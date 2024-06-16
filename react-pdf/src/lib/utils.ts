import '@/lib/fonts';
import { Config, Locales } from '@/lib/config';
import Themes from '@/lib/themes';

export function getTheme(theme: string) {
    const [themeName, mode] = theme.split('-');
    const selectedTheme = Themes[themeName as keyof typeof Themes];
    return selectedTheme[mode as keyof typeof selectedTheme];
}

export const colorVars = getTheme(Config.defaultTheme);

export function getLocale() {
    return Locales[Config.defaultLocale as keyof typeof Locales];
}

export function ln(key: string) {
    const locale = getLocale();
    return locale[key as keyof typeof locale] as string || key as string;
}

export function cn(...styles: unknown[]) {
    return Object.assign({}, ...styles);
}