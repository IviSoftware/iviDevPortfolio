export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    label: 'Inicio',
    href: '#inicio'
  },
  {
    label: 'Sobre Mí',
    href: '#sobre-mi'
  },
  {
    label: 'Proyectos',
    href: '#proyectos'
  },
  {
    label: 'Contacto',
    href: '#contacto'
  }
];

export const contactButton: MenuItem = {
  label: 'Contactar',
  href: '#contacto'
};