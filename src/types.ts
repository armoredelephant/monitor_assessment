export type Port = "HDMI" | "VGA" | "DVI" | "DP";
export type Cable =
  | "HDMI"
  | "VGA"
  | "DVI"
  | "HDMI/DVI"
  | "HDMI/DP"
  | "DVI/DP"
  | "VGA/DVI";

export interface Monitor {
  ports: Port[];
  currentCable: Cable;
}

export interface Monitors {
  monitor: Monitor[];
}

export interface contactInfo {
  name: string,
  ref: string,
  email: string,
  count: number
}