import { getDefaultNormalizer } from '@testing-library/dom';
import react from 'react';
import ResponsiveTBL from '../components/table'


export  default {

        title: 'Demo/Table',
        component: ResponsiveTBL

}


//👇 We create a “template” of how args map to rendering
const Template = (args) => <ResponsiveTBL {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};