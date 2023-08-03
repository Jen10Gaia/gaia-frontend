import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';

import AuthContext from "./../../../../context/AuthContext";

const AppTopbar = forwardRef((props, ref) => {
  const { user, logout } = useContext(AuthContext);

  const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current
  }));

  const logoutHandler = () => {
    logout();
  };


  return (
    <div className="layout-topbar">

      <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
        <i className="pi pi-bars" />
      </button>

      <Link href="/">
        <div className="logoWrapper">
          <div className="logoImgWrapper mr-5">
            <img width="160" height="70" src="/images/logo.png" alt="" />
          </div>

        </div>
      </Link>

      <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
        <i className="pi pi-ellipsis-v" />
      </button>

      {user && (
        <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
          <h3>
            <span> Hi, {user.first_name.toUpperCase()}</span>{" "}

          </h3>

        </div>
      )}


    </div>
  );
});

App.displayName = 'AppTopbar';
export default AppTopbar;
