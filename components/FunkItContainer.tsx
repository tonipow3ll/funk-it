import React from "react"
import PrimaryButton from "./PrimaryButton"
import { Audio } from 'expo-av';

export const FunkItContainer: React.FC = (props: any) => {
  const [sound, setSound] = React.useState<any>();

  async function playFunkSound() {
    console.log('Loading Sound');
    // TODO......
    // const { sound } = await Audio.Sound.createAsync(
      // require('../assets/clips/...mp3')
    // );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  return (
    <PrimaryButton buttonText='funk it' callback={playFunkSound}></PrimaryButton>
  )
}