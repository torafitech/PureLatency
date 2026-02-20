import React from 'react';
import Badge from './Badge';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      {badge && <Badge>{badge}</Badge>}
      <h2 className="mb-4">{title}</h2>
      {subtitle && <p className="subhead">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;