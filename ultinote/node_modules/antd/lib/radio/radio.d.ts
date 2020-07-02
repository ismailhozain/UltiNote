import * as React from 'react';
import RadioGroup from './group';
import RadioButton from './radioButton';
import { RadioProps } from './interface';
interface CompoundedComponent extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
    Group: typeof RadioGroup;
    Button: typeof RadioButton;
}
declare const Radio: CompoundedComponent;
export default Radio;
