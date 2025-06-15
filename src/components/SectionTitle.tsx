import React from 'react';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}
export const SectionTitle = ({
  title,
  subtitle,
  centered = false
}: SectionTitleProps) => {
  return <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      <div className={`h-1 w-20 bg-blue-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>;
};