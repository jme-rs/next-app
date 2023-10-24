import { ImageResponse } from 'next/server';
import TerminalIcon from '@mui/icons-material/Terminal';

export const runtime = 'edge';
// export const size = { width: 32, height: 32 };
export const size = { width: 16, height: 16 };
export const contentType = 'image/x-icon';

export default function Icon() {

  return new ImageResponse(
    // <div style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: 'white',
    // }}>
    //   <TerminalIcon style={{
    //     width: '100%',
    //     height: '100%',
    //     color: "#005fb1",
    //   }} />
    // </div>
    <div
      style={{
        fontSize: 24,
        background: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      A
    </div>
    , { ...size }
  );
}
