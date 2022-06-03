export interface Board {
  cell: { id: string; space: string }[];
}

export type setboard<board> = (board: board) => board;

export type useBoolean<P> = (NextValue: Readonly<P>) => boolean;

export type useState<P> = (NextValue: Readonly<P>) => P;
