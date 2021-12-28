import {ReactElement, useState} from 'react';
import type {PropsType} from './types';
import {Link} from 'react-router-dom';

/* styles */
import {StyledMenus, StyledMenuItem, ItemsStyles} from './styled';
import {theme} from 'utils/colors';

/* components */
import Label from 'components/Label';

const Menus = (props: PropsType): ReactElement => {
  const {menus = []} = props;
  const [activeKey, setActiveKey] = useState('home');

  return (
    <>
      <StyledMenus onSelect={(e) => setActiveKey(e.key)}>
        {menus.map((x: any) => {
          const checkedActiveKey =
            activeKey === x?.key ? theme.SIDEBAR_ACTIVE : theme.WHITE;
          const checkActiveTitle =
            activeKey === x?.key ? theme.WHITE : theme.DEFAULT;

          return x?.subTitle ? (
            <Label
              color={theme.SUBTITLE_GRAY}
              bold={600}
              size={12}
              lineHeight={18}
              key={x?.key}>
              {x?.subTitle}
            </Label>
          ) : (
            <StyledMenuItem key={x?.key} activecolor={checkedActiveKey}>
              <div style={ItemsStyles}>
                <Link to={x?.key}>
                  <Label
                    color={checkActiveTitle}
                    size={15}
                    bold={500}
                    lineHeight={18}
                    key={x?.key}>
                    {x?.title}
                  </Label>
                </Link>
              </div>
            </StyledMenuItem>
          );
        })}
      </StyledMenus>
    </>
  );
};

export default Menus;
