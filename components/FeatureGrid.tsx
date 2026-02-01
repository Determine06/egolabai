
import React from 'react';

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 text-left">
      <div>
        <h3 className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase font-bold mb-4">
          WHAT WE PROVIDE
        </h3>
        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
          continuous data supply for training and evaluation — designed for distribution shift, not curated demos.
        </p>
      </div>
      <div>
        <h3 className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase font-bold mb-4">
          HOW TEAMS USE IT
        </h3>
        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
          time-bound licenses, field-of-use controls, and delivery formats that plug into modern training pipelines.
        </p>
      </div>
    </div>
  );
};

export default FeatureGrid;
