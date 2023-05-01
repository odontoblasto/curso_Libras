
import { Nav,NavItem,NavLink } from 'reactstrap';

export function NavHeader(){

    return(
        <>      
    <Nav tabs className='styles.navTabs' >
            <NavItem>
                <NavLink
                active
                href="#"
                >
                Registrar-se
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Sobre o Curso
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Investimento
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Vídeos Gratuitos
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Dúvidas
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                disabled
                href="#"
                >
               Login
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                disabled
                href="#"
                >
               Seu Perfil
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                disabled
                href="#"
                >
               Logout
                </NavLink>
            </NavItem>
        </Nav>
    </>        
    )
}