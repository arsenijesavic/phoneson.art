import React from "react";
// import { isMobile, isAndroid, isIOS } from "react-device-detect";

const android = [
  {
    name: "Music Strobe",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/csjIMEIDR3JSEXqsy7WuLGmXM_MeA_2azE9px8MQp_8anuznox6jY_Yxs8_VPmx_53g=s180-rw`,
        name: "Music Strobe",
        link: `https://play.google.com/store/apps/details?id=today.app.a.amusicstrobe`,
        platfrom: "andorid",
      },
    ],
  },

  {
    name: "Sound Buttons",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/tNsCAawQ_4Yh0mc39gE8N8dZZiXJ997MAA0d-qj_okOTNY3IZwjAjGjpgYU3lllkvrM=s360-rw`,
        name: "100 Sound Buttons 2",
        link: `https://play.google.com/store/apps/details?id=com.zeptars.soundbuttons2`,
        platfrom: "andorid",
      },
    ],
  },

  {
    name: "Treadmill",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/d0NtfziX4xeFb2mcd97PyfDSwOkJVvszAj9K2ud7WDhPc2nHde2KPdT5R2Xc2ou5FCw=s360-rw`,
        name: "Finger Exercise",
        link: `https://play.google.com/store/apps/details?id=com.tenbothinc.parmakegzersizi`,
        platfrom: "andorid",
      },
      {
        icon: `https://lh3.googleusercontent.com/PGt3nV45Eiv_ZQcP_pHqNhRgpSY5rKvx1HwhlhKi4pf1_vRSEw8M19f_OMtVIaI2NA=s360-rw`,
        name: "Treadmill finger workout",
        link: `https://play.google.com/store/apps/details?id=com.companyname.Treadmill`,
        platfrom: "andorid",
      },
    ],
  },

  {
    name: "Breathing Coach",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/O6P1xHsIOJDtmhh942bW6GQEhf2HJ8iSMlDaWL7UTIgkEpdAE9rRT18mfaS_kSSxbwst=s360-rw`,
        name: "Breathe Easy",
        link: `https://play.google.com/store/apps/details?id=com.moodtools.breatheeasy`,
        platfrom: "andorid",
      },
    ],
  },

  {
    name: "Game",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/fDYdsxcx4rt4XWMFRhIdaDcgDkYkarVhGXYMZH3qnxAIgY0fyo4gIoVgoEtyVCnC5n0=s360-rw`,
        name: "Okay?",
        link: `https://play.google.com/store/apps/details?id=de.stollenmayer.philipp.Pop_1_1_Android`,
        platfrom: "andorid",
      },
    ],
  },

  {
    name: "Recorders",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/QECal7GeffHkboeQzWEkSyPi_UPCDS8G9QcUS-CmAJPZKy3CS3ouqpXa3Xxb4BYffg=s360-rw`,
        name: "Voice changer with effects",
        link: `https://play.google.com/store/apps/details?id=com.baviux.voicechanger`,
        platfrom: "andorid",
      },
      {
        icon: `https://lh3.googleusercontent.com/KL3JcgIHhA8sQ9FhvvBBWxeVE52tfkUoTyD2Ztc4H_XHxTsrslnUcDzi_t1QqcrakKs=s360-rw`,
        name: "Say It Backwards App / Reverse Speech Recorder",
        link: `https://play.google.com/store/apps/details?id=pl.ayground.playbackapp&hl=en_US`,
        platfrom: "andorid",
      },
    ],
  },
];

