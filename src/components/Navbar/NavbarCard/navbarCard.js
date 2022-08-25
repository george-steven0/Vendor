import './navbarCard.scss'
const NavCard = (props) => {
    return ( 
        <>
            <section className='navbarCard'>
                <div>
                    <img src={props.img} alt="" />
                </div>

                <div>
                    <span>{props.type}</span>
                </div>
            </section>
        </>
    );
}

export default NavCard;