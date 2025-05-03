import React, { Suspense } from 'react';
import Catagories from '../Catagories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;
