import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
          &copy;
          <span className="font-medium ml-2">Global Access Immigration Agency</span>
        </div>
    );
};

export default AppFooter;
