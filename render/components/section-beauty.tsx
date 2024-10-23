import { Divider, Button } from '@blueprintjs/core';
import { useImageState } from '../state/image';

export const SectionBeauty = () => {
  const { beauty } = useImageState();
  const nameMap = beauty.names;
  const images = beauty.images;

  return (
    <div className="section-beauty">
      <div className="letter-map">
        {Object.keys(nameMap).map((letter) => (
          <a key={letter} href={`#beauty-letter-${letter}`} className="letter">
            {letter}
          </a>
        ))}
      </div>

      <div className="scroll-container">
        <div className="name-list">
          {Object.keys(nameMap).map((letter) => {
            return (
              <div key={letter}>
                <h2 id={`beauty-letter-${letter}`}>
                  {letter}
                  <Divider />
                </h2>
                <div className="name-block">
                  {nameMap[letter].map((name) => {
                    return (
                      <Button className="name-item">
                        {name}({images[name].num})
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
