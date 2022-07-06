import React from 'react'
import styles from './UserHeaderNav.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MyPictures } from '../../Assets/img/feed.svg'
import { ReactComponent as Stats } from '../../Assets/img/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../Assets/img/adicionar.svg'
import { ReactComponent as Exit } from '../../Assets/img/sair.svg'
import { useMedia } from '../../Hooks/useMedia'

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.btnActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MyPictures />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Stats />
          {mobile && 'Estatiscas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddPhoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Exit />
          {mobile && ' Sair'}
        </button>
      </nav>
    </>
  )
}
