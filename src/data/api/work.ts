import { ProcessWork, Work } from '../common/types';
import { getServerData } from './gateway';

export async function getWorks() {
  const data: Work[] = await getServerData('works');
  return data;
}

export async function getProcessWorks() {
  const data: ProcessWork[] = await getServerData('works');

  for (let i = 0; i < data.length; i++) {
    const work: ProcessWork = data[i];
    const descriptions = work.description.split('-');
    const filteredDescriptions = descriptions.filter((description) => description.trim() !== '');
    work.descriptions = filteredDescriptions;
  }

  return data;
}