import { faker } from '@faker-js/faker';

export interface AppShape {
  name: string;
  id: number;
  imageUrl: string;
}

export interface AppsResponse {
  apps: AppShape[];
}

function generateApps(count: number = 16): AppShape[] {
  return Array.from({ length: count }, () => ({
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    id: faker.number.int({ min: 1000, max: 99999 }),
    imageUrl: faker.image.urlLoremFlickr({ category: 'technology' }),
  }));
}

const APPS = generateApps();
// console.log('apps outside: ', APPS);

export function getApps(params: any) {
  return Promise.resolve({ apps: APPS, total: APPS?.length ?? 0 });
}

export function getApp(id: number) {
  return Promise.resolve({ ...APPS.find((app) => app.id === id) });
}
