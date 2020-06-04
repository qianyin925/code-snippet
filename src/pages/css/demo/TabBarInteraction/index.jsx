import React from 'react';
import SlidingBg from './SlidingBg';
import scss from './index.module.scss';
import PopUpSecondaryMenu from './PopUpSecondaryMenu';

import { Card } from 'antd';

const LIST = [
  {
    title: '弹出式二级菜单',
    Component: PopUpSecondaryMenu,
  },
  {
    title: '滑动背景',
    Component: SlidingBg,
  },
];

export default () => (
  <div className={scss.body}>
    {LIST.map(V => (
      <Card
        title={V.title}
        key={V.title}
        className={scss.card}>
        <V.Component/>
      </Card>
    ))}
  </div>
);
