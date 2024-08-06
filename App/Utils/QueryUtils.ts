export const sanitizeSearch = (search: string): string => {
  search.trim().replace(/([.*+?=^!:${}()^[]|[\]/\\])/g, '');
  return search.replace(' ', '');
};
