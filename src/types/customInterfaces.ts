export interface IAnimation {
  clip: string;
  loop?: "repeat" | "once" | "pingpong";
  dataSections: IDataSection[];
}

export interface IDataSection {
  image?: string;
  label: string;
  description: string;
  reversed?: boolean;
}
