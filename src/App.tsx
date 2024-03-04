
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import { drawerSlice } from './ui/drawer';

import { DrawerToggleButton } from './components/DrawerToggleButton';
import { TopBarNavigationControl } from './components/TopBarNavigationControl';

export const App = () => {
  const drawerIsOpen = useSelector((state: RootState) => state.drawer.open);
  const direction = useSelector((state: RootState) => state.direction.direction);
  const dispatch = useDispatch();

  return (
    <div id="app" className={drawerIsOpen ? 'app-drawer-open' : 'app-drawer-closed'} dir={direction}>
      <div id="app-top-bar">
        <div id="app-top-bar-side">
          <DrawerToggleButton />
          <div id="app-top-bar-branding">
            <div id="app-top-bar-branding-logo"></div>
          </div>
        </div>
        <div id="app-top-bar-main">
          <TopBarNavigationControl />
        </div>
      </div>
      <div id="app-main"></div>
      <div id="app-overlay" onClick={() => dispatch(drawerSlice.actions.closeDrawer())}></div>
      <div id="app-drawer">
        <div id="app-drawer-shortcuts"></div>
        <div id="app-drawer-navigation"></div>
      </div>
    </div>
  );
};
