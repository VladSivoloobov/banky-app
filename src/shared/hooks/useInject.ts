import { ServiceIdentifier } from 'inversify';
import { useState } from 'react';
import { rootContainer } from '../container';

export function useInject<T>(serviceIdentifier: ServiceIdentifier<T>): T {
  const [service] = useState(() => rootContainer.get(serviceIdentifier));

  return service;
}
