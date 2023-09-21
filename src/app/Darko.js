"use client";

import { blindsInit, blindsToggle, setBlindsStyles } from 'blinds';
import { useEffect } from 'react';
import DarkModeStyle from './DarkModeStyle.json';

const Darko = () => {
  useEffect(() => {
    setBlindsStyles(DarkModeStyle);

    blindsInit();

    document.querySelector('#blinds_id').onclick = () => {
      blindsToggle();
    }
  });
}

export default Darko;
