import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <>
      <h1>MarvelPage</h1>
      <hr />
      <ul>
        <HeroList publisher="Marvel Comics" />
      </ul>
    </>
  );
};
