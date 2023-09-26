import { Capsule } from '@models';
import { objectToCamel } from 'ts-case-convert';

export type CapsulesGetResponse = Capsule[];

export const getCapsules = async (): Promise<CapsulesGetResponse> => {
  try {
    const requestOptions = {
      method: "GET",
    };

    const data: CapsulesGetResponse = await fetch(
      "https://api.spacexdata.com/v3/capsules",
      requestOptions
    ).then((res) => res.json());
    return objectToCamel(data); // data.map((item) => objectToCamel(item));
  } catch (error) {
    throw new Error("Error while fetching Capsules");
  }
};
