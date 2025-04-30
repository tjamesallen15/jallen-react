import { Experience } from "../common/types";
import { getValidateData } from "./gateway";

export async function getExperiences() {
  const data: Experience[] = await getValidateData('experiences');
  return data;
}