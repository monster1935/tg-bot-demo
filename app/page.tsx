
"use client";
import Image from 'next/image'
export default function Home() {

  const reward = () => {
    console.log('reward');
    (window as any).adBreak({
      type: 'reward',  // rewarded ad
      name: 'reward-continue',
      beforeReward: (showAdFn: any) => {
        console.log('beforeReward')
        showAdFn && showAdFn();
      },
      beforeAd: () => { console.log('beforeAd'); },     // You may also want to mute the game's sound.
      adDismissed: () => {
        console.log('adDismissed')
        // Hide the reward button and continue lose flow.
      },
      adViewed: () => { console.log('adViewed'); },       // Reward granted - continue game at current score.
      afterAd: () => { console.log('afterAd'); },       // Resume the game flow.
    });

  }

  const start = () => {
    (window as any).adBreak({
      type: 'preroll',
      adBreakDone: () => console.log('start ad')
    })
  }

  const handleLost = () => {
    reward();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="font-bold m-8 text-lg">Hello Tg Bot</div>
      <div className="w-full h-28 flex justify-center items-center rounded-md bg-slate-400 text-white">
        Banner
      </div>
      <div className="flex flex-wrap items-center justify-between w-full">
        {/* <button className="border rounded-md bg-slate-400 p-2 text-white" onClick={start}>start</button> */}

        <button className="border rounded-md bg-slate-400 w-1/3 h-20 mb-2 text-white" onClick={handleLost}>reward</button>
        <button className="border rounded-md bg-slate-400 w-1/3 h-20 mb-2 text-white" onClick={handleLost}>reward</button>
        <button className="border rounded-md bg-slate-400 w-1/3 h-20 mb-2 text-white" onClick={handleLost}>reward</button>
        <button className="border rounded-md bg-slate-400 w-1/3 h-20 mb-2 text-white" onClick={handleLost}>reward</button>
        <button className="border rounded-md bg-slate-400 w-1/3 h-20 mb-2 text-white" onClick={handleLost}>reward</button>
        <button className="border rounded-md bg-slate-400 w-1/3 h-20 mb-2 text-white" onClick={handleLost}>reward</button>
      </div>
      <div className="w-full h-20 bg-slate-400 flex rounded-md justify-center items-center text-white">Tab here</div>
    </main>
  );
}
