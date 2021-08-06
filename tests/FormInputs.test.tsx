import * as React from 'react';
import {render} from '@testing-library/react'

import FormInputs from '../src/components/FormInputs';

describe('Given the app is loading', () => {

    describe('when FormInputs component renders', () => {

        beforeEach(() => {
            render(<FormInputs />);
        });

        it('has 3 textareas', () => {
            const textareas = document.getElementsByTagName('textarea');
            expect(textareas).toHaveLength(3)
        });

        it('has submit button', () => {
            const submit = document.querySelectorAll('input[type="submit"]');
            expect(submit).toHaveLength(1)
        });

    });

});
