import React, { useState } from 'react';
import produce from 'immer';
import { loadCanvas, saveCanvas } from 'src/utility/storage';
import type { CanvasType } from 'src/utility/storage';

export default function (this: boolean) {
  if (!this) throw new Error('Improper import of useAppStateManager');
  const [state, setState] = useState<CanvasType>(loadCanvas());

  const addBlockItem = (boxIndex: number, item: string) => {
    setState((state) => {
      const newState = produce(state, (draftState) => {
        const part = produce(draftState[boxIndex].data, (data) => {
          data.push(item);
        });
        draftState[boxIndex].data = part;
      });
      saveCanvas(newState);
      return newState;
    });
  };

  const removeBlockItem = (boxIndex: number, index: number) => {
    setState((state) => {
      const newState = produce(state, (draftState) => {
        const part = produce(draftState[boxIndex].data, (data) => {
          data.splice(index, 1);
        });
        draftState[boxIndex].data = part;
      });
      saveCanvas(newState);
      return newState;
    });
  };

  return {
    initialized: true,
    state,
    addBlockItem,
    removeBlockItem
  };
}
