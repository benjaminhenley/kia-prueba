// Importar imágenes
import Facebook from '../../assets/img/footer/Facebook.svg'
import Youtube from '../../assets/img/footer/Youtube.svg'
import Instagram from '../../assets/img/footer/Instagram.svg'
import X from '../../assets/img/footer/X.svg'
import { Link } from 'react-router-dom'

// Datos de las marcas
export const redes = [
  {
    nombre: 'Facebook',
    logo: Facebook, 
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true, // Indica que es un enlace externo
  },
  {
    nombre: 'Youtube',
    logo: Youtube, 
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Instagram',
    logo: Instagram, 
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'X',
    logo: X, 
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true,
  },
]

export const autos = [
  {
    nombre: 'Cerato',
    href: '/autos/cerato', 
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'All-new K3 Cross',
    href: 'all-new-k3-cross',
    target: '',
    esExterna: false,
  },
  {
    nombre: 'All-new K3 Sedán',
    href: 'all-new-k3-sedan',
    target: '',
    esExterna: false,
  },
]

export const camionetasSuv = [
  {
    nombre: 'Carnival',
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Seltos',
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Sportage',
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true,
  },
]

export const utilitarios = [
  {
    nombre: 'K2500',
    href: 'http://kia.com.ar/',
    target: '_blank',
    esExterna: true,
  },
]


export const concesionarios = [
  {
    nombre: 'Venta',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Post Venta',
    href: '',
    target: '_blank',
    esExterna: true,
  }
]


export const postVenta = [
  {
    nombre: 'Agendá tu cita',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Contactá a tu asesor',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Beneficios',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Cotizá tu service',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Promise to care',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Garantía',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Originales Kia',
    href: '',
    target: '_blank',
    esExterna: true,
  },
  {
    nombre: 'Kia Assistance',
    href: '',
    target: '_blank',
    esExterna: true,
  }   
]