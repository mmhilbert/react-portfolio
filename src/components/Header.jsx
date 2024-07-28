import Navigation from "./Navigation"

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 16px'
    },
    logo: {
       color: 'white',
       fontSize: 32 
    }
}

const Header = ({ name }) => {
    return (
        <header style={styles.header}>
            <Navigation name={name} /> 
        </header>
    )
}

export default Header