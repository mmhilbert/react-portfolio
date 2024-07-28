const menuItems = [
    {
        href: '/about',
        label: 'About Me'
    },
    {
        href: '/portfolio',
        label: 'My Projects'
    },
    {
        href: '/contact',
        label: 'Contact Me'
    }
]

const styles = {
    logo: {
       fontSize: 32 
    },
    nav: {
        display: 'flex',
        gap: 12, 
    }
}

const Navigation = ({name}) => {
    return (
        <>
            <a id="logo" href="/" style={styles.logo} className="text-primary">
                {name}'s Portfolio
            </a>
            <nav style={styles.nav}>
                {menuItems.map(menuItem => {
                    return <a className="hover:line-through" href={menuItem.href} key={menuItem.href}>{menuItem.label}</a>
                })}
            </nav>
        </>
    )
}

export default Navigation