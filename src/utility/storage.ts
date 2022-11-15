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

export const loadCanvas = () => {
  const savedCanvas = localStorage.getItem(KEY);
  if (!savedCanvas) return canvasTemplate;
  const [metadata, data] = JSON.parse(decodeURIComponent(atob(savedCanvas)));
  console.log(`loading saved canvas using version ${metadata.version}`);
  return data;
};
