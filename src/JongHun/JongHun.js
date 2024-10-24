import { SelfMyIntroName } from "./JongHunName";
import { SelfMyIntro } from "./JongHunIntro";
import { SelfMyIntroBody } from "./JongHunIntro2";
import { UseGetApi } from "./UseGetApi";
import { FirstImpression } from "./TeamFirstImpression";

export function JongHun() {
  return (
    <div>
      <SelfMyIntroName />
      <SelfMyIntro />
      <SelfMyIntroBody />
      <FirstImpression />
    </div>
  );
}
