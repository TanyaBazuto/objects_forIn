import orderByProps from "../app";

test('testing sorting by properties', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40} ;
  const prop = ["name", "level"];
  const result = orderByProps(obj, prop);
  expect(result).toEqual([
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 }
  ]);
});

test('testing sorting with empty "prop" array', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40} ;
  const prop = [];
  const result = orderByProps(obj, prop);
  expect(result).toEqual([
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "name", value: "мечник" }
  ]);
});