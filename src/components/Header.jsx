import s from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

console.log(igniteLogo)

export function Header() {
  return(
    <header className={s.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite"/>

    </header>
  )
}
