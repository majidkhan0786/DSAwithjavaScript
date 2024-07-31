const people = [
  { name: "john", id: 1 },
  { name: "jack", id: 7 },
  { name: "dora", id: 5 },
];
const ageData = [
  { age: 34, id: 2 },
  { age: 16, id: 1 },
  { age: 26, id: 3 },
  { age: 46, id: 7 },
  { age: 36, id: 5 },
];
const getIds = ageData?.map((d) => d?.id);
const filterData = people?.filter((f) => getIds?.includes(f?.id));
