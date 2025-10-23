import { injectable } from 'inversify';
import { Platform } from 'react-native';
import { StringService } from './StringService';

@injectable()
export class FontService {
  constructor(private stringService: StringService) {}

  getFont(fontName: string, fontWeight: number) {
    const weightMapping: { [key: number]: string } = {
      100: 'Thin',
      200: 'ExtraLight',
      300: 'Light',
      400: 'Regular',
      500: 'Medium',
      600: 'SemiBold',
      700: 'Bold',
      800: 'ExtraBold',
      900: 'Black',
    };

    const capitalizedFontName = this.stringService.capitalize(fontName);
    const capitalizedFontWeight = fontWeight + weightMapping[fontWeight];

    console.log(`${capitalizedFontName}-${weightMapping[fontWeight]}`);

    return Platform.select({
      ios: `${capitalizedFontName}-${weightMapping[fontWeight]}`,
      android: `${capitalizedFontName}-${capitalizedFontWeight}`,
    });
  }
}
