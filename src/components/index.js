import dynamic from 'next/dynamic';

export { default as Alert } from './Alert';
export { default as Loading } from './Loading';
export { default as LoadingLinear } from './LoadingLinear';
export { default as ColorLink } from './ColorLink';
export { default as ColorButton } from './ColorButton';
export { default as InputNumberFormat } from './InputNumberFormat';

export { default as LanguageBar } from './LanguageBar';
export const Darkmode = dynamic(() => import('./Darkmode'), { ssr: false });

