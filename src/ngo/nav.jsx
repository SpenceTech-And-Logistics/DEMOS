import { Link as RLink, NavLink as RNavLink } from 'react-router-dom'

const BASE = '/mpa/ngo'
const pre = (to) => (to === '/' ? BASE : to.startsWith('/') ? BASE + to : to)

export function Link({ to, ...rest }) {
  return <RLink to={pre(to)} {...rest} />
}
export function NavLink({ to, ...rest }) {
  return <RNavLink to={pre(to)} end={to === '/'} {...rest} />
}
