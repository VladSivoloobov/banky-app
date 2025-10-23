import { Container } from 'inversify';
import { DateService, FontService } from '../lib';
import { StringService } from '../lib/StringService';

const rootContainer = new Container();

rootContainer.bind(FontService).toSelf().inSingletonScope();
rootContainer.bind(StringService).toSelf().inSingletonScope();
rootContainer.bind(DateService).toSelf().inSingletonScope();

export default rootContainer;
