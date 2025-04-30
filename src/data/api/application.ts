import { Application } from '../common/types';
import { getServerData } from './gateway';

export async function getApplications() {
  const data: Application[] = await getServerData('applications');
  return data;
}