const ios = [
  {
    name: "Music Strobe",
    apps: [
      {
        icon: `https://is4-ssl.mzstatic.com/image/thumb/Purple/46/e4/a3/mzi.yhgrwfof.png/460x0w.png`,
        name: "RoboStrobe",
        link: `https://apps.apple.com/us/app/robostrobe-free/id403675608`,
        platfrom: "ios",
      },
      {
        icon: `https://is1-ssl.mzstatic.com/image/thumb/Purple117/v4/70/a2/a1/70a2a185-1323-4cb3-d8de-b60773b2107f/mzl.vmtkkukh.jpg/460x0w.jpg`,
        name: "Night club strobe light-synced with your music",
        link: `https://apps.apple.com/us/app/night-club-strobe-light-synced-with-your-music/id1128598578`,
        platfrom: "ios",
      },
    ],
  },

  {
    name: "Sound Buttons",
    apps: [
      {
        icon: `https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/b6/62/9c/b6629c99-60e6-5544-5381-2d71a03c63ef/AppIcon-1x_U007emarketing-85-220-9.png/460x0w.png`,
        name: "100+ Sound Buttons",
        link: `https://apps.apple.com/us/app/100-sound-buttons/id368367886`,
        platfrom: "ios",
      },

      {
        icon: `https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/3d/fb/9b/3dfb9b46-7040-f5b2-b976-06d3f3246528/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/460x0w.png`,
        name: "100's of Buttons & Sounds Lite",
        link: `https://apps.apple.com/us/app/100s-of-buttons-sounds-lite/id370531252`,
        platfrom: "ios",
      },
    ],
  },

  {
    name: "Treadmill",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/PGt3nV45Eiv_ZQcP_pHqNhRgpSY5rKvx1HwhlhKi4pf1_vRSEw8M19f_OMtVIaI2NA=s360-rw`,
        name: "Treadmill finger workout",
        link: `https://apps.apple.com/us/app/treadmill-finger-workout/id995545542`,
        platfrom: "ios",
      },
    ],
  },

  {
    name: "Breathing Coach",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/O6P1xHsIOJDtmhh942bW6GQEhf2HJ8iSMlDaWL7UTIgkEpdAE9rRT18mfaS_kSSxbwst=s360-rw`,
        name: "Breathe Easy",
        link: `https://apps.apple.com/us/app/breathe-easy-paced-breathing/id1081000353`,
        platfrom: "ios",
      },
    ],
  },

  {
    name: "Game",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/fDYdsxcx4rt4XWMFRhIdaDcgDkYkarVhGXYMZH3qnxAIgY0fyo4gIoVgoEtyVCnC5n0=s360-rw`,
        name: "Okay?",
        link: `https://apps.apple.com/us/app/okay/id962050549`,
        platfrom: "ios",
      },
    ],
  },

  {
    name: "Recorders",
    apps: [
      {
        icon: `https://lh3.googleusercontent.com/QECal7GeffHkboeQzWEkSyPi_UPCDS8G9QcUS-CmAJPZKy3CS3ouqpXa3Xxb4BYffg=s360-rw`,
        name: "Voice changer with effects",
        link: `https://apps.apple.com/us/app/voice-changer-with-effects/id1301164284`,
        platfrom: "ios",
      },
      {
        icon: `https://lh3.googleusercontent.com/KL3JcgIHhA8sQ9FhvvBBWxeVE52tfkUoTyD2Ztc4H_XHxTsrslnUcDzi_t1QqcrakKs=s360-rw`,
        name: "Say It Backwards App / Reverse Speech Recorder",
        link: `https://apps.apple.com/us/app/say-it-backwards-app-lite/id1066924497`,
        platfrom: "ios",
      },
    ],
  },
];

export default () => {
  return (
    <div className="px-8 text-gray-200 min-h-screen">
      <div className="mt-6">
        <h3 className="text-3xl font-bold">Andorid</h3>
        <ul className="flex flex-wrap">
          {android.map((inst, i) => (
            <li key={i} className="mt-6 w-6/12 sm:w-4/12">
              <p className="text-base">{inst.name}</p>

              <ul className="flex">
                {inst.apps.map((app, index) => (
                  <li key={index} className="mt-4 mr-8">
                    <a href={app.link} target="_tab">
                      <div className="inline-flex flex-col justify-center items-center">
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden"
                          src={app.icon}
                          alt={app.name}
                        />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-3xl font-bold">iOS</h3>
        <ul className="flex flex-wrap">
          {ios.map((inst, i) => (
            <li key={i} className="mt-6 w-6/12 sm:w-4/12">
              <p className="text-base">{inst.name}</p>
              <ul className="flex">
                {inst.apps.map((app, index) => (
                  <li key={index} className="mt-4 mr-8">
                    <a href={app.link} target="_tab">
                      <div className="inline-flex flex-col justify-center items-center">
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden"
                          src={app.icon}
                          alt={app.name}
                        />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
