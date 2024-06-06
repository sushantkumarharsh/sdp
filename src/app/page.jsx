"use client"

import React, { useState, useEffect } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const JitsiMeetComponent = () => {
  const roomName = "YourRoomNameHere";
  const domain = "meet.jit.si";

  const configOverwrite = {
    startWithAudioMuted: true,
    startWithVideoMuted: true,
    disableDeepLinking: true,
    disableThirdPartyRequests: true,
    prejoinPageEnabled: false,
    enableWelcomePage: false,
    enableClosePage: true,
    enableInsecureRoomNameWarning: false,
    enableNoisyMicDetection: true,
    resolution: 720,
    
  };

  const interfaceConfigOverwrite = {
    SHOW_JITSI_WATERMARK: false,
    SHOW_WATERMARK_FOR_GUESTS: false,
    TOOLBAR_BUTTONS: [
      'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
      'fodeviceselection', 'hangup', 'chat', 'recording',
      'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
      'videoquality', 'filmstrip', 'feedback', 'stats', 'shortcuts',
      'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
      'e2ee'
    ],
  };

  const userInfo = {
    displayName: "Guest",
    
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: isMobile ? "1rem" : "2rem",
      boxSizing: "border-box"
    }}>
      <div style={{
        width: "100%",
        maxWidth: isMobile ? "100%" : "1200px",
        aspectRatio: isMobile ? "9/16" : "16/9",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
        <JitsiMeeting
          roomName={roomName}
          userInfo={userInfo}
          domain={domain}
          configOverwrite={configOverwrite}
          interfaceConfigOverwrite={interfaceConfigOverwrite}
          getIFrameRef={iframeRef => { iframeRef.style.height = '100%'; }}
          containerStyles={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

const MyPage = () => {
  return (
    <div>
      <JitsiMeetComponent />
    </div>
  );
};

export default MyPage;