export const NavBar = () => {
    return (
        <div className="container">
            <h3>Intocode Shop</h3>
            <ul className="list-group list-group-flush">
             <li key={'1'} className="list-group-item">Гаджеты и аксессуары</li>
             <li key={'2'} className="list-group-item">Бытовая техника</li>
             <li key={'3'} className="list-group-item">Прочее</li>   
            </ul>
        </div>
    )
}