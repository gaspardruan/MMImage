import { Divider, Button, Icon } from '@blueprintjs/core';
import { useImageState } from '../state/image';
import { useState } from 'react';
import { ImageGrid } from './image-grid';

export const SectionBeauty = () => {
  const { beauty } = useImageState();
  const nameMap = beauty.names;
  const images = beauty.images;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const className = open ? 'invisible' : 'section-beauty invisible';

  const handleNameClick = (name: string) => {
    setOpen(true);
    setName(name);
  };

  const handleBackClick = () => {
    setOpen(false);
  };

  const header = () => {
    return (
      <div className="image-grid-header">
        <Icon
          className="back-icon"
          icon="chevron-left"
          size={28}
          onClick={handleBackClick}
        />
        <h1>{name}</h1>
      </div>
    );
  };

  return (
    <>
      <div className={className}>
        <div className="letter-map">
          {Object.keys(nameMap).map((letter) => (
            <a
              key={letter}
              href={`#beauty-letter-${letter}`}
              className="letter"
            >
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
                        <Button
                          className="name-item"
                          onClick={() => handleNameClick(name)}
                        >
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

      {open && <ImageGrid images={images[name].images} Header={header} />}
    </>
  );
};
