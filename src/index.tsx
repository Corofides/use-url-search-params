import React from 'react';
import { URLSearchParamsProvider } from './URLSearchParamsProvider';

const MyComponent = () => {
    return (
        <div>
            <h1>Hello, World</h1>
        </div>
    );
};

/*export default {
    URLSearchParamsProvider;
}; //MyComponent;*/
export * from './URLSearchParamsProvider';;
