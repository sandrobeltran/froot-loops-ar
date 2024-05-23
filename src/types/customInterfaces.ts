export interface IAnimation {
    clip: string;
    loop?: "repeat" | "once" | "pingpong";
    label: string;
    description: string;
    image?: string
}