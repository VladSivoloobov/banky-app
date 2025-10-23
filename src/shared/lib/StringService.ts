import { injectable } from 'inversify';

@injectable()
export class StringService {
  capitalize(str: string, separator: string = ' ') {
    return str
      .split(separator)
      .map((word) => {
        const wordArr = word.split('');
        const letter = wordArr[0];
        wordArr[0] = letter.toUpperCase();

        return wordArr.join('');
      })
      .join(separator);
  }
}
