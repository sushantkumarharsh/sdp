"use client"

import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const JitsiMeetComponent = () => {
  const roomName = "YourRoomNameHere";
  const domain = "meet.jit.si";
  
  const configOverwrite = {
    startWithAudioMuted: false,
    startWithVideoMuted: false,
    disableDeepLinking: true,
    disableThirdPartyRequests: true,
    prejoinPageEnabled: false,
    enableWelcomePage: false,
    enableClosePage: true,
    enableInsecureRoomNameWarning: true,
    enableNoisyMicDetection: true,
    resolution: 720
  };
  const userInfo = {
    displayName: "Stranger"
  };
  return (
    <div style={{ height: "100vh", display: "grid", flexDirection: "column" }}>
      <JitsiMeeting
        roomName={roomName}
        userInfo={userInfo}
        domain={domain}
        configOverwrite={configOverwrite}
        containerStyles={{ display: "flex", flex: 1 }}
      />
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

export default MyPage;