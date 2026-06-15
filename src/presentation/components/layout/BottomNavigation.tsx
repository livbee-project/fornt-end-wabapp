import { bottomNavTabs, type BottomNavKey } from '@/shared/config/navigation';
import { Icon } from '@/presentation/components/common/Icon';
import { Nav, NavIcon, NavLabel, NavLink } from './BottomNavigation.styles';

type BottomNavigationProps = {
  active: BottomNavKey;
};

export function BottomNavigation({ active }: BottomNavigationProps) {
  return (
    <Nav aria-label="main navigation">
      {bottomNavTabs.map((tab) => {
        const isActive = active === tab.key;

        return (
          <NavLink key={tab.key} to={tab.href} $active={isActive}>
            <NavIcon $active={isActive}>
              <Icon name={tab.icon} />
            </NavIcon>
            <NavLabel>{tab.label}</NavLabel>
          </NavLink>
        );
      })}
    </Nav>
  );
}
