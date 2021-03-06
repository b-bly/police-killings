import { csv } from 'd3-fetch';

// export const csvToJSON = (csv: any) => {
//   const lines = csv.split("\n");
//   const result = [];
//   const headers = lines[0].split(",");

//   for (var i = 1; i < lines.length; i++) {

//     const obj: any = {};
//     const currentline = lines[i].split(",");

//     for (var j = 0; j < headers.length; j++) {
//       obj[headers[j]] = currentline[j];
//     }
//     result.push(obj);
//   }
//   return result;
// }

export const getJsonFromCsv = async  (url: string, cb?: Function): Promise<any> => {
  try {
    return await csv(url, (data) => cb ? cb(data) : data);
  } catch (e) {
    return e;
  }
}

export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export const formatFips = (fips: string) => {
  while (fips.length < 5) {
    fips = '0' + fips;
  }
  return fips;
}

export function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function calculateMapHeight(height: number) {
  return height - 195;
}

export function calculateMapWidth(height: number) {
  return height * 1.1;

}