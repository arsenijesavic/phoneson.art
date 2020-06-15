import React from "react";
import { get } from "lib/api";

export default ({ composition }) => {
  return (
    <div className="text-gray-100 max-w-screen-lg mx-auto min-h-screen pb-48">
      <header className="py-4">
        <div className="flex items-center px-4">
          <div onClick={() => router.back()} className="mr-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-teal-500"
            >
              <path d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-gray-100 text-2xl leading-none">
              {composition.name}
            </h1>
            <ul>
              {composition.compositors.map((composer, index) => (
                <li key={index}>
                  <p className="font-regular text-xs leading-none text-gray-300 uppercase">
                    {composer.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div className="mt-8">
        <p>
          To perform on any device with a web browser, ideally on a smartphone
        </p>
        <p>Any duration, but usually more than 15 minutes</p>
        <p>
          Uses HTML5 Web Audio API. It is currently compatible with most modern
          desktop browsers, Chrome on Android phones and Chrome or Safari on
          iPhones.
        </p>
        <p>
          The program rhythmically repeats arpeggiated C power chord with C
          tuned to 132Hz. When you feel that the time is right, change it to the
          power chord a fifth upward, using the buttons below or the swipe
          panel. Again, when the time is right, move again forward. Travel
          forward in a similar way by fifths ever further as long as it feels
          right. After that, change the chord distance itself for fifth upward.
          The new interval will now be a major second (we translate all
          intervals to those with smallest distance, for instance, a major ninth
          upwards becomes a major second also upwards, while a minor sixth
          upwards translates into a major third downwards). Change direction
          from time to time and move backwards instead of forwards. Traverse the
          chords reachable in this way by going forward or backward by the same
          interval, as before. After that, change the interval again for a fifth
          upward, which now makes a major third downward. Do the same as before.
          The composition ends when you have used with all or most of the
          intervals.
        </p>
        <p>
          With every chord change the manner of arpeggio changes. The program
          goes through all the 4-permutations of 9 notes of a power chord
          distributed in three octaves. There are 3024 of them (9*8*7*6). There
          are 16 notes in each arpeggio phrase and four new permutations are
          selected on each chord change.
        </p>
        <p>
          Start and stop the music with Play/Pause button below. Perform the
          piece using the the four buttons next to it or the swipe panel below.
          Interval buttons have an immediate effect, while Chord buttons change
          notes of the chord as they appear. Swipes in four direction are also
          available on the above swipe surface, with the same meaning as the
          respective four buttons. Each button triggers one of the following
          events.
        </p>
        <ol>
          <li>Move the chord one interval backward (Swipe left)</li>
          <li>Move the chord one interval forward (Swipe right)</li>
          <li>Change the interval a fifth backward (Swipe up)</li>
          <li>Change the interval a fifth forward (Swipe down)</li>
        </ol>
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  style={{ fontSize: "180%", height: "80px", width: "150px" }}
                  id="btnPlayPause"
                >
                  ⏵⏸
                </button>
              </td>
              <td>
                <button
                  style={{ fontSize: "120%", height: "80px", width: "150px" }}
                  id="btnToggle1"
                >
                  Chord&lt;&lt;
                </button>
              </td>
              <td>
                <button
                  style={{ fontSize: "120%", height: "80px", width: "150px" }}
                  id="btnToggle0"
                >
                  Chord&gt;&gt;
                </button>
              </td>
              <td>
                <button
                  style={{ fontSize: "120%", height: "80px", width: "150px" }}
                  id="btnToggle3"
                >
                  Interval&lt;&lt;
                </button>
              </td>
              <td>
                <button
                  style={{ fontSize: "120%", height: "80px", width: "150px" }}
                  id="btnToggle2"
                >
                  Interval&gt;&gt;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="w-full" id="touchsurface" style={{ height: "500px" }}>
          Swipe Panel
        </div>
        <h3>Last updated January 11th 2018</h3>

        <script
          dangerouslySetInnerHTML={{
            __html: `
/*

As stated above, the script consists of a list of variables and of program code.
The list of variables starts here.
During the development of the sound, certain changes take place, but not at every byte,
because that would be too fast to follow. T is the value of a basic time interval
(measured in bytes of the sound flow) in which mostly any change can happen. T equals
882 bytes, which equals 1/400 s at the rate of 44100 frames per second per stereo channel.

*/

   var T=882;

/*

D is the sound density, or how many individual notes the chord contains, which is always 24.
V indicates volume of each individual sound in the current cluster, measured in units of scale
that constitute 16-bit sound, in other words, in units inside the interval between -32768 and
32767. V also never changes. The main frequency is chosen to be C (132Hz, calculated as minor
third upwards of A which is two octaves below cammerton; 440Hz/4 = 110Hz; 110Hz*6/5 = 132Hz).
Since f[0]=6 and main frequency = 132Hz = f*44100Hz/V it follows that V=2004.545455.

*/

   var D=16;
   var V=2004.545455;

/*

Each event has its button that triggers it, as explained above.
There is a common timer and time interval measured in units of T above,
in which it appears. STATES is the overall number of events, which is constant and
equals 5. There are four buttons, because one of the events is always triggered,
as will be explained below.
i is the counter of bytes in the sound signal (the sound is 16bit stereo 44100frames/s).
tx is the counter of time expressed in time measured in intervals of T (1/400s).

*/

   var STATES = 5;
   var i=0;
   var tx = 0;

/*

TT is the iterval (counting in counts of T's above) in which changes take place,
as already explained.
ST[] contains 5 states that change according to the TT time interval and which,
when set to 1, indicate that the corresponding event will take place. These states
trigger changes to the sound flow which happen at intervals, as ST is 1 only during
one sample.
Part is a variable whose binary representation contains the state of all the toggles
and therefore is used to control the flow of the composition. Only those changes
where corresponding bit in Part variable is 1 will happen, and, since there are 5
states, only lowest 5 bits count. For instance if Part = 3, (00101 in binary
representation) then only changes of type 0 and 2, corresponding to toggles 1 and 3,
will take place.

*/

   TT=80;
   var ST = [0,0,0,0,0];
   var part = 0;
   var Play = false;

   var VVTable = [23, 18, 14, 11, 9, 7, 6, 4, 3, 3, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
   var Intervals = ["Pure Fifth upwards", "Major Second upwards", "Minor Third downwards",
                    "Major Third upwards", "Minor Second downwards", "Diminished Fifth",
                    "Minor Second upwards", "Major third downwards", "Minor Third upwards",
                    "Major Second downwards", "Pure Fourth upwards"];
   var IntPtr = 0;

/*

In this section we assign a listener function to each button, so that variable part,
described above, is modified accordingly with each press of each button. Only State 5
doesn't have a button as it is always on, as will be explained below.

*/

   var btnPlayPause;
   var btnToggle=[0,0,0,0,0];
   var touchsurface = document.getElementById('touchsurface');

   btnPlayPause = document.getElementById('btnPlayPause');
   for(i=0;i<STATES;i++)
      if(i!=4)
         btnToggle[i]=document.getElementById('btnToggle'+i+'');

   var DefaultButtonColor = btnToggle[0].style.backgroundColor;

   btnPlayPause.addEventListener("click", PlayNotPlay, false);
   btnToggle[0].addEventListener("click", ChordUp, false);
   btnToggle[1].addEventListener("click", ChordDn, false);
   btnToggle[2].addEventListener("click", IntervalUp, false);
   btnToggle[3].addEventListener("click", IntervalDn, false);

   function PlayNotPlay()
   {
      var target;
      Play = !Play;
      target = Play? 1.0 : 0.0;
      gainNode.gain.setTargetAtTime(target, audioContext.currentTime, 0.015);
   }

   function ChordUp()
   {
      part = part ^ 1;
      resetChangeTriggers();
   }

   function ChordDn()
   {
      part = part ^ 2;
      resetChangeTriggers();
   }

   function IntervalUp()
   {
      part = part ^ 4;
      resetChangeTriggers();
   }

   function IntervalDn()
   {
      part = part ^ 8;
      resetChangeTriggers();
   }

   function resetChangeTriggers()
   {
      for(j=0;j<STATES;j++)
      {
         ST[j]=0;
      }
   }

/*

Variables v[] and f[] define the individual components of the sound cluster. f[]'s contain
current increments of amplitudes of individual components. The faster an amplitude grows
the more often it completes a cycle of changes between the highest and lowest amplitude limits,
and therefore it is a measure of pitch. v[]'s are the current values of the amplitudes of
individual components. The scale and effective pitch actually depends also on V, because the
smaller the V, the faster an amplitude completes its cycle, so in a way, the triad f[] and V
define a bidimensional musical scale in which all the voices of the chord move.

*/

   var j,k,l,m;

   var notes = [];
   var possiblenotes = [];
   var permutations = [];

   notes[0] = 6;
   notes[1] = notes[0];
   notes[2] = notes[0]*3/2;

   for(k=0;k<3;k++)
      for(j=0;j<3;j++)
         possiblenotes[k*3+j]=notes[k]*Math.pow(2,j);
   m=0;

   for(i=0;i<9;i++)
   for(j=0;j<9;j++)
   for(k=0;k<9;k++)
   for(l=0;l<9;l++)
      if(i!=j&&i!=k&&i!=l&&j!=k&&j!=l&&k!=l)
      {
         permutations[m++]=possiblenotes[i];
         permutations[m++]=possiblenotes[j];
         permutations[m++]=possiblenotes[k];
         permutations[m++]=possiblenotes[l];
      }

   var f = [];
   var v = [];
   var vv = [];

   for(j=0;j<D;j++)
   {
       f[j] = permutations[j];
       v[j] = 0;
       vv[j] = D-1;
   }
   var F=3/2;
   var RelativeTonality = 1;
   i=0;
   var CurrPrmStart = 0;
   var CurrPrmEnd = D;
   var pptr=CurrPrmStart;

/*

Variables audioContext, jsProcessor and gainNode, and function createAudioContext()
are used for communicating with the sound card via Web Audio API.
bufferSize is a constant that indicates the amount of data the sound card will receive
at every cycle. leftBuffer and rightBuffer are memory buffers where the sound data will
be stored for the sound card to play in each cycle.
Function initAudio() makes necessary initializations for real time audio and sets
copyBuffer() as the callback function that the sound card will call at regular intervals
to fetch the data inside leftBuffer and rightBuffer.
initAudio() will be the first thing to do when the page loads.

*/

   function createAudioContext()
   {
      var contextClass = (window.AudioContext ||
         window.webkitAudioContext ||
         window.mozAudioContext ||
         window.oAudioContext);
      if (contextClass) {
         return new contextClass();
      } else {
         alert("Sorry. WebAudio API not supported. Try using the Google Chrome or Safari browser.");
         return null;
      }
   }

   var audioContext = createAudioContext();
   var jsProcessor = 0;
   var gainNode;
   var bufferSize = 16384;
   var leftBuffer = new Array(bufferSize);
   var rightBuffer = new Array(bufferSize);
   leftBuffer.fill(0);
   rightBuffer.fill(0);

   // Resume playback when user interacted with the page.
   document.querySelector('button').addEventListener('click', function() {
     if(audioContext.state === 'suspended')
     {
        audioContext.resume().then(() => {
           console.log('Playback resumed successfully');
        });
     }
   });

   function initInterfaces()
   {
      initSwipeInterface();
      initAudio();
   }

   function initSwipeInterface()
   {
       var startX,
          startY,
          hordist,
          verdist,
          threshold = 150, //required min distance traveled to be considered swipe
          allowedTime = 500, // maximum time allowed to travel that distance
          elapsedTime,
          startTime

       function handleswipeRight()
       {
          touchsurface.innerHTML = '<span style="color:red">right swipe!</span>'
          ChordUp();
       }

       function handleswipeLeft()
       {
          touchsurface.innerHTML = '<span style="color:red">left swipe!</span>'
          ChordDn();
       }

       function handleswipeUp()
       {
          touchsurface.innerHTML = '<span style="color:red">up swipe!</span>'
          IntervalUp();
       }

       function handleswipeDn()
       {
          touchsurface.innerHTML = '<span style="color:red">down swipe!</span>'
          IntervalDn();
       }

       function handleTap()
       {
          touchsurface.innerHTML = '<span style="color:red">Tap!</span>'
          PlayNotPlay();
       }

       touchsurface.addEventListener('touchstart', function(e){
          touchsurface.innerHTML = ''
          var touchobj = e.changedTouches[0]
          hordist = 0
          verdist = 0
          startX = touchobj.pageX
          startY = touchobj.pageY
          startTime = new Date().getTime() // record time when finger first makes contact with surface
          e.preventDefault()
      }, false)

      touchsurface.addEventListener('touchmove', function(e){
         e.preventDefault() // prevent scrolling when inside DIV
      }, false)

      touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        hordist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        verdist = touchobj.pageY - startY // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed

        var swiperightBol = (elapsedTime <= allowedTime && hordist >= threshold && Math.abs(verdist) <= Math.abs(hordist/2))
        var swipeleftBol = (elapsedTime <= allowedTime && hordist <= -threshold && Math.abs(verdist) <= Math.abs(hordist/2))
        var swipeupBol = (elapsedTime <= allowedTime && verdist <= -threshold && Math.abs(hordist) <= Math.abs(verdist/2))
        var swipednBol = (elapsedTime <= allowedTime && verdist >= threshold && Math.abs(hordist) <= Math.abs(verdist/2))
        var tapBol = (elapsedTime <= allowedTime && Math.abs(verdist) <= 100 && Math.abs(hordist) <= 100)
        if(swiperightBol)
           handleswipeRight()
        if(swipeleftBol)
           handleswipeLeft()
        if(swipeupBol)
           handleswipeUp()
        if(swipednBol)
           handleswipeDn()
//Tap is disabled because it introduces risk of errors
/*        if(tapBol)
           handleTap()*/
        e.preventDefault()
      }, false)

   }

   function initAudio()
   {
      if (audioContext)
      {
         jsProcessor = audioContext.createScriptProcessor(bufferSize, 0, 2);
         jsProcessor.onaudioprocess = copyBuffer1Bit;

         gainNode = audioContext.createGain();

         jsProcessor.connect(gainNode);
         gainNode.connect(audioContext.destination);
         gainNode.gain.setTargetAtTime( 0.0, audioContext.currentTime, 0.015);
      }
   }

   window.onload=initInterfaces();

/*

As stated above, the manner of sound generation consists in calculating the entire
sound wave frame by frame and sending it to the sound card in a memory buffer at regular
intervals. Calculation of one slice of the waveform (which is 16384 frames long, as shown
above, in constant bufferSize) happens inside the function fillBuffer.
In addition, we use double buffering in order to optimise speed. The moment the sound card
calls the callback function, the value of sound buffer is obtained by copying from another
buffer, and then, while the soundcard is playing the current slice of the waveform, we
construct the sound snippet (with the function fillBuffer) inside this second buffer, which
will be copied to the sound card on the next call to callback function copyBuffer. And the
same is done in every cycle.

*/


   function copyBuffer1Bit(event)
   {
      var j=0;
      var leftChannel = event.outputBuffer.getChannelData(0);
      var rightChannel = event.outputBuffer.getChannelData(1);
      var n = leftChannel.length;
      for(j=0;j<n;j++)
      {
         leftChannel[j]=leftBuffer[j]>=0?1.0:-1.0;
         rightChannel[j]=rightBuffer[j]>=0?1.0:-1.0;
      }
      if(Play)
         setTimeout(fillBuffer, 3);
   }

/* These two variables indicate the state during which the chord transitions from
   old to new one */

   var changingChordUp = false;
   var changingChordDn = false;

   function fillBuffer()
   {

/* t is the frame count for the current slice of the waveform. j is a counter used in
   various occasions. */

      var t = 0;
      var j=0; var k=0;

/* aa and bb are, respectively, cumulative amplitude on the left and right speaker; in
   other words final values for each frame will be contained in these variables before
   being placed in corresponding place in the memory buffer which will later be copied
   to the soundcard */

      var aa = 0;
      var bb = 0;

/* Do the following until the buffer is filled */

      while ( t<bufferSize )
      {

/* Check that we are on the limit of the basic interval T when some events may happen.
   Update ST and AST according to the intervals TT as stated above. Take into account
   only those TT intervals where corresponding bit in part variable is 1 */

         if(i%T==0||(i+1)%T==0||(i+2)%T==0||(i+3)%T==0)
         {
            var p=part;
/* State 4 is always on. See below. */
            p = p|16;
            for(k=0;k<STATES;k++)
            {
               if(p%2==1&&tx%TT==0)
                  ST[k]=1;
               else
                  ST[k]=0;
               p>>=1;
            }

/* If event 4 is triggered, we move members of vv array around. This lets us have the
chord performed as arpeggio, from first to last note. */
            if(ST[4]==1)
            {
               for(j=0;j<D;j++)
               {
                  vv[j]++;
                  if(vv[j]>D-1)
                     vv[j]=0;
                  if(j<D-1&&vv[j]+D-vv[j+1]==1)
                     break;
               }
               if(i>0)
               {
                  for(j=0;j<D-1;j++)
                     f[j]=f[j+1];
                  f[D-1]=permutations[pptr++]*RelativeTonality;
                  if(f[D-1]>40)
                     f[D-1]=f[D-1]/8;
                  if(f[D-1]<5)
                     f[D-1]=f[D-1]*8;
                  if(pptr>=CurrPrmEnd)
                     pptr=CurrPrmStart;
               }
            }
/* Move the chord for interval F upwards. F starts with 3/2 (Fifth) */
            if(ST[0]==1)
            {
               RelativeTonality *= F;
               while(RelativeTonality>3/2)
                  RelativeTonality/=2;
               CurrPrmStart = CurrPrmEnd;
               CurrPrmEnd = CurrPrmStart + D;
               if(CurrPrmEnd >= m)
               {
                  CurrPrmStart = 0;
                  CurrPrmEnd = D;
               }
               pptr = CurrPrmStart;
               touchsurface.innerHTML=(RelativeTonality*6/V*44100).toFixed(2) + " " + Intervals[IntPtr] + " (" + F + ")";
               part-=1;
            }
/* Move the chord for interval F downwards. F starts with 3/2 (Fifth) */
            if(ST[1]==1)
            {
               RelativeTonality /= F;
               while(RelativeTonality<2/3)
                  RelativeTonality*=2;
               CurrPrmStart = CurrPrmEnd;
               CurrPrmEnd = CurrPrmStart + D;
               if(CurrPrmEnd >= m)
               {
                  CurrPrmStart = 0;
                  CurrPrmEnd = D;
               }
               pptr = CurrPrmStart;
               touchsurface.innerHTML=(RelativeTonality*6/V*44100).toFixed(2) + " " + Intervals[IntPtr] + " (" + F + ")";
               part-=2;
            }
/* Change the interval F upwards by multiplying it with 3/2 (Fifth) */

            if(ST[2]==1&&!changingChordUp&&!changingChordDn)
            {
               F=F*3/2;
               while(F>3/2)
                  F/=2;
               IntPtr++;
               if(IntPtr>10)
               {
                  F=3/2;
                  IntPtr=0;
               }
               touchsurface.innerHTML=(RelativeTonality*6/V*44100).toFixed(2) + " " + Intervals[IntPtr] + " (" + F + ")";
               part-=4;
            }
/* Change the interval F downwards by dividing it with 3/2 (Fifth) */
            if(ST[3]==1&&!changingChordUp&&!changingChordDn)
            {
               F=F*2/3;
               while(F<2/3)
                  F*=2;
               IntPtr--;
               if(IntPtr<0)
               {
                  F=4/3;
                  IntPtr=10;
               }
               touchsurface.innerHTML=(RelativeTonality*6/V*44100).toFixed(2) + " " + Intervals[IntPtr] + " (" + F + ")";
               part-=8;
            }

            tx++;
         }

/* We construct the chord. aa contains the left part, bb the right part in the
   stereo sound picture, as stated above. */

         aa=0;bb=0;

         for(j=0;j<D;j++)
         {
            v[j]+=f[j];
            if(v[j]>V)
               v[j]=-V;
            if(j%2)
               aa+=v[j]*VVTable[vv[j]];
            else
               bb+=v[j]*VVTable[vv[j]];
         }

         leftBuffer[t] = aa*4/D/32768;
         i+=2;
         if(i%T==0||(i+1)%T==0) continue;
         rightBuffer[t] = bb*4/D/32768;
         i+=2;
         t++;
      }
   }


      `,
          }}
        />
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const [composition] = await get(
    `*[_type == 'composition' && slug == '/compositions/one-bit-flow']|order(date desc) [0..10]{
      ...,
      "compositors": *[_type == 'composers' && name in ^.compositors[]]
    }`
  );

  return {
    props: { composition },
  };
}
