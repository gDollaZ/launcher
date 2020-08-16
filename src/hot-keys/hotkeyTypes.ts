import {HotKeyState} from "@/hot-keys/HotKeyStateMachine";

export interface HotKeyModifierState {
  hotKeys: HotKey[],
  hotKeyStateMachine: HotKeyState,
  toggleButton: ClickCombination,
  lastW3cPort: string,
}

export enum ModifierKey {
  None, CommandOrControl, Alt, Shift, Space
}

export interface ClickCombination {
  modifier: ModifierKey,
  hotKey: string,
}

export interface HotKey {
  combo: ClickCombination
  key: string
}