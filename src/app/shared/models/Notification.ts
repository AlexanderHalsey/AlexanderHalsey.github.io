export interface Notification {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  timeout?: number;
  // location?: AnchorLocation;
}

// type Tblock = 'top' | 'bottom';
// type Tinline = 'left' | 'right';
// export type AnchorLocation =
//   | Tblock
//   | Tinline
//   | 'center'
//   | 'center center'
//   | `${Tblock} ${Tinline | 'center'}`
//   | `${Tinline} ${Tblock | 'center'}`;
