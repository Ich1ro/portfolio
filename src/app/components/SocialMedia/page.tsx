import React from 'react'
import { LinkToNewTab } from "../Primitives/Links";
import { SocialMediaLinks } from "../../data/SocialMediaLinks";
import './SocialMedia.modules.scss'

function SocialMedia() {
  return (
    <div className='contactCard'>
      <h2 className='header'>Social Media</h2>
      <div className='social'>
        {SocialMediaLinks.map((obj) => (
          <LinkToNewTab key={obj.url} className='link' href={obj.url}>
            <obj.icon className='icon' fill='var(--button-text-color)' />
          </LinkToNewTab>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;