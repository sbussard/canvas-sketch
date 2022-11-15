export type CanvasType = {
  name: string;
  data: string[];
}[];

const canvasTemplate: CanvasType = [
  { name: 'Key Partnerships', data: [] },
  { name: 'Key Activities', data: [] },
  { name: 'Key Resources', data: [] },
  { name: 'Value Propositions', data: [] },
  { name: 'Customer Relationships', data: [] },
  { name: 'Channels', data: [] },
  { name: 'Customer Segments', data: [] },
  { name: 'Cost Structure', data: [] },
  { name: 'Revenue Streams', data: [] }
];

const KEY = 'canvas';
const VERSION = '0.3';
const getMetadata = () => ({
  version: VERSION,
  lastUpdated: new Date().toISOString()
});

export const saveCanvas = (canvas: CanvasType) => {
  localStorage.setItem(
    KEY,
    btoa(encodeURIComponent(JSON.stringify([getMetadata(), canvas])))
  );
};

const convertOldSavedData = (oldCanvas: { [key: string]: string }) => {
  try {
    const newCanvas = Object.entries(oldCanvas).flatMap(([key, value]) => [
      { name: key, data: value }
    ]);
    return [getMetadata(), newCanvas];
  } catch {
    return [getMetadata(), canvasTemplate];
  }
};

export const loadCanvas = () => {
  const savedCanvas = localStorage.getItem(KEY);
  if (!savedCanvas) return canvasTemplate;
  const retrievedData = JSON.parse(decodeURIComponent(atob(savedCanvas)));
  const [metadata, data] = Array.isArray(retrievedData)
    ? retrievedData
    : convertOldSavedData(retrievedData);
  return data;
};
