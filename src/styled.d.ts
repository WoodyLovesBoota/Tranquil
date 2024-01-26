import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    hottest: { day: string; night: string };
    hotter: { day: string; night: string };
    hot: { day: string; night: string };
    normal: { day: string; night: string };
    cold: { day: string; night: string };
  }
}
