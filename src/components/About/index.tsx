'use client';

import { FC } from 'react';
import { Area1, Area2, Area3, Area4 } from './styles';

export const About: FC = () => {
  console.log('about');

  return (
    <section className="px-12 pb-12">
      <div className="grid grid-cols-3 gap-2 grid-rows-2 ">
        <Area1 className="bg-stone-900 p-3 rounded-md ">
          <h3 className="text-white/[.6] bold">education</h3>
          <div className="pt-2">
            <span>Licence, haute Ecole Albert Jacquard</span>
            <span>Web development training, STE Training Center</span>
          </div>
        </Area1>
        <Area2 className="bg-stone-900 p-1 rounded-md ">
          <h3 className="text-white/[.6] bold">languages</h3>
          <div className="pt-2">
            <span>Français</span>
            <span>English</span>
            <span>Nederlands</span>
            <span>日本語</span>
          </div>
        </Area2>
        <Area3 className="bg-stone-900 p-4 rounded-md ">
          <h3 className="text-white/[.6] bold">experience</h3>
          <div className="pt-2 flex flex-col text-white/[.9]">
            <span>Software Engineer, Gaming1</span>
            <span>Front End Developer - React, Anytime</span>
            <span>Front-End developer - internship, Reed.be</span>
            <span>Web Developer, Sidema SPRL</span>
          </div>
        </Area3>
        <Area4 className="bg-stone-900 p-1 rounded-md ">
          <h3 className="text-white/[.6] bold">skills</h3>
          <div className="pt-2 flex flex-col text-white/[.9]">
            <span>React</span>
            <span>Typescript</span>
          </div>
        </Area4>
      </div>
    </section>
  );
};